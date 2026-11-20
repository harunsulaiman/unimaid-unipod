"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* Counts up to a numeric portion of a stat, keeping prefixes/suffixes (₦, +, B). */
export function CountUp({
  value,
  className,
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const match = value.match(/([\d,.]+)/);
    if (!match) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const raw = match[1].replace(/,/g, "");
    const target = Number(raw);
    if (!Number.isFinite(target)) return;
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const start = match.index ?? 0;
    const end = start + match[1].length;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || done.current) continue;
          done.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const current = (target * eased).toFixed(decimals);
            const formatted = Number(current).toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
            setDisplay(value.slice(0, start) + formatted + value.slice(end));
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}
