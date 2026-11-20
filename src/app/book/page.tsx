import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, IdCard, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Form } from "@/components/ui/form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { allLabs, bookingSteps, eligibility } from "@/content";
import { forms } from "@/content/forms";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Book a Lab or Workbench",
  description:
    "Book a lab or workbench at the UNDP UniPod, University of Maiduguri. Four steps: select your lab and slot, submit project and institutional details, complete the safety check, and collect your access pass from a UniPod technician.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Book a Lab" }]}
        eyebrow="Lab & workbench access"
        title={
          <>
            Reserve the machine.{" "}
            <span className="font-serif font-normal italic text-gradient-ember">Then show up and build.</span>
          </>
        }
        lead="Booking is free for UNIMAID students and staff. Every request is reviewed by a lab technician before an access pass is issued, because the machines on this floor are industrial equipment, not toys."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, k: "Lab hours", v: "Mon – Fri, 08:00 – 18:00 WAT" },
            { icon: ShieldCheck, k: "Safety tier", v: "Induction required for machine labs" },
            { icon: IdCard, k: "At check-in", v: "Confirmation reference + your ID" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={k} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
              <div>
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-sand-400">{k}</p>
                <p className="mt-1 text-sm text-sand-100">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Who can use the UniPod"
            title="Three categories of access."
            lead="Eligibility is published so nobody has to guess. If you fit one of these, you can book. If you are not sure, the helpdesk will tell you straight."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {eligibility.map((e, i) => (
            <Reveal key={e.who} delay={i * 70}>
              <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
                <h3 className="text-base font-semibold text-sand-50">{e.who}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-300/85">{e.detail}</p>
                <p className="mt-4 flex gap-2 border-t border-white/[0.07] pt-4 text-xs text-sand-400">
                  <IdCard className="mt-0.5 size-3.5 shrink-0 text-chad-400" aria-hidden="true" />
                  <span>
                    <span className="font-mono uppercase tracking-[0.14em] text-sand-500">Required:</span> {e.need}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Access flow"
            title="Four steps from request to bench."
            lead="Nothing here is discretionary. Each step has a defined owner and a defined standard, and the sequence does not change based on who you know."
          />
        </Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 70}>
              <li className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ember-400">{s.step}</span>
                <p className="mt-3 text-base font-medium text-sand-50">{s.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-sand-400">{s.body}</p>
</li>
</Reveal>
))}
</ol>
</section>

      <section id="request" className="container-x mt-24 scroll-mt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="What's available"
                title="Pick your zone."
                lead="Availability varies by machine. If your work needs more than one zone, name the primary lab and list the rest in your project description."
              />
              <ul className="mt-8 space-y-3">
                {allLabs.map((lab) => (
                  <li key={lab.slug} className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-3">
                    <div>
                      <p className="text-sm font-medium text-sand-100">{lab.name}</p>
                      <p className="mt-0.5 text-xs text-sand-400">{lab.access}</p>
                    </div>
                    <span
                      className={
                        lab.status === "Available"
                          ? "shrink-0 rounded-full border border-chad-500/30 bg-chad-500/10 px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-chad-300"
                          : "shrink-0 rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-sand-400"
                      }
                    >
                      {lab.status}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex gap-2 text-xs leading-relaxed text-sand-400">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-chad-400" aria-hidden="true" />
                <span>
                  Labour and machine time are free for UNIMAID students and staff. Consumables beyond a basic
                  allowance are charged at cost. Questions:{" "}
                  <a href={`mailto:${site.labCoordinator}`} className="text-ember-300 hover:text-ember-200">
                    {site.labCoordinator}
                  </a>
                  .
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-sand-50">{forms.booking.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-sand-300/85">{forms.booking.description}</p>
              <div className="mt-8">
                <Form
                  formName="booking"
                  fields={forms.booking.fields}
                  submitLabel={forms.booking.submit}
                  successTitle={forms.booking.successTitle}
                  successBody={forms.booking.successBody}
                  note={forms.booking.note}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
