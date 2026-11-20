import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading, Pill } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { posts } from "@/content";
import { formatDate } from "@/lib/utils";

export function NewsSection() {
  const [lead, ...rest] = posts;
  const secondary = rest.slice(0, 3);

  return (
    <section className="container-x mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading
          eyebrow="Newsroom"
          title={
            <>
              From the floor of the{" "}
              <span className="font-serif font-normal italic text-gradient-ember">pod.</span>
            </>
          }
          lead="Milestones, launches and stories of things that got made."
          action={
            <ButtonLink href="/news" variant="outline" withArrow>
              All news
            </ButtonLink>
          }
        />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <Link
            href={`/news/${lead.slug}`}
            className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-ember-900/50 via-night-800 to-night-950 p-7 sm:p-10"
          >
            <svg viewBox="0 0 400 400" className="absolute -right-16 -top-16 size-80 opacity-25 transition-transform duration-1000 group-hover:rotate-6" aria-hidden="true">
              <circle cx="200" cy="200" r="150" stroke="rgba(255,187,99,0.5)" fill="none" />
              <circle cx="200" cy="200" r="105" stroke="rgba(255,187,99,0.35)" fill="none" strokeDasharray="4 8" />
              <circle cx="200" cy="200" r="60" stroke="rgba(255,187,99,0.6)" fill="none" />
            </svg>
            <div className="relative">
              <div className="flex items-center gap-3">
                <Pill tone="ember">{lead.category}</Pill>
                <span className="text-xs text-sand-300/70">{formatDate(lead.date)}</span>
              </div>
              <h3 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-sand-50 sm:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-sand-200/85">{lead.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ember-200">
                Read story
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="grid gap-3">
          {secondary.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/news/${post.slug}`}
                className="group flex h-full flex-col justify-center rounded-2xl border border-white/[0.07] bg-white/[0.022] p-5 transition-colors hover:border-white/[0.14] hover:bg-white/[0.045] sm:p-6"
              >
                <div className="flex items-center gap-3 text-[0.6875rem] text-sand-400">
                  <span className="font-mono uppercase tracking-[0.14em] text-ember-300/90">{post.category}</span>
                  <span>{formatDate(post.date, { day: "numeric", month: "short" })}</span>
                </div>
                <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight text-sand-50 transition-colors group-hover:text-ember-100">
                  {post.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-sand-300/70">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
