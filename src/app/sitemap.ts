import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { events, allPosts } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: "/", priority: 1, changeFrequency: "weekly" },
      { url: "/about", priority: 0.9, changeFrequency: "monthly" },
      { url: "/facilities", priority: 0.9, changeFrequency: "monthly" },{ url: "/book", priority: 0.95, changeFrequency: "weekly" },{ url: "/visit", priority: 0.9, changeFrequency: "monthly" },
      { url: "/programs", priority: 0.9, changeFrequency: "monthly" },
      { url: "/membership", priority: 0.85, changeFrequency: "monthly" },
      { url: "/startups", priority: 0.85, changeFrequency: "monthly" },
      { url: "/events", priority: 0.85, changeFrequency: "weekly" },
      { url: "/news", priority: 0.8, changeFrequency: "weekly" },
      { url: "/gallery", priority: 0.7, changeFrequency: "monthly" },
      { url: "/get-involved", priority: 0.8, changeFrequency: "monthly" },
      { url: "/contact", priority: 0.8, changeFrequency: "yearly" },
    ] as const
  ).map((route) => ({ ...route, url: `${site.url}${route.url}`, lastModified: now }));

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${site.url}/events/${event.slug}`,
    lastModified: new Date(`${event.date}T09:00:00+01:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${site.url}/news/${post.slug}`,
    lastModified: new Date(`${post.date}T09:00:00+01:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...eventRoutes];
}
