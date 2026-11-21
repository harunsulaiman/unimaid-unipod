import { Reveal } from "@/components/ui/reveal";
import { SectionHeading, Pill } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { startups } from "@/content";

/**
 * Homepage teaser: the intro plus a redirect CTA into /startups.
 * Individual venture cards are deliberately NOT rendered here — the full portfolio
 * lives on the ventures page. Pass `showCards` only if a listing needs the grid.
 */
export function StartupsSection({ showCards = false }: { showCards?: boolean }) {
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
          lead="Teams arrive with a sketch and leave with a tested prototype — through UNDP innovation challenges, timbuktoo venture calls or a UniPod residency. Every venture in the portfolio began the same way: on a workbench, in this building."
          action={
            <ButtonLink href="/startups" withArrow>
              Explore the ventures
            </ButtonLink>
          }
        />
      </Reveal>

      {showCards && (
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {startups.map((venture) => (
            <article
              key={venture.slug}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7"
            >
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-sand-400">
                {venture.sector}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-sand-50">{venture.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-300/80">{venture.description}</p>
            </article>
          ))}
        </div>
      )}

      <Reveal delay={100}>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/[0.08] bg-night-900/50 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Pill tone="chad">Applications</Pill>
            <span className="text-sm text-sand-300">
              timbuktoo venture calls and UniPod residency applications are listed on the programs page.
            </span>
          </div>
          <ButtonLink href="/programs#calls" size="sm" withArrow>
            See open calls
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
