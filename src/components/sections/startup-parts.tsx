import { Reveal } from "@/components/ui/reveal";
import { startups } from "@/content";
import { cn } from "@/lib/utils";

const stageTone: Record<string, string> = {
  Idea: "border-white/12 bg-white/[0.05] text-sand-300",
  Prototype: "border-amber-400/25 bg-amber-400/10 text-amber-200",
  Pilot: "border-chad-500/25 bg-chad-500/10 text-chad-300",
  Revenue: "border-ember-500/30 bg-ember-500/10 text-ember-200",
};

function VentureCard({ slug }: { slug: string }) {
  const venture = startups.find((v) => v.slug === slug);
  if (!venture) return null;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/25 hover:bg-white/[0.045] sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-sand-400">{venture.sector}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-sand-50 sm:text-3xl">{venture.name}</h2>
        </div>
        <span className={cn("shrink-0 rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em]", stageTone[venture.stage])}>
          {venture.stage}
        </span>
      </div>
      <p className="mt-4 text-base font-medium text-ember-200/90">{venture.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-300/85">{venture.description}</p>
<dl className="mt-7 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-5 text-xs">
        <div>
          <dt className="text-sand-400">Founders</dt>
          <dd className="mt-0.5 text-sand-100">{venture.founder}</dd>
        </div>
        <div>
          <dt className="text-sand-400">Programme</dt>
          <dd className="mt-0.5 text-sand-100">{venture.cohort}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-sand-400">Built in</dt>
          <dd className="mt-0.5 text-sand-100">{venture.lab}</dd>
        </div>
      </dl>
      <p className="mt-4 flex items-center gap-2 text-xs text-chad-300/90">
        <span className="size-1.5 rounded-full bg-chad-400" aria-hidden="true" />
        {venture.highlight}
      </p>
    </article>
  );
}

function Grid() {
  return (
    <section className="container-x mt-20">
      <div className="grid gap-5 md:grid-cols-2">
        {startups.map((v, i) => (
          <Reveal key={v.slug} delay={(i % 2) * 80}>
            <VentureCard slug={v.slug} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Pipeline() {
  const steps = [
    { t: "Maker", b: "Join a Fab Skills cohort or use a free student bench.", n: "01" },
    { t: "Prototype", b: "Health Lab or Fabrication Lab; mentor review at each checkpoint.", n: "02" },
    { t: "Pilot", b: "Launchpad teams test with real partner sites in Borno.", n: "03" },
    { t: "Revenue", b: "Storefront slot, pricing support and procurement introductions.", n: "04" },
  ];
  return (
    <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-4">
      {steps.map((s) => (
        <li key={s.t} className="bg-night-950 p-6">
          <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ember-400">{s.n}</span>
          <p className="mt-3 text-base font-medium text-sand-50">{s.t}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-sand-400">{s.b}</p>
        </li>
      ))}
    </ol>
  );
}

export const StartupCard = { Grid, VentureCard } as const;
