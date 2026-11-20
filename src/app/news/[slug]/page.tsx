import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Pill } from "@/components/ui/section";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import { allPosts } from "@/content";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Story not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const index = allPosts.findIndex((p) => p.slug === slug);
  const next = allPosts[(index + 1) % allPosts.length];

  return (
    <>
      <ArticleJsonLd post={post} />
      <article>
        <PageHero
          compact
          crumbs={[{ label: "News", href: "/news" }, { label: post.category }]}
          eyebrow={`${post.category} · ${formatDate(post.date)}`}
          title={post.title}
          lead={post.excerpt}
        >
          <p className="text-sm text-sand-300">
            By <span className="font-medium text-sand-100">{post.author}</span>
          </p>
        </PageHero>

        <div className="container-x mt-16">
          <div className="mx-auto max-w-2xl">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-sand-100 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-ember-300"
                    : "mt-6 text-[1.0625rem] leading-[1.8] text-sand-300/90"
                }
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-8">
              <Pill>{post.category}</Pill>
              <span className="text-xs text-sand-400">Published {formatDate(post.date)}</span>
            </div>

            <nav className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Link href="/news" className="inline-flex items-center gap-2 text-sm text-sand-300 transition hover:text-sand-50">
                <ArrowLeft className="size-4" /> All stories
              </Link>
              <Link href={`/news/${next.slug}`} className="group inline-flex items-center gap-2 text-sm font-medium text-ember-300 transition hover:text-ember-200">
                Next: {next.title}
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </Link>
            </nav>
          </div>
        </div>
      </article>
    </>
  );
}
