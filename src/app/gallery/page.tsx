import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside the UNIMAID-UniPod — prototyping labs, equipment handover, build sprints and demo days at the ASR-iCIE complex, University of Maiduguri.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Gallery" }]}
        eyebrow="Gallery"
        title={
          <>
            The floor, <span className="font-serif font-normal italic text-gradient-ember">as it looks.</span>
          </>
        }
        lead="No stock photography from elsewhere. Machine beds, PCB bring-up, solder smoke, solar benches and handover days. Drop in during lab hours and see it for yourself."
      />
      <GalleryGrid />
    </>
  );
}
