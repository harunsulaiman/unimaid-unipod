import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { EventListing } from "@/components/sections/event-listing";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Hackathons, open lab days, demo nights and technical bootcamps at the UNDP UniPod, University of Maiduguri.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Events" }]}
        eyebrow="What's on"
        title={
          <>
            The best way in is to{" "}
            <span className="font-serif font-normal italic text-gradient-ember">show up.</span>
          </>
        }
        lead="Every event below is run by the UniPod team, open to the university community and, in most cases, the wider public. Demo days and hackathons use the shared ASR-iCIE seminar room and auditorium."
      />
      <EventListing />
    </>
  );
}
