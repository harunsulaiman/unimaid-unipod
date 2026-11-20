import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { allPrograms } from "@/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Cohorts, fellowships and bootcamps at the UNDP UniPod: UNDP Northeast Nigeria Community Innovation Challenges, Young Africa Innovates, timbuktoo venture calls, technical bootcamps and demo days.",
  alternates: { canonical: "/programs" },
};

const statusCopy = {
  open: { label: "Applications open", tone: "border-chad-500/30 bg-chad-500/10 text-chad-300" },
  waitlist: { label: "Waitlist", tone: "border-amber-400/30 bg-amber-400/10 text-amber-200" },
  running: { label: "Running now", tone: "border-white/12 bg-white/[0.05] text-sand-300" },
} as const;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Programs" }]}
        eyebrow="Programs"
        title={
          <>
            Pick a path.{" "}
            <span className="font-serif font-normal italic text-gradient-ember">Then get to work.</span>
          </>
        }
        lead="Six structured programs, all free at the point of entry for UNIMAID students. Each one has a start date, a mentor and a deliverable — nobody leaves empty-handed."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#programs" size="lg" withArrow>
            Browse programs
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline">
            Talk to the programs team
          </ButtonLink>
        </div>
      </PageHero>

      <section id="programs" className="container-x mt-20 scroll-mt-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {allPrograms.map((program, i) => {
            const status = statusCopy[program.status];
            return (
              <Reveal key={program.slug} delay={(i % 2) * 80}>
                <article className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors hover:border-white/[0.16] sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className={cn("rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em]", status.tone)}>
                      {status.label}
                    </span>
                    <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-sand-400">{program.duration}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-sand-50 sm:text-3xl">{program.name}</h2>
                  <p className="mt-1.5 text-sm font-medium text-ember-200/90">{program.kicker}</p>
                  <p className="mt-4 text-sm leading-relaxed text-sand-300/85">{program.description}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.07] bg-night-950/40 p-4 text-xs">
                    <div>
                      <dt className="font-mono uppercase tracking-[0.16em] text-sand-400">Mode</dt>
                      <dd className="mt-1 text-sand-200">{program.mode}</dd>
                    </div>
                    <div>
                      <dt className="font-mono uppercase tracking-[0.16em] text-sand-400">Commitment</dt>
                      <dd className="mt-1 text-sand-200">{program.commitment}</dd>
                    </div>
                  </dl>

                  <h3 className="mt-7 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ember-300">What you get</h3>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {program.outcomes.map((o) => (
                      <li key={o} className="flex gap-2.5 text-[0.8125rem] leading-snug text-sand-300/85">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-chad-400" aria-hidden="true" />
                        {o}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-white/[0.07] pt-5">
                    <div>
                      <p className="text-xs text-sand-400">Eligibility</p>
                      <p className="mt-0.5 text-[0.8125rem] text-sand-200">{program.eligibility}</p>
                      {program.cohort && <p className="mt-2 text-xs text-chad-300/90">{program.cohort}</p>}
                    </div>
                    <ButtonLink
                      href={program.status === "running" ? "/contact" : "/membership#apply"}
                      size="sm"
                      variant={program.status === "open" ? "primary" : "secondary"}
                      withArrow
                    >
                      {program.status === "open" ? "Apply" : program.status === "waitlist" ? "Join waitlist" : "Register interest"}
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Not sure which program fits?"
        body="Send us a short note about what you want to build. We'll point you at the right cohort — or tell you honestly what to do first."
      />
    </>
  );
}
