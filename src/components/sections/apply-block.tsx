import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export function ApplyBlock() {
  return (
    <section id="apply" className="container-x mt-24 scroll-mt-24">
      <div className="grid gap-10 rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-night-800/60 to-night-950 p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Pill tone="chad">Cohort 03 · closes 30 January</Pill>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-sand-50 sm:text-4xl">
            You have something working. Bring it here.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-sand-300/85">
            The Venture Launchpad takes teams with a prototype — not an idea. Show us what you built, who used it,
            and what the next milestone is. Applications are reviewed on a rolling basis.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-sand-300/85">
            <li>· ₦2M – ₦5M micro-grant for five teams</li>
            <li>· 16 weeks with weekly mentor reviews</li>
            <li>· Demo day with 40+ investors and buyers</li>
          </ul>
        </div>
        <div className="space-y-3">
          <Link
            href="/membership#apply"
            className="group flex items-center justify-between rounded-2xl border border-white/[0.1] bg-white/[0.04] p-5 transition hover:border-ember-500/30 hover:bg-white/[0.07]"
          >
            <span>
              <span className="block text-sm font-medium text-sand-50">Start an application</span>
              <span className="mt-0.5 block text-xs text-sand-400">Takes about four minutes</span>
            </span>
            <ArrowRight className="size-4 text-ember-300 transition group-hover:translate-x-0.5" />
          </Link>
          <ButtonLink href="/contact" variant="outline" className="w-full justify-between">
            Talk to the venture team
            <ArrowUpRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
