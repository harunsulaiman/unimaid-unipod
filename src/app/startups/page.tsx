import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { StartupCard, Pipeline } from "@/components/sections/startup-parts";
import { ApplyBlock } from "@/components/sections/apply-block";

export const metadata: Metadata = {
  title: "Startups & Ventures",
  description:
    "Prototypes and ventures built inside the UNIMAID-UniPod — cold chain, water, health diagnostics, energy and agro-processing, all made in Maiduguri.",
  alternates: { canonical: "/startups" },
};

export default function StartupsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Startups" }]}
        eyebrow="Portfolio"
        title={
          <>
            Companies that began with a{" "}
            <span className="font-serif font-normal italic text-gradient-ember">broken thing.</span>
          </>
        }
        lead="Every venture below started as a specific complaint in a specific place — a trader losing fish, a household drinking fouled water, a clinic losing its cold chain. That's the point."
      >
        <dl className="grid max-w-2xl grid-cols-3 gap-8">
          {[
            ["48", "Ventures supported"],
            ["6", "Sectors"],
            ["₦380M", "Follow-on raised"],
          ].map(([v, k]) => (
            <div key={k}>
              <dd className="font-display text-3xl font-semibold tracking-tight text-sand-50 sm:text-4xl">{v}</dd>
              <dt className="mt-1 text-xs text-sand-400">{k}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <StartupCard.Grid />

      <section className="container-x mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="The pipeline"
            title="From first sketch to first sale."
            lead="The path is deliberately short. You don't wait for permission to move to the next stage — you move when the thing works."
          />
        </Reveal>
        <Pipeline />
      </section>

      <ApplyBlock />
    </>
  );
}
