import type { Metadata } from "next";
import { MapPin, Clock, ShieldCheck, Users, Accessibility, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { eligibility, tiers } from "@/content";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Visit & Access",
  description:
    "How to reach the UNIMAID-UniPod inside the ASR-iCIE complex at the University of Maiduguri, opening hours, access tiers, safety induction and group visits.",
  alternates: { canonical: "/visit" },
};

const practical = [
  {
    icon: MapPin,
    title: "Finding us",
    body: `${site.address.line1}, ${site.address.street}, ${site.address.city}, ${site.address.region}. Enter through the ASR-iCIE main lobby and sign in at the UniPod reception desk on the ground technical wing.`,
  },
  {
    icon: Clock,
    title: "Opening hours",
    body: "Monday to Friday, 08:00 – 18:00 WAT. Saturdays 10:00 – 16:00 for pre-booked sessions only. Closed Sundays and public holidays.",
  },
  {
    icon: ShieldCheck,
    title: "Safety induction",
    body: "Machine labs — CNC, laser, wood, textiles, electrical and food processing — require a completed induction. Inductions run weekly and take about 90 minutes.",
  },
  {
    icon: Users,
    title: "Group & school visits",
    body: "Secondary schools, polytechnics and university departments can arrange guided tours of up to 40 visitors. Request at least two weeks ahead through the helpdesk.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    body: "The ASR-iCIE complex has step-free access to the ground technical wing. Tell us in advance about any mobility, visual or hearing support you need and we will arrange it.",
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Visit & Access" }]}
        eyebrow="Visit the UniPod"
        title={
          <>
            Come to the building.{" "}
            <span className="font-serif font-normal italic text-gradient-ember">Leave with a prototype.</span>
          </>
        }
        lead="The UniPod sits inside the ASR-iCIE complex on the University of Maiduguri campus. Walk-ins are welcome for the co-working studio; machine labs need a booking and a safety induction."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/book" size="lg" withArrow>
            Book a lab
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline">
            Ask the helpdesk
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading eyebrow="Practical information" title="Before you arrive." />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practical.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
                <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-night-900/70 text-ember-300">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-sand-50">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-300/85">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Access tiers"
            title="Who pays, and who does not."
            lead="The UniPod is publicly funded. UNIMAID students and staff use it at no cost. Everyone else is assessed on a published basis."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ember-300">{t.name}</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-sand-50">{t.price}</p>
                <p className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-sand-500">{t.cadence}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-300/85">{t.summary}</p>
                <ul className="mt-4 space-y-1.5 border-t border-white/[0.07] pt-4">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs leading-relaxed text-sand-400">
                      <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-chad-400" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading eyebrow="Eligibility" title="What you need to bring." />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {eligibility.map((e, i) => (
            <Reveal key={e.who} delay={i * 60}>
              <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                <h3 className="text-sm font-semibold text-sand-50">{e.who}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-300/85">{e.detail}</p>
                <p className="mt-4 border-t border-white/[0.07] pt-3 text-xs text-sand-400">
                  <span className="font-mono uppercase tracking-[0.14em] text-sand-500">Bring:</span> {e.need}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
