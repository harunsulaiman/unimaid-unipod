import type { Metadata } from "next";
import { Building2, GraduationCap, HandHeart, Landmark, Megaphone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { extraForms } from "@/content/forms";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Partner with the UNIMAID-UniPod, sponsor equipment, mentor a cohort or volunteer. Help build North-East Nigeria's innovation economy.",
  alternates: { canonical: "/get-involved" },
};

const routes = [
  {
    icon: Building2,
    title: "Partner on a programme",
    body: "Bring a real business problem, a brief or a cohort sponsorship. We structure a program around it and run it with you.",
    href: "#partner",
    cta: "Start a partnership",
  },
  {
    icon: Landmark,
    title: "Fund equipment",
    body: "Machines decide what is possible. Sponsor a laser cutter, a CNC router, an XR rig or the power that keeps them running.",
    href: "#give",
    cta: "Sponsor equipment",
  },
  {
    icon: GraduationCap,
    title: "Mentor a cohort",
    body: "Four hours a month. Our founders need operators who have shipped, sold or run a factory.",
    href: "#volunteer",
    cta: "Become a mentor",
  },
  {
    icon: Megaphone,
    title: "Bring your students",
    body: "Secondary schools and universities: bring a group for a tour, a workshop or a mini-hackathon.",
    href: "#volunteer",
    cta: "Book a visit",
  },
  {
    icon: HandHeart,
    title: "Give to the makers' fund",
    body: "Direct-to-maker support for consumables and micro-grants, allocated by the lab leads and reported openly.",
    href: "#give",
    cta: "Give",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Get Involved" }]}
        eyebrow="Get involved"
        title={
          <>
            This works because people{" "}
            <span className="font-serif font-normal italic text-gradient-ember">show up for it.</span>
          </>
        }
        lead="The equipment is funded, but the pod is not finished. It grows with machinery, mentorship, real regional problems and people willing to teach what they know."
      >
        <ButtonLink href="#partner" size="lg" withArrow>
          Partner with us
        </ButtonLink>
      </PageHero>

      <section className="container-x mt-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, i) => (
            <Reveal key={route.title} delay={(i % 3) * 70}>
              <a
                href={route.href}
                className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/25 hover:bg-white/[0.045]"
              >
                <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-night-900 text-ember-300">
                  <route.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-sand-50">{route.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-300/80">{route.body}</p>
                <span className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-ember-300/90 group-hover:text-ember-200">
                  {route.cta}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="partner" className="container-x mt-24 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Partnerships"
                title="What a partnership looks like."
                lead="We don't have a sponsorship brochure. We have specific problem briefs and specific equipment needs — and we co-design the programme with you."
              />
              <ul className="mt-8 space-y-4 border-t border-white/[0.07] pt-6 text-sm">
                {[
                  ["Problem briefs", "Industry or public agencies pitch a real operational problem to a cohort."],
                  ["Talent pipelines", "Recruit from a tested pool of makers and operators."],
                  ["Research", "Joint applied research in energy, health hardware and agriculture."],
                  ["Equipment", "Named sponsorships of lab machines and power systems."],
                ].map(([k, v]) => (
                  <li key={k}>
                    <p className="font-medium text-sand-100">{k}</p>
                    <p className="mt-0.5 text-sand-400">{v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Form
              formName="partner"
              fields={extraForms.partner.fields}
              submitLabel={extraForms.partner.submit}
              successTitle={extraForms.partner.successTitle}
              successBody={extraForms.partner.successBody}
            />
          </Reveal>
        </div>
      </section>


      <section id="give" className="container-x mt-24 scroll-mt-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-ember-900/40 via-night-800 to-night-950 p-7 sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-sand-50 sm:text-4xl">
              Give to the makers&apos; fund.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-sand-300/90">
              Every naira goes to consumables, safety equipment and small equipment grants allocated by the lab
              leads. We publish what was bought and who used it.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["₦25,000", "A month of filament for a team"],
                ["₦150,000", "Acrylic, board and fasteners for a hackathon"],
                ["₦1.2M", "A resin printer plus a year of resin"],
              ].map(([amt, what]) => (
                <div key={amt} className="rounded-2xl border border-white/10 bg-night-950/50 p-5">
                  <p className="font-display text-2xl font-semibold text-sand-50">{amt}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-sand-400">{what}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact" size="lg" withArrow>
                Arrange a donation
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="volunteer" className="container-x mt-24 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Volunteer"
              title="Four hours a month goes a long way."
              lead="Mentors, workshop facilitators, event crew, photographers, translators. If you can teach something, we can use you."
            />
          </Reveal>
          <Reveal delay={80}>
            <Form
              formName="volunteer"
              fields={extraForms.volunteer.fields}
              submitLabel={extraForms.volunteer.submit}
              successTitle={extraForms.volunteer.successTitle}
              successBody={extraForms.volunteer.successBody}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
