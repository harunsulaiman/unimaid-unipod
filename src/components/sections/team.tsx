import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { leadership } from "@/content";
import { initials } from "@/lib/utils";

export function Team() {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading
          eyebrow="Leadership"
          title="Who is accountable for the pod."
          lead="The UniPod is coordinated through the ASR-iCIE centre at UNIMAID and supported by UNDP Nigeria. These are the offices responsible for it."
        />
      </Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((person, i) => (
          <Reveal key={person.name} delay={(i % 3) * 80}>
            <article className="group h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors hover:border-ember-500/25 hover:bg-white/[0.045]">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full border border-ember-500/25 bg-ember-500/10 font-display text-sm font-semibold text-ember-200">
                  {initials(person.name)}
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-tight text-sand-50">{person.name}</h3>
                  <p className="mt-0.5 text-xs text-ember-200/80">{person.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-sand-300/80">{person.bio}</p>
              {person.org && (<p className="mt-4 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-sand-400">{person.org}</p>)}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
