import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { partners } from "@/content";

export function PartnerWall() {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading eyebrow="Partners & supporters" title="Built with people who invest in the North-East." />
      </Reveal>
      <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.05] md:grid-cols-4">
        {partners.map((p) => (
          <li key={p.name} className="bg-night-950 p-6">
            <p className="text-sm font-medium text-sand-100">{p.name}</p>
            <p className="mt-1 text-xs text-sand-400">{p.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
