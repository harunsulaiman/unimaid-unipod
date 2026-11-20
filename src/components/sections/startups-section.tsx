import { Reveal } from "@/components/ui/reveal";
import { SectionHeading, Pill } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { startups } from "@/content";
import { cn } from "@/lib/utils";

const stageTone: Record<string, string> = {
  Idea: "border-white/12 bg-white/[0.05] text-sand-300",
  Prototype: "border-amber-400/25 bg-amber-400/10 text-amber-200",
  Pilot: "border-chad-500/25 bg-chad-500/10 text-chad-300",
  Revenue: "border-ember-500/30 bg-ember-500/10 text-ember-200",
};

export function StartupsSection({ limit }: { limit?: number }) {
  const list = limit ? startups.slice(0, limit) : startups;
  return (
    <section className="container-x mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading
          eyebrow="Built in the pod"
          title={
            <>
              Ventures that started{" "}
              <span className="font-serif font-normal italic text-gradient-ember">on a bench.</span>
            </>
          }
          lead="Working prototypes with real users. These teams came through UNDP innovation challenges, timbuktoo venture calls or a UniPod residency — and they are still building."
          action={
            <ButtonLink href="/startups" variant="outline" withArrow>
              All ventures
            </ButtonLink>
          }
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {list.map((venture, i) => (
          <Reveal key={venture.slug} delay={(i % 2) * 90}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/25 hover:bg-white/[0.045] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-sand-400">{venture.sector}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-sand-50">{venture.name}</h3>
                </div>
                <span className={cn("shrink-0 rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em]", stageTone[venture.stage])}>
                  {venture.stage}
                </span>
              </div>
              <p className="mt-4 text-[0.9375rem] font-medium text-ember-200/90">{venture.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-300/80">{venture.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-sand-400">
            <span>
              Built in the <span className="text-sand-200">{venture.lab}</span>
            </span>
          </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.07] pt-5 text-xs text-sand-400">
                <span><span className="text-sand-200">{venture.founder}</span></span>
                <span>{venture.cohort}</span>
                <span className="text-chad-300/90">{venture.highlight}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/[0.08] bg-night-900/50 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Pill tone="chad">Applications</Pill>
            <span className="text-sm text-sand-300">timbuktoo venture calls and UniPod residency applications are listed on the programs page.</span>
          </div>
          <ButtonLink href="/programs#calls" size="sm" withArrow>
            See open calls
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
