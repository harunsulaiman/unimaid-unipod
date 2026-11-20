import { NextResponse } from "next/server";
import { isValidEmail } from "@/lib/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_FORMS = new Set(["membership", "contact", "partner", "volunteer", "booking"]);
const MAX_BODY = 24_000;

/* Naive in-memory rate limiter. On serverless this is per-instance; swap for
   Upstash/Redis in a multi-region deployment (see README -> "Hardening"). */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 6;

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY) {
    return NextResponse.json({ ok: false, error: "Payload too large." }, { status: 413 });
  }

  let body: { form?: unknown; data?: Record<string, unknown> };
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const form = clean(body.form, 40);
  if (!ALLOWED_FORMS.has(form)) {
    return NextResponse.json({ ok: false, error: "Unknown form." }, { status: 400 });
  }

  const data = body.data ?? {};
  const payload = Object.fromEntries(
    Object.entries(data)
      .filter(([k]) => k !== "company")
      .map(([k, v]) => [clean(k, 40), clean(v)])
      .filter(([, v]) => v.length > 0),
  );

  // Honeypot: bots fill the hidden "company" field.
  if (clean(data.company)) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.fullName || payload.fullName.length < 2) {
    return NextResponse.json({ ok: false, error: "Please provide your full name." }, { status: 422 });
  }
  if (!isValidEmail(payload.email ?? "")) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 422 });
  }

  const submission = {
    form,
    receivedAt: new Date().toISOString(),
    ip,
    data: payload,
  };

  // Delivery hooks — configured via env. Never throw to the client on delivery failure;
  // log loudly instead so no submission is silently lost in the logs.
  const webhook = process.env.FORM_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) console.error("[forms] webhook rejected", res.status, submission.form);
    } catch (err) {
      console.error("[forms] webhook failed", err, submission.form);
    }
  } else {
    console.info("[forms] submission", JSON.stringify(submission));
  }

  return NextResponse.json({ ok: true });
}
