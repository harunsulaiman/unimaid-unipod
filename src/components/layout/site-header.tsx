"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, secondaryNav, site } from "@/config/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { OperationalStatusPill } from "@/components/layout/operational-status";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-white/[0.06] bg-night-950/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      {/* Identity bar — host attribution and live lab status. */}
      <div className="hidden border-b border-white/[0.05] bg-night-950/60 lg:block">
        <div className="container-x flex h-9 items-center justify-between gap-6">
          <p className="truncate font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-sand-400">
            {site.host.note}
          </p>
          <div className="flex shrink-0 items-center gap-5">
            <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-sand-400">
              UNDP timbuktoo · UNIMAID
            </span>
            <OperationalStatusPill />
          </div>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Logo />
          <span className="sr-only">— home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[0.8125rem] font-medium tracking-tight transition-colors",
                  active ? "text-sand-50" : "text-sand-300/85 hover:text-sand-50",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-inset ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ButtonLink href="/book" size="sm" withArrow className="hidden sm:inline-flex">
            Book a lab
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full text-sand-100 ring-1 ring-inset ring-white/12 transition hover:bg-white/[0.06] lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-y border-white/[0.06] bg-night-950/97 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-x py-6">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-sand-400">
                {site.host.abbreviation} · {site.address.city}
              </p>
              <div className="mt-3">
                <OperationalStatusPill />
              </div>

              <ul className="mt-6 divide-y divide-white/[0.06]">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link href={item.href} className="group flex items-start justify-between gap-4 py-3.5">
                      <span>
                        <span className="block text-base font-medium text-sand-50">{item.label}</span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs text-sand-400">{item.description}</span>
                        )}
                      </span>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-sand-400 transition group-hover:text-ember-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-sand-400">More</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                {secondaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-sand-300/85 transition hover:text-sand-50">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <ButtonLink href="/book" withArrow>
                  Book a lab
                </ButtonLink>
                <ButtonLink href="/visit" variant="outline">
                  Visit &amp; access
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
