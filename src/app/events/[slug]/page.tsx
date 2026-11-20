import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarPlus, Clock, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Pill } from "@/components/ui/section";
import { EventJsonLd } from "@/components/seo/json-ld";
import { events } from "@/content";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.summary,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: { title: event.title, description: event.summary, type: "article" },
  };
}

export default async function EventPage({ params }: Params) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <>
      <EventJsonLd event={event} />
      <PageHero
        compact
        crumbs={[{ label: "Events", href: "/events" }, { label: event.type }]}
        eyebrow={`${event.type} · ${event.status === "upcoming" ? "Upcoming" : "Past event"}`}
        title={event.title}
        lead={event.summary}
      >
        <div className="flex flex-wrap items-center gap-3">
          {event.status === "upcoming" && (
            <ButtonLink href="/contact" withArrow>
              Reserve a place
            </ButtonLink>
          )}
          <a
            href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date.replace(/-/g, "")}/${(event.endDate ?? event.date).replace(/-/g, "")}&details=${encodeURIComponent(event.summary)}&location=${encodeURIComponent(event.venue)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm text-sand-200 ring-1 ring-inset ring-white/15 transition hover:bg-white/[0.05] hover:text-white"
          >
            <CalendarPlus className="size-4" /> Add to calendar
          </a>
        </div>
      </PageHero>

      <section className="container-x mt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-sand-200">{event.description}</p>
            <h2 className="mt-10 text-xl font-semibold text-sand-50">What to bring</h2>
            <ul className="mt-4 space-y-2 text-sm text-sand-300/85">
              <li>· Your university ID (or a form of identification for public admissions)</li>
              <li>· A laptop if you have one — we have spares for those who don&apos;t</li>
              <li>· Any materials you plan to use for the build</li>
            </ul>
          </div>
          <dl className="h-max space-y-5 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6">
            {[
              { icon: CalendarPlus, k: "Date", v: formatDate(event.date, { weekday: "long" }) + (event.endDate ? ` – ${formatDate(event.endDate, { day: "numeric", month: "long" })}` : "") },
              { icon: Clock, k: "Time", v: event.time },
              { icon: MapPin, k: "Venue", v: event.venue },
              ...(event.capacity ? [{ icon: Users, k: "Capacity", v: event.capacity }] : []),
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-night-900 text-ember-300">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-sand-400">{k}</dt>
                  <dd className="mt-1 text-sm text-sand-100">{v}</dd>
                </div>
              </div>
            ))}
            <div className="border-t border-white/[0.07] pt-5">
              <Pill tone={event.status === "upcoming" ? "chad" : "default"}>
                {event.status === "upcoming" ? "Registration open" : "Event concluded"}
              </Pill>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
