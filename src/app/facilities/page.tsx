import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { AccessLegend, LabIcon } from "@/components/sections/facilities-grid";
import { allLabs, conveningSpaces, type AccessTier, type LabStatus } from "@/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Makerspaces & Labs",
  description:
    "Seven technical spaces inside the UNIMAID-UniPod at the University of Maiduguri: prototyping and design, CNC fabrication, electronics and IoT, renewable energy, agro-processing, wood and textiles, and digital media. Each with published equipment, access tier and safety standard.",
  alternates: { canonical: "/facilities" },
};

const statusTone: Record<LabStatus, string> = {
  Available: "border-chad-500/30 bg-chad-500/10 text-chad-300",
  "In Session": "border-ember-500/30 bg-ember-500/10 text-ember-200",
  Maintenance: "border-white/12 bg-white/[0.05] text-sand-400",
};

const accessTone: Record<AccessTier, string> = {
  "Open Access": "border-white/12 bg-white/[0.04] text-sand-300",
  "Safety Induction Required": "border-ember-500/25 bg-ember-500/[0.08] text-ember-200",
  "Technician Supervised": "border-chad-500/25 bg-chad-500/[0.08] text-chad-300",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Makerspaces & Labs" }]}
        eyebrow="technical spaces"
        title={
          <>
            Seven labs. One{" "}
            <span className="font-serif font-normal italic text-gradient-ember">clear access rule</span> each.
          </>
        }
        lead="Every UniPod lab publishes the same five things: what it is for, what you can actually build there, the equipment on the floor, its current status, and the safety tier you need to use it. No guesswork about whether the door is open to you."
      >
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="/book" withArrow>
            Book a lab or workbench
          </ButtonLink>
          <ButtonLink href="/visit" variant="outline">
            Visit &amp; access
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-x mt-16">
        <Reveal>
          <SectionHeading
            eyebrow="Access tiers"
            title="Three tiers, applied consistently."
            lead="The tier is set by the machine, not by the rank of the person using it. A professor needs the same induction as a first-year student before running the CNC."
          />
        </Reveal>
        <Reveal delay={80}>
          <AccessLegend />
        </Reveal>
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="The catalogue"
            title="Every space, in detail."
            lead="Inventory is being reconciled against the official UNDP equipment handover audit. Items marked pending audit are listed as capability categories rather than final model specifications."
          />
        </Reveal>
        <LabCatalogue />
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Shared convening space"
            title="Demo days need a room, not a bench."
            lead="The UniPod's technical floors handle the building. The ASR-iCIE complex handles the gathering — seminar room and auditorium are booked through the centre for UniPod programming."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {conveningSpaces.map((space, i) => (
            <Reveal key={space.name} delay={i * 80}>
              <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-sand-50">{space.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-300/85">{space.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Found your lab?"
        body="Booking takes four steps: pick the lab and slot, submit your project details, complete the safety check, then collect your access pass from a technician."
        primary={{ href: "/book", label: "Book a lab" }}
        secondary={{ href: "/visit", label: "Visit & access" }}
      />
    </>
  );

function LabCatalogue() {
  return (
    <div className="mt-14 space-y-5">
      {allLabs.map((lab, i) => (
        <Reveal key={lab.slug} delay={(i % 3) * 60}>
          <article
            id={lab.slug}
            className="scroll-mt-32 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors hover:border-white/[0.14] sm:p-9"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
              <div className="lg:w-2/5 lg:shrink-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-night-900/70 text-ember-300">
                    <LabIcon lab={lab} className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em]",
                      statusTone[lab.status],
                    )}
                  >
                    {lab.status}
                  </span>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em]",
                      accessTone[lab.access],
                    )}
                  >
                    {lab.access}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-sand-50 sm:text-2xl">
                  {lab.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-ember-200/90">{lab.technicalFocus}</p>
                <p className="mt-4 text-sm leading-relaxed text-sand-300/85">{lab.description}</p>
              </div>

              <div className="grid flex-1 gap-7 sm:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-ember-300">
                    Supported workflows
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {lab.workflows.map((w) => (
                      <li key={w} className="flex gap-2.5 text-[0.8125rem] leading-snug text-sand-300/85">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-ember-400/70" aria-hidden="true" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex flex-wrap items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-chad-300">
                    Equipment
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[0.5rem] tracking-[0.1em]",
                        lab.verified
                          ? "border-chad-500/30 bg-chad-500/10 text-chad-300"
                          : "border-white/12 bg-white/[0.04] text-sand-500",
                      )}
                    >
                      {lab.verified ? "Audit confirmed" : "Pending audit"}
                    </span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {lab.equipment.map((e) => (
                      <li key={e} className="flex gap-2.5 text-[0.8125rem] leading-snug text-sand-300/85">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-chad-400/70" aria-hidden="true" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

}
