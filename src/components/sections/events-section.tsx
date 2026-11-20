import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading, Pill } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { events } from "@/content";
import { formatDate } from "@/lib/utils";

const typeTone: Record<string, "default" | "ember" | "chad"> = {
  Hackathon: "ember",
  "Demo Day": "chad",
  Workshop: "default",
  "Open Day": "chad",
  Talk: "default",
};

export function EventsSection({ limit = 3, full = false }: { limit?: number; full?: boolean }) {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const list = full ? upcoming : upcoming.slice(0, limit);

  return (
    <section className="container-x mt-24 lg:mt-32">
      <Reveal>
        <SectionHeading
          eyebrow="What's on"
          title={
            <>
              Show up. <span className="font-serif font-normal italic text-gradient-ember">Make something.</span>
            </>
          }
          lead="Hackathons, open days, bootcamps and demo nights. Most are free, all are open to the university community first."
          action={
            <ButtonLink href="/events" variant="outline" withArrow>
              Full calendar
            </ButtonLink>
          }
        />
      </Reveal>

      <ul className="mt-14 divide-y divide-white/[0.07] border-y border-white/[0.07]">
        {list.map((event, i) => (
          <Reveal key={event.slug} delay={i * 70} as="li">
            <Link
              href={`/events/${event.slug}`}
              className="group grid gap-4 py-7 transition-colors hover:bg-white/[0.02] sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-8"
            >
              <div className="flex items-start gap-4 sm:block">
                <div className="font-display text-3xl font-semibold leading-none tracking-tight text-sand-50">
                  {new Date(event.date).getUTCDate()}
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-sand-400">
                  {formatDate(event.date, { day: undefined, year: "numeric" })}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Pill tone={typeTone[event.type]}>{event.type}</Pill>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-sand-400">{event.time}</span>
                </div>
                <h3 className="mt-2.5 text-xl font-medium tracking-tight text-sand-50 transition-colors group-hover:text-ember-200">
                  {event.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-sand-300/75">{event.summary}</p>
                <p className="mt-2.5 flex items-center gap-1.5 text-xs text-sand-400">
                  <MapPin className="size-3" aria-hidden="true" />
                  {event.venue}
                </p>
              </div>
              <ArrowUpRight className="hidden size-5 text-sand-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-300 sm:block" />
            </Link>
          </Reveal>
        ))}
      </ul>

      {list.length === 0 && (
        <p className="flex items-center gap-3 py-12 text-sm text-sand-300">
          <CalendarDays className="size-4 text-ember-300" /> No upcoming events — check back soon, or subscribe to the newsletter.
        </p>
      )}
    </section>
  );
}
