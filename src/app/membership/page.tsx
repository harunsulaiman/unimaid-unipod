import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Form } from "@/components/ui/form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { eligibility, bookingSteps, tiers } from "@/content";
import { forms } from "@/content/forms";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Access & Eligibility",
  description:
    "Who can use the UNIMAID-UniPod, how access tiers work, and how to register for a safety induction before booking machine time at the University of Maiduguri.",
  alternates: { canonical: "/membership" },
};

export default function AccessPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Access & Eligibility" }]}
        eyebrow="Access & eligibility"
        title={
          <>
            Who gets on the{" "}
            <span className="font-serif font-normal italic text-gradient-ember">floor.</span>
          </>
        }
        lead="Access to the UniPod is free and open to UNIMAID students, faculty researchers and innovators from across North-East Nigeria. What varies is the safety tier attached to each machine."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/book" size="lg" withArrow>
            Book a lab
          </ButtonLink>
          <ButtonLink href="/visit" size="lg" variant="outline">
            Visit &amp; location
          </ButtonLink>
        </div>
      </PageHero>


      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Eligibility"
            title="Three categories of user."
            lead="If you fit one of these, you can book. If you are unsure, the helpdesk will tell you straight rather than turn you away at the door."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {eligibility.map((e, i) => (
            <Reveal key={e.who} delay={i * 70}>
              <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
                <h3 className="text-base font-semibold text-sand-50">{e.who}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-300/85">{e.detail}</p>
                <p className="mt-4 border-t border-white/[0.07] pt-4 text-xs leading-relaxed text-sand-400">
                  <span className="font-mono uppercase tracking-[0.14em] text-sand-500">Required:</span> {e.need}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Access tiers"
            title="What a tier actually means."
            lead="Tiers are attached to equipment, not to people. The same person can walk into the co-working studio unsupervised and still need a technician standing beside them at the CNC."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 70}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-6 sm:p-7",
                  tier.featured
                    ? "border-ember-500/35 bg-gradient-to-b from-ember-500/[0.1] to-white/[0.02]"
                    : "border-white/[0.08] bg-white/[0.025]",
                )}
              >
                <h2 className="text-base font-semibold text-sand-50">{tier.name}</h2>
                <p className="mt-3 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ember-300">{tier.price}</p>
                <p className="mt-1 text-xs text-sand-400">{tier.cadence}</p>
                <p className="mt-4 text-sm leading-relaxed text-sand-300/80">{tier.summary}</p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/[0.07] pt-5 text-[0.8125rem] text-sand-300/85">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-chad-400" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading eyebrow="Access flow" title="Four steps from request to bench." />
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-4">
          {bookingSteps.map((s, i) => (
            <li key={s.step} className="bg-night-950 p-6">
              <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ember-400">0{i + 1}</span>
              <p className="mt-3 text-base font-medium text-sand-50">{s.name}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-sand-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="apply" className="container-x mt-24 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="Register" title={forms.membership.title} lead={forms.membership.description} />
              <dl className="mt-8 space-y-4 border-t border-white/[0.07] pt-6 text-sm">
                {[
                  ["Response time", "Within 3 working days"],
                  ["Safety induction", "Scheduled on request, weekdays"],
                  ["Students & staff", "Free with a valid UNIMAID ID"],
                  ["Helpdesk", site.helpdesk],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-sand-400">{k}</dt>
                    <dd className="text-right text-sand-200">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Form
              formName="membership"
              fields={forms.membership.fields}
              submitLabel={forms.membership.submit}
              successTitle={forms.membership.successTitle}
              successBody={forms.membership.successBody}
              note={forms.membership.note}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
