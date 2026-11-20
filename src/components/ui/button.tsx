import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember-400";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-ember-300 via-ember-400 to-ember-600 text-night-950 shadow-[0_10px_30px_-12px_rgba(249,122,10,0.85)] hover:shadow-[0_18px_44px_-14px_rgba(249,122,10,0.9)] hover:brightness-110 active:scale-[0.98]",
  secondary:
    "bg-night-800/80 text-sand-50 ring-1 ring-inset ring-white/12 backdrop-blur hover:bg-night-700 hover:ring-white/20 active:scale-[0.98]",
  outline:
    "bg-transparent text-sand-100 ring-1 ring-inset ring-white/18 hover:ring-white/35 hover:bg-white/[0.04] active:scale-[0.98]",
  ghost: "bg-transparent text-sand-200 hover:text-white hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.9375rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow,
  ...props
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      <span className="relative">{children}</span>
      {withArrow && <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span className="relative">{children}</span>
      {withArrow && <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
