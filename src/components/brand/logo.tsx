import { cn } from "@/lib/utils";

/* "Pod" mark: a hexagon frame holding a rising sun / wheat motif.
   Pure SVG — scales to favicon and hero sizes. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9", className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="arc-mark" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD79F" />
          <stop offset="0.45" stopColor="#FF9A2E" />
          <stop offset="1" stopColor="#DD5C02" />
        </linearGradient>
      </defs>
      <path
        d="M20 1.8 35.8 10.9v18.2L20 38.2 4.2 29.1V10.9L20 1.8Z"
        stroke="url(#arc-mark)"
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="20" cy="21.5" r="5.1" fill="url(#arc-mark)" />
      <path
        d="M20 11.8v3.1M20 28.1v3.1M11.8 21.5h3.1M25.1 21.5h3.1M14.2 15.7l2.2 2.2M25.6 25.1l-2.2-2.2M25.8 15.7l-2.2 2.2M14.4 25.1l2.2-2.2"
        stroke="url(#arc-mark)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M9.5 31.2h21" stroke="url(#arc-mark)" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.94rem] font-semibold tracking-tight text-sand-50">
            UNIMAID-<span className="font-serif italic text-ember-300">UniPod</span>
          </span>
          <span className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.24em] text-sand-400">
            UNIMAID · ASR-iCIE
          </span>
        </span>
      )}
    </span>
  );
}
