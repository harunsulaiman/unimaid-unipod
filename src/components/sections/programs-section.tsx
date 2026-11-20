import { Reveal } from "@/components/ui/reveal";
import { SectionHeading, Pill } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { programs } from "@/content";
import { cn } from "@/lib/utils";

const statusCopy = {
  open: { label: "Applications open", tone: "border-chad-500/30 bg-chad-500/10 text-chad-300" },
  waitlist: { label: "Waitlist", tone: "border-amber-400/30 bg-amber-400/10 text-amber-200" },
  running: { label: "Running now", tone: "border-white/12 bg-white/[0.05] text-sand-300" },
} as const;

export function ProgramsSection({ full = false }: { full?: boolean }) {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading
          eyebrow="Programs"
          title={
            <>
              Three ways in.{" "}
              <span className="font-serif font-normal italic text-gradient-ember">One place to build.</span>
            </>
          }
          lead="Whether you arrive with a team, a sketch or nothing but curiosity, there is a structured path from your first induction to a working product in front of a paying customer."
          action={
            !full && (
              <ButtonLink href="/programs" variant="outline" withArrow>
                All programs
              </ButtonLink>
            )
          }
        />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {programs.map((program, i) => {
          const status = statusCopy[program.status];
          return (
            <Reveal key={program.slug} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition-colors hover:border-white/[0.16] hover:bg-white/[0.045]">
                <div className="relative h-32 overflow-hidden border-b border-white/[0.06] bg-night-900">
                  <ProgramGlyph index={i} />
                  <span className="absolute bottom-4 left-6 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ember-300">
                    {program.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className={cn("self-start rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em]", status.tone)}>
                    {status.label}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-sand-50">{program.name}</h3>
                  <p className="mt-1.5 text-sm font-medium text-ember-200/90">{program.kicker}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-sand-300/80">{program.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-white/[0.07] pt-5 text-[0.8125rem] text-sand-300/80">
                    {program.outcomes.slice(0, 3).map((o) => (
                      <li key={o} className="flex gap-2.5">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-chad-400" aria-hidden="true" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  {program.cohort && (
                    <p className="mt-5 text-xs font-medium text-sand-400">{program.cohort}</p>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/[0.08] bg-night-900/50 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Pill tone="ember">Also running</Pill>
            <span className="text-sm text-sand-300">Health Innovation Series · Creative Economy Studio · STEM Roadshow</span>
          </div>
          <ButtonLink href="/contact" size="sm" variant="ghost" withArrow>
            Ask about a programme
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}

/* Simple geometric glyph per program — keeps cards visually distinct without stock imagery. */
function ProgramGlyph({ index }: { index: number }) {
  const shapes = [
    <>
      <circle cx="60" cy="60" r="38" stroke="rgba(255,154,46,0.45)" fill="none" />
      <circle cx="60" cy="60" r="24" stroke="rgba(255,154,46,0.3)" fill="none" strokeDasharray="3 6" />
      <path d="M60 22v76M22 60h76" stroke="rgba(255,154,46,0.25)" />
    </>,
    <>
      <path d="M18 96 60 22l42 74H18Z" stroke="rgba(45,212,191,0.45)" fill="none" />
      <path d="M36 96 60 54l24 42" stroke="rgba(45,212,191,0.28)" fill="none" />
    </>,
    <>
      <rect x="24" y="24" width="72" height="72" rx="10" stroke="rgba(207,190,163,0.4)" fill="none" transform="rotate(8 60 60)" />
      <rect x="32" y="32" width="56" height="56" rx="6" stroke="rgba(207,190,163,0.25)" fill="none" strokeDasharray="4 5" />
    </>,
  ];
  return (
    <svg viewBox="0 0 120 120" className="absolute -right-6 -top-6 size-44 opacity-70 transition-transform duration-700 group-hover:scale-105" aria-hidden="true">
      {shapes[index % shapes.length]}
    </svg>
  );
}
