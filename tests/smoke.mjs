const url = "https://unimaid-unipod.vercel.app";

const checks = [];
const add = (name, pass, detail = "") => checks.push({ name, pass, detail });

const home = await fetch(url + "/");
const html = await home.text();

add("home 200", home.status === 200, String(home.status));
add("rebrand present", (html.match(/UNIMAID-UniPod/g) || []).length > 5);
add("old brand absent", !/Abdulsamad Rabiu Center|ARC UNIPOD/.test(html));
add(
  "canonical points at deployment",
  html.includes('<link rel="canonical" href="https://unimaid-unipod.vercel.app'),
  (html.match(/<link rel="canonical" href="[^"]+"/) || ["none"])[0],
);
add("hero CTA icon left-aligned", /inline-flex items-center gap-2[^>]*>[^<]*<svg/.test(html));
add("hero stats has Seminar", html.includes("Seminar"));
add("Sahel region copy", html.includes("North-East and the Sahel"));
add("no 'zones' language", !/\bzones\b/i.test(html));
add("HSTS header", !!home.headers.get("strict-transport-security"));
add("x-powered-by hidden", home.headers.get("x-powered-by") === null);

const og = await fetch(url + "/opengraph-image");
add("og image renders", og.status === 200 && og.headers.get("content-type")?.includes("image/png"));

const robots = await fetch(url + "/robots.txt");
const robotsText = await robots.text();
add("robots references sitemap", robotsText.includes("sitemap.xml"));

const sitemap = await fetch(url + "/sitemap.xml");
const sitemapText = await sitemap.text();
add("sitemap has canonical host", sitemapText.includes("https://unimaid-unipod.vercel.app"));
add("sitemap url count", (sitemapText.match(/<loc>/g) || []).length >= 20, String((sitemapText.match(/<loc>/g) || []).length));

const health = await fetch(url + "/api/health");
const healthJson = await health.json();
add("health ok", health.status === 200 && healthJson.ok === true);

const formPost = await fetch(url + "/api/forms", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ form: "contact", data: { fullName: "Smoke Test", email: "smoke@unimaid.edu.ng" } }),
});
add("form accepts valid", formPost.status === 200);

const badForm = await fetch(url + "/api/forms", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ form: "contact", data: { fullName: "X", email: "bad" } }),
});
add("form rejects invalid", badForm.status === 422);

const pages = ["/about", "/facilities", "/book", "/programs", "/visit", "/membership", "/startups", "/events", "/news", "/gallery", "/get-involved", "/contact"];
for (const p of pages) {
  const r = await fetch(url + p);
  add("page " + p, r.status === 200, String(r.status));
}

let failed = 0;
for (const c of checks) {
  if (!c.pass) failed++;
  console.log((c.pass ? "PASS" : "FAIL") + "  " + c.name + (c.detail ? "  [" + c.detail + "]" : ""));
}
console.log("\n" + (checks.length - failed) + "/" + checks.length + " passed");
process.exit(failed ? 1 : 0);
