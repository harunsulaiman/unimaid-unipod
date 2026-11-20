import Link from "next/link";
import { ArrowUpRight, Box, Cpu, FlaskConical, Glasses, PenTool, Printer } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/section";
import { allLabs, type Lab, type AccessTier, type LabStatus } from "@/content";
import { cn } from "@/lib/utils";

const icons = { printer: Printer, cpu: Cpu, pen: PenTool, glasses: Glasses, flask: FlaskConical, box: Box };

const accents = {
  ember: {
    text: "text-ember-300",
    ring: "group-hover:border-ember-500/35",
    glow: "bg-ember-500/12",
  },
  chad: {
    text: "text-chad-300",
    ring: "group-hover:border-chad-500/35",
    glow: "bg-chad-500/12",
  },
  sand: {
    text: "text-sand-200",
    ring: "group-hover:border-sand-300/30",
    glow: "bg-sand-300/10",
  },
} as const;

const statusTone: Record<LabStatus, string> = {
  Available: "border-chad-500/30 bg-chad-500/10 text-chad-300",
  "In Session": "border-ember-500/30 bg-ember-500/10 text-ember-200",
  Maintenance: "border-white/12 bg-white/[0.05] text-sand-400",
};

const accessTone: Record<AccessTier, string> = {
  "Open Access": "border-white/12 bg-white/[0.04] text-sand-300",
  "Safety Induction Required": "border-ember-500/25 bg-ember-500/[0.08] text-ember-200",
  "Technician Supervised": "border-chad-500/25 bg-chad-500/[0.08] text-chad-300",
};

export function LabIcon({ lab, className }: { lab: Lab; className?: string }) {
  const Icon = icons[lab.icon];
  return <Icon className={className} aria-hidden="true" />;
}

export function LabGrid({ limit }: { limit?: number }) {
  const list = limit ? allLabs.slice(0, limit) : allLabs;
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((lab, i) => {
        const accent = accents[lab.accent];
        const Icon = icons[lab.icon];
        return (
          <Reveal key={lab.slug} delay={(i % 3) * 80}>
            <Link
              href={`/facilities#${lab.slug}`}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.045]",
                accent.ring,
              )}
            >
              <span
                className={cn(
                  "pointer-events-none absolute -right-20 -top-20 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100",
                  accent.glow,
                )}
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className={cn("grid size-12 place-items-center rounded-2xl border border-white/10 bg-night-900/70", accent.text)}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <ArrowUpRight className="size-4 text-sand-400 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sand-100" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-sand-50">{lab.name}</h3>
              <p className={cn("mt-2 text-sm font-medium", accent.text)}>{lab.summary}</p>
              <p className="mt-3 text-xs leading-relaxed text-sand-400">{lab.technicalFocus}</p>

              <div className="mt-5 flex-1">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-sand-500">
                  You can build
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-sand-300/85">
                  {lab.workflows.slice(0, 2).join(" · ")}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className={cn("rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em]", statusTone[lab.status])}>
                  {lab.status}
                </span>
                <span className={cn("rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em]", accessTone[lab.access])}>
                  {lab.access}
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

export function AccessLegend() {
  const items: { tier: AccessTier; body: string }[] = [
    { tier: "Open Access", body: "Walk in during lab hours. No induction needed for the co-working and media studios." },
    { tier: "Safety Induction Required", body: "Complete the floor induction before operating tools, electronics or processing equipment." },
    { tier: "Technician Supervised", body: "CNC, welding and high-power energy equipment are used with a technician present." },
  ];
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.tier} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
          <Pill tone={item.tier === "Open Access" ? "default" : item.tier === "Safety Induction Required" ? "ember" : "chad"}>
            {item.tier}
          </Pill>
          <p className="mt-3 text-xs leading-relaxed text-sand-300/85">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
