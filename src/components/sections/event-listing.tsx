import Link from "next/link";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading, Pill } from "@/components/ui/section";
import { events } from "@/content";
import { formatDate, cn } from "@/lib/utils";

const typeTone: Record<string, "default" | "ember" | "chad"> = {
  Hackathon: "ember",
  "Demo Day": "chad",
  Workshop: "default",
  "Open Day": "chad",
  Talk: "default",
};

function EventCard({ slug }: { slug: string }) {
  const event = events.find((e) => e.slug === slug);
  if (!event) return null;
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/25 hover:bg-white/[0.045] sm:p-8"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col items-start">
          <span className="font-display text-5xl font-semibold leading-none tracking-tight text-sand-50">
            {new Date(event.date).getUTCDate()}
          </span>
          <span className="mt-2 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-sand-400">
            {formatDate(event.date, { day: undefined })}
          </span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Pill tone={typeTone[event.type]}>{event.type}</Pill>
          <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-sand-400">{event.time}</span>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-sand-50 transition-colors group-hover:text-ember-200">
        {event.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-300/80">{event.summary}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.07] pt-5 text-xs text-sand-400">
        <span className="flex items-center gap-1.5">
          <MapPin className="size-3" aria-hidden="true" />
          {event.venue}
        </span>
        {event.capacity && (
          <span className="flex items-center gap-1.5">
            <Users className="size-3" aria-hidden="true" />
            {event.capacity}
          </span>
        )}
        <ArrowUpRight className="ml-auto size-4 text-sand-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-300" />
      </div>
    </Link>
  );
}

export function EventListing() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <section className="container-x mt-20">
        <Reveal>
          <SectionHeading eyebrow="Upcoming" title="On the calendar." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {upcoming.map((e, i) => (
            <Reveal key={e.slug} delay={(i % 2) * 80}>
              <EventCard slug={e.slug} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={cn("container-x mt-24")}>
        <Reveal>
          <SectionHeading eyebrow="Archive" title="Already happened." lead="Recaps, outputs and the prototypes that came out of them." />
        </Reveal>
        <ul className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {past.map((e) => (
            <li key={e.slug}>
              <Link href={`/events/${e.slug}`} className="group flex flex-wrap items-center justify-between gap-4 py-5 transition-colors hover:text-ember-200">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-sand-400">{formatDate(e.date, { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="text-sm font-medium text-sand-100 group-hover:text-ember-200">{e.title}</span>
                </div>
                <Pill>{e.type}</Pill>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
