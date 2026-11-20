"use client";

import { useEffect, useState } from "react";
import { getOperationalStatus, type OperationalStatus } from "@/content";
import { cn } from "@/lib/utils";

/**
 * Live lab-hours indicator. Computed on the client so it reflects the visitor's clock,
 * with a neutral placeholder during hydration to avoid a mismatch flash.
 */
export function OperationalStatusPill({ className }: { className?: string }) {
  const [status, setStatus] = useState<OperationalStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOperationalStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const open = status?.state === "open";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.16em]",
        status === null
          ? "border-white/10 bg-white/[0.04] text-sand-400"
          : open
            ? "border-chad-500/30 bg-chad-500/10 text-chad-300"
            : "border-white/10 bg-white/[0.04] text-sand-400",
        className,
      )}
    >
      <span
        className={cn(
          "relative flex size-1.5 shrink-0 rounded-full",
          open ? "bg-chad-400" : "bg-sand-500",
        )}
        aria-hidden="true"
      >
        {open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-chad-400 opacity-60" />
        )}
      </span>
      <span className="sr-only">Lab status:</span>
      {status === null ? "Lab hours 08:00–18:00 WAT" : `${status.label} · ${status.detail}`}
    </span>
  );
}
