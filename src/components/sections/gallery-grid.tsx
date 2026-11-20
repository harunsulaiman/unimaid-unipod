"use client";

import { useState } from "react";
import { gallery } from "@/content";
import { cn } from "@/lib/utils";

const filters = ["All", "Labs", "People", "Builds", "Events", "Complex"] as const;

/* Motion-driven, filterable gallery. Placeholder tiles use deterministic gradients
   so the page is beautiful before real photography lands — swap in <Image> later. */
const gradients = [
  "from-ember-900 via-night-800 to-night-950",
  "from-night-700 via-night-900 to-night-950",
  "from-chad-600/50 via-night-800 to-night-950",
  "from-sand-400/30 via-night-800 to-night-950",
  "from-ember-700/60 via-night-900 to-night-950",
  "from-chad-500/30 via-night-700 to-night-950",
];

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const items = gallery.filter((g) => active === "All" || g.category === active);

  return (
    <section className="container-x mt-16">
      <div role="tablist" aria-label="Filter gallery" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] transition",
              active === f
                ? "border-ember-400/50 bg-ember-500/15 text-ember-200"
                : "border-white/10 bg-white/[0.03] text-sand-300 hover:border-white/20 hover:text-sand-50",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] lg:grid-cols-4">
        {items.map((item, i) => (
          <figure
            key={item.slug}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br",
              gradients[i % gradients.length],
              item.ratio === "wide" && "sm:col-span-2",
              item.ratio === "tall" && "row-span-2",
            )}
          >
            <div
              className="absolute inset-0 opacity-[0.12] transition-opacity duration-500 group-hover:opacity-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 12px)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ember-300/85">{item.category}</p>
              <p className="mt-1 text-sm font-medium text-sand-50">{item.title}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-sand-400">{item.caption}</p>
            </figcaption>
            <span
              className="absolute right-3 top-3 size-2 rounded-full bg-ember-400/70 opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
