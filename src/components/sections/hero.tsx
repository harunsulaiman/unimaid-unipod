import Link from "next/link";
import { ArrowDown, Wrench } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { SahelBackdrop } from "@/components/visuals/sahel-backdrop";
import { heroStats, partners } from "@/content";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-44">
      <SahelBackdrop />

      <div className="container-x relative">
        <div className="flex flex-col items-center text-center">
          {/* <div className="glass inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full py-1.5 pl-2 pr-4 text-xs">
            <span className="rounded-full bg-ember-500/15 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ember-200">
              UNDP · timbuktoo
            </span>
            <span className="flex items-center gap-1.5 text-sand-300">
              <MapPin className="size-3.5" aria-hidden="true" />
              University of Maiduguri · Borno State
            </span>
          </div> */}

          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-sand-50 sm:text-6xl md:text-7xl lg:text-[5rem]">
            <span className="block text-gradient-sand">UNIMAID-UniPod.</span>
            <span className="block">
              Build for the{" "}
              <span className="font-serif font-normal italic tracking-[-0.02em] text-gradient-ember">
                North-East and the Sahel Region
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-sand-300/90 sm:text-lg">
            The UNIMAID-UniPod at the University of Maiduguri gives students, researchers and
            innovators across the North-East and the Sahel Region open access to industrial prototyping
            tools, design-thinking studios and product-development support — so ideas move from concept
            to a working minimum viable product.
          </p>

          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-sand-400">
            <span className="font-mono uppercase tracking-[0.14em]">Located inside the</span>
            <Link
              href="/about#positioning"
              className="underline decoration-white/20 underline-offset-4 transition hover:text-sand-200 hover:decoration-ember-400/50"
            >
              ASR-iCIE Complex
            </Link>
            <span aria-hidden="true">·</span>
            <span>University of Maiduguri, Borno State</span>
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/book" size="lg" withArrow>
              Book a lab or workbench
            </ButtonLink>
            <ButtonLink href="/facilities" size="lg" variant="secondary">
              <span className="inline-flex items-center gap-2">
                <Wrench className="size-4 shrink-0 text-ember-300" aria-hidden="true" />
                <span>Explore the UniPod labs</span>
              </span>
            </ButtonLink>
          </div>

<div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sand-400">
            <span>Free for every UNIMAID student</span>
            <span className="hidden h-1 w-1 rounded-full bg-sand-400/60 sm:block" aria-hidden="true" />
            <span>Equipped by UNDP</span>
            <span className="hidden h-1 w-1 rounded-full bg-sand-400/60 sm:block" aria-hidden="true" />
            <span>Open to North-East innovators</span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] md:mt-20 md:grid-cols-4">
          {heroStats.map((stat) => (
            <dl
              key={stat.label}
              className="group relative bg-night-950/40 p-6 transition-colors hover:bg-white/[0.035] sm:p-8"
            >
              <dt className="text-xs font-medium text-sand-400">{stat.label}</dt>
              <dd className="mt-3 font-display text-2xl font-semibold tracking-tight text-sand-50 sm:text-3xl">
                {/^\d+$/.test(stat.value) ? <CountUp value={stat.value} /> : stat.value}
              </dd>
              {stat.detail && <dd className="mt-1 text-[0.6875rem] text-sand-400">{stat.detail}</dd>}
            </dl>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6">
          <div className="mask-fade-x w-full overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10 pr-10">
              {[...partners, ...partners].map((p, i) => (
                <span key={`${p.name}-${i}`} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
                  <span className="size-1.5 rounded-full bg-ember-500/60" aria-hidden="true" />
                  <span className="text-xs font-medium tracking-tight text-sand-300/80">{p.name}</span>
                </span>
              ))}
            </div>
          </div>

          <a
            href="#mandate"
            className="group inline-flex items-center gap-2 text-xs font-medium text-sand-400 transition hover:text-sand-100"
          >
            <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            What happens inside the UniPod
          </a>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-[0.6875rem] leading-relaxed text-sand-500">
          {site.host.name} ({site.host.abbreviation}) is the host edifice, built through{" "}
          {site.host.funder}&apos;s ₦1 billion grant. The UNIMAID-UniPod is the makerspace operating inside it.
        </p>
      </div>
    </section>
  );
}
