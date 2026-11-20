import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { NewsSection } from "@/components/sections/news-section";
import { allPosts } from "@/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Commissioning updates, equipment handover milestones, challenge calls and stories from the UNDP UniPod at the University of Maiduguri.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "News" }]}
        eyebrow="Newsroom"
        title={
          <>
            Things that got{" "}
            <span className="font-serif font-normal italic text-gradient-ember">made.</span>
          </>
        }
        lead="Milestones, launches and the people behind them. Every story here happened on our floor."
      />
      <NewsSection />
      <section className="container-x mt-24">
        <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-sand-400">All stories</h2>
        <ul className="mt-6 divide-y divide-white/[0.07] border-t border-white/[0.07]">
          {allPosts
            .filter((_, i) => i > 0)
            .map((post) => (
              <li key={post.slug}>
                <a href={`/news/${post.slug}`} className="group grid gap-2 py-6 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-8">
                  <span className="font-mono text-xs text-sand-400">{post.category}</span>
                  <span className="text-lg font-medium text-sand-50 group-hover:text-ember-200">{post.title}</span>
                  <span className="text-xs text-sand-400">{new Date(post.date).getUTCFullYear()}</span>
                </a>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
