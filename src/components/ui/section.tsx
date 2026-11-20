import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-ember-400" />
        <span className="relative inline-flex size-1.5 rounded-full bg-ember-400" />
      </span>
      <span className="eyebrow">{children}</span>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] text-sand-50 sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h2>
        {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand-300/90 md:text-lg">{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "ember" | "chad" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em]",
        tone === "default" && "border-white/12 bg-white/[0.04] text-sand-300",
        tone === "ember" && "border-ember-500/30 bg-ember-500/10 text-ember-200",
        tone === "chad" && "border-chad-500/30 bg-chad-500/10 text-chad-300",
      )}
    >
      {children}
    </span>
  );
}
