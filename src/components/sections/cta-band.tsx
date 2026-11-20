import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SahelBackdrop } from "@/components/visuals/sahel-backdrop";

export function CtaBand({
  title = "The next thing built here could be yours.",
  body = "Students walk in with a sketch and leave with a working prototype. Makers take a bench. Partners bring a problem worth solving. The door is open.",
  primary = { href: "/book", label: "Book a lab" },
  secondary = { href: "/get-involved", label: "Partner or support us" },
}: {
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="container-x mt-24">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-night-900 px-6 py-14 text-center sm:px-12 md:py-20">
        <SahelBackdrop className="opacity-70" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold leading-[1.06] text-sand-50 sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand-300">{body}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={primary.href} size="lg" withArrow>
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} size="lg" variant="outline">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Divider({ label }: { label?: string }) {
  return (
    <div className="container-x mt-20 flex items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-white/12" />
      {label && <span className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-sand-400">{label}</span>}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/12 to-white/12" />
    </div>
  );
}

export function LinkArrow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="group inline-flex items-center gap-2 text-sm font-medium text-ember-300 hover:text-ember-200">
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
