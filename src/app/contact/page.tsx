import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Form } from "@/components/ui/form";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";
import { forms } from "@/content/forms";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the UNDP UniPod at the University of Maiduguri — lab bookings, safety inductions, partnerships, press and visits.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title={
          <>
            Come in. The kettle&apos;s{" "}
            <span className="font-serif font-normal italic text-gradient-ember">on.</span>
          </>
        }
        lead="For lab bookings, partnerships, press and visits. The fastest way to reach us is to walk in during open hours — but the form below works too."
      />

      <section className="container-x mt-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            <Reveal>
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6">
                <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-sand-400">Find us</h2>
                <ul className="mt-5 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
                    <span className="text-sand-200">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.region}
                      <br />
                      {site.address.country}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
                    <a href={`mailto:${site.email}`} className="text-sand-200 transition hover:text-white">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sand-200 transition hover:text-white">
                      {site.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6">
                <h2 className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-sand-400">
                  <Clock className="size-3.5" aria-hidden="true" /> Opening hours
                </h2>
                <dl className="mt-5 space-y-3 text-sm">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                      <dt className="text-sand-400">{h.day}</dt>
                      <dd className="text-right text-sand-200">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="overflow-hidden rounded-3xl border border-white/[0.08]">
                <iframe
                  title="Map showing the UNDP UniPod inside the ASR-iCIE complex, University of Maiduguri"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${site.geo.lng - 0.02}%2C${site.geo.lat - 0.012}%2C${site.geo.lng + 0.02}%2C${site.geo.lat + 0.012}&layer=mapnik`}
                  className="h-64 w-full grayscale-[0.4] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <Form
              formName="contact"
              fields={forms.contact.fields}
              submitLabel={forms.contact.submit}
              successTitle={forms.contact.successTitle}
              successBody={forms.contact.successBody}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
