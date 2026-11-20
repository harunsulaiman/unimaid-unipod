import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { footerNav, site } from "@/config/site";
import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/[0.07] bg-night-950">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(249,122,10,0.13),transparent_65%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="grid gap-14 py-16 lg:grid-cols-[1.4fr_2fr] lg:gap-20 lg:py-20">
          <div className="max-w-sm">
            <Link href="/">
              <Logo />
              <span className="sr-only">— home</span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-sand-300/85">
              The UNDP University Innovation Pod at the University of Maiduguri — a prototyping and
              venture-incubation makerspace created under UNDP&apos;s timbuktoo Initiative, housed inside the{" "}
              {site.host.name} ({site.host.abbreviation}).
            </p>

            <p className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 font-mono text-[0.5625rem] uppercase leading-relaxed tracking-[0.14em] text-sand-400">
              Delivered by UNDP Nigeria (timbuktoo) with the University of Maiduguri and the Federal
              Government of Nigeria. Hosted at the ASR-iCIE complex, built by ASR Africa.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-sand-300/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}, {site.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition hover:text-sand-50">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-sand-50">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-ember-300" aria-hidden="true" />
                <span>
                  {site.hours[0].day}: {site.hours[0].time}
                  <br />
                  {site.hours[1].day}: {site.hours[1].time}
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-sand-400">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-sand-300/85 transition hover:text-sand-50"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3.5 opacity-60" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sm text-sand-300/85 transition hover:text-sand-50">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/[0.07] py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-sand-400">
            © {year} {site.legalName}. Hosted at the Abdul Samad Rabiu International Centre for Innovation
            and Entrepreneurship.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-sand-300/80 transition hover:text-ember-300"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-xs font-medium text-sand-300/80 transition hover:text-ember-300">
                Helpdesk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
