import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Building2, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { TimelineSection } from "@/components/sections/timeline-section";
import { Mission } from "@/components/sections/mission";
import { Team } from "@/components/sections/team";
import { PartnerWall } from "@/components/sections/partner-wall";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { priorityAreas, positioning } from "@/content";

export const metadata: Metadata = {
  title: "About the UniPod",
  description:
    "What The UNIMAID-UniPod at the University of Maiduguri is, how it relates to the Abdul Samad Rabiu International Centre for Innovation and Entrepreneurship (ASR-iCIE), and the five priority innovation areas it serves.",
  alternates: { canonical: "/about" },
};

const roleIcons = [Boxes, Building2, GraduationCap];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About the UniPod" }]}
        eyebrow="About the UniPod"
        title={
          <>
            A makerspace built for the{" "}
            <span className="font-serif font-normal italic text-gradient-ember">North-East.</span>
          </>
        }
        lead="The UNIMAID-UniPod at the University of Maiduguri is one of the pods created under UNDP's pan-African timbuktoo Initiative, in partnership with the Federal Government of Nigeria and the University. It operates inside the ASR-iCIE complex and exists for one purpose: turning ideas into tested, working prototypes."
      >
        <dl className="grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {[
            ["Created under", "UNDP timbuktoo"],
            ["Host institution", "UNIMAID"],
            ["Housed in", "ASR-iCIE complex"],
            ["Priority areas", "Five"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-sand-400">{k}</dt>
              <dd className="mt-1.5 text-sm font-medium text-sand-100">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ---------------------------------------------------------------- positioning */}
      <section id="positioning" className="container-x mt-20 scroll-mt-28 lg:mt-24">
        <Reveal>
          <SectionHeading
            eyebrow={positioning.eyebrow}
            title={positioning.title}
            lead={positioning.lead}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {positioning.rows.map((row, i) => {
            const Icon = roleIcons[i] ?? Boxes;
            return (
              <Reveal key={row.name} delay={i * 70}>
                <article className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl border border-ember-500/25 bg-ember-500/10 text-ember-300">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-sand-400">
                        {row.short}
                      </p>
                      <h3 className="text-base font-semibold text-sand-50">{row.name}</h3>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-sand-300/85">{row.body}</p>
                  <p className="mt-5 border-t border-white/[0.07] pt-4 text-xs leading-relaxed text-sand-400">
                    <span className="font-mono uppercase tracking-[0.14em] text-ember-300/80">Provides</span>
                    <br />
                    {row.provides}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={80}>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sand-400">
            In short: ASR Africa funded and built the centre complex. UNDP supplies the UniPod&apos;s makerspace
            equipment, frameworks and pan-African linkages. UNIMAID provides the campus, the people and the
            institutional governance.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------- priority areas */}
      <section className="container-x mt-24 lg:mt-32">
        <Reveal>
          <SectionHeading
            eyebrow="Priority innovation areas"
            title="Five problems worth building for."
            lead="The UniPod's mandate is focused. Every bootcamp, challenge and residency is anchored to one of these five sectors — the ones where a working prototype changes lives fastest across the Lake Chad Basin."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
          {priorityAreas.map((area, i) => (
            <Reveal key={area.name} delay={i * 60}>
              <article className="flex h-full flex-col bg-night-950 p-7">
                <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ember-400/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-sand-50">
                  {area.name}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-sand-300/80">{area.focus}</p>
                <p className="mt-5 text-xs leading-relaxed text-sand-400">
                  <span className="font-mono uppercase tracking-[0.14em] text-sand-500">Built in</span>{" "}
                  {area.labs.join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <article className="flex h-full flex-col justify-between bg-gradient-to-b from-ember-500/[0.12] to-transparent p-7">
              <p className="text-sm leading-relaxed text-sand-200">
                Have a problem in one of these areas? Bring it to the pod — we will help you frame it, build it
                and test it.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ember-300 hover:text-ember-200"
              >
                Book a lab <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <Mission />
      <TimelineSection />
      <Team />
      <PartnerWall />
      <CtaBand
        primary={{ href: "/facilities", label: "Explore the labs" }}
        secondary={{ href: "/contact", label: "Contact the helpdesk" }}
      />
    </>
  );
}

