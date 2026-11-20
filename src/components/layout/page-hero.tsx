import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";
import { SahelBackdrop } from "@/components/visuals/sahel-backdrop";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  crumbs,
  align = "left",
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  align?: "left" | "center";
  compact?: boolean;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-white/[0.06]", compact ? "pb-14 pt-32" : "pb-20 pt-36 sm:pt-40")}>
      <SahelBackdrop />
      <div className={cn("container-x relative", align === "center" && "text-center")}>
        {crumbs && (
          <nav aria-label="Breadcrumb" className={cn("mb-8 flex items-center gap-1.5 text-xs text-sand-400", align === "center" && "justify-center")}>
            <Link href="/" className="transition hover:text-sand-100">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3 opacity-50" aria-hidden="true" />
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-sand-100">{c.label}</Link>
                ) : (
                  <span className="text-sand-200">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <Eyebrow className={cn("mb-5", align === "center" && "justify-center")}>{eyebrow}</Eyebrow>
        <h1 className={cn("max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-sand-50 sm:text-5xl lg:text-[4.25rem]", align === "center" && "mx-auto")}>
          {title}
        </h1>
        {lead && (
          <p className={cn("mt-6 max-w-2xl text-base leading-relaxed text-sand-300/90 sm:text-lg", align === "center" && "mx-auto")}>
            {lead}
          </p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
