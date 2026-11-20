import { site } from "@/config/site";
import { allLabs, allPosts, startups } from "@/content";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.legalName,
    alternateName: ["UNDP UniPod UNIMAID", "UniPod Maiduguri"],
    url: site.url,
    logo: `${site.url}/icon.svg`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.founded),
    parentOrganization: { "@type": "CollegeOrUniversity", name: "University of Maiduguri", url: site.uniurl },
    funder: [
      {
        "@type": "Organization",
        name: "United Nations Development Programme (UNDP) — timbuktoo Initiative",
        url: site.undpurl,
      },
      { "@type": "GovernmentOrganization", name: "Federal Government of Nigeria" },
    ],
    containedInPlace: {
      "@type": "Place",
      name: "Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship (ASR-iCIE)",
      url: site.asrcieurl,
      description: "Host edifice built with an ASR Africa grant; houses the UniPod makerspaces.",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: "NG",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    sameAs: site.socials.map((s) => s.href),
    amenityFeature: allLabs.map((l) => ({ "@type": "LocationFeatureSpecification", name: l.name })),
    knowsAbout: [
      "Rapid prototyping",
      "Design thinking",
      "CNC fabrication",
      "Embedded systems and IoT",
      "Renewable energy prototyping",
      "Agro-tech and post-harvest processing",
      "Venture incubation",
    ],
    makesOffer: startups.map((s) => ({ "@type": "Offer", name: s.name, description: s.tagline })),
    award: allPosts.filter((p) => p.featured).map((p) => p.title),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en-NG",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${site.url}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function EventJsonLd({
  event,
}: {
  event: { title: string; date: string; endDate?: string; time: string; venue: string; description: string; slug: string };
}) {
  const start = new Date(`${event.date}T09:00:00+01:00`).toISOString();
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: start,
    endDate: new Date(`${event.endDate ?? event.date}T17:00:00+01:00`).toISOString(),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: event.venue, address: `${site.address.street}, ${site.address.city}, Nigeria` },
    organizer: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/events/${event.slug}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ArticleJsonLd({
  post,
}: {
  post: { title: string; excerpt: string; date: string; author: string; slug: string };
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/news/${post.slug}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
