import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { mission } from "@/content";

const approach = [
  { step: "01", name: "Observe", body: "Sit with the problem-owner. Document, measure, ask again." },
  { step: "02", name: "Frame", body: "Turn the complaint into a specific, testable brief." },
  { step: "03", name: "Make", body: "Build the crudest version that answers the question." },
  { step: "04", name: "Test", body: "Put it in the field. Break it. Learn quickly." },
  { step: "05", name: "Sell", body: "Put a price on it and find the first paying customer." },
];

export function Mission() {
  return (
    <section id="story" className="container-x mt-24 scroll-mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading
          eyebrow={mission.eyebrow}
          title={
            <>
              Concept to working MVP,{" "}
              <span className="font-serif font-normal italic text-gradient-ember">inside one building.</span>
            </>
          }
          lead={mission.body}
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {mission.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 90}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-7 transition-colors hover:border-ember-500/25 sm:p-9">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-ember-400/80">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-sand-50">{pillar.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-sand-300/85">{pillar.body}</p>
              <span
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-ember-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/[0.08] bg-night-900/60">
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-6 py-4 sm:px-9">
            <h3 className="text-sm font-medium text-sand-100">How we build</h3>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-sand-400">Every cohort</span>
          </div>
          <ol className="grid divide-y divide-white/[0.06] sm:grid-cols-5 sm:divide-x sm:divide-y-0">
            {approach.map((a) => (
              <li key={a.step} className="p-6">
                <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ember-400">{a.step}</span>
                <p className="mt-3 text-base font-medium text-sand-50">{a.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-sand-400">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
