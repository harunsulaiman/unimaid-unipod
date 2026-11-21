import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { LabGrid } from "@/components/sections/facilities-grid";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProgramsSection } from "@/components/sections/programs-section";
import { StartupsSection } from "@/components/sections/startups-section";
import { EventsSection } from "@/components/sections/events-section";
import { NewsSection } from "@/components/sections/news-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaBand } from "@/components/sections/cta-band";
import { site } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <section className="container-x mt-24 lg:mt-32">
        <Reveal>
          <SectionHeading
            eyebrow="Makerspaces & labs"
            title={
              <>
                Seven technical spaces,{" "}
                <span className="font-serif font-normal italic text-gradient-ember">inside one building.</span>
              </>
            }
            lead={`Every space is operated by the ${site.name} team with published access tiers, safety inductions and technician cover. Pick the one your prototype needs.`}
          />
        </Reveal>
        <LabGrid limit={4} />
        <Reveal delay={120}>
          <div className="mt-10">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 text-sm font-medium text-ember-300 transition-colors hover:text-ember-200"
            >
              Explore the UniPod labs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
      <StatsBand />
      <ProgramsSection />
      <TimelineSection />
      <StartupsSection />
      <EventsSection />
      <NewsSection />
      <CtaBand
        primary={{ href: "/book", label: "Book a lab or workbench" }}
        secondary={{ href: "/facilities", label: "See what you can build" }}
      />
    </>
  );
}
