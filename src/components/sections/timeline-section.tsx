import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { timeline } from "@/content";

export function TimelineSection() {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading
          eyebrow="How we got here"
          title={
            <>
              From a grant to a{" "}
              <span className="font-serif font-normal italic text-gradient-ember">floor full of machines.</span>
            </>
          }
          lead="A purpose-built ASR-iCIE complex, UNDP equipment and a pan-African timbuktoo framework — and a community that showed up to use them."
        />
      </Reveal>

      <ol className="relative mt-16 border-l border-white/10 pl-8 sm:pl-12">
        {timeline.map((item, i) => (
          <Reveal key={`${item.year}-${item.title}`} delay={i * 70} as="li">
            <div className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[2.6rem] top-1 grid size-4 place-items-center rounded-full border border-ember-500/40 bg-night-950 sm:-left-[3.6rem]"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-ember-400" />
              </span>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-ember-300">{item.year}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-sand-50 sm:text-2xl">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sand-300/80">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
