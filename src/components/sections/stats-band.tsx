import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { stats } from "@/content";

export function StatsBand() {
  return (
    <section className="container-x mt-24 lg:mt-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-night-800/70 via-night-900 to-night-950 px-6 py-14 sm:px-10 lg:px-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 16px)",
          }}
          aria-hidden="true"
        />
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="border-l border-white/10 pl-5 lg:pl-6">
                <p className="font-display text-4xl font-semibold tracking-tight text-sand-50 sm:text-5xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 text-sm font-medium text-sand-100">{stat.label}</p>
                {stat.detail && <p className="mt-1.5 text-xs leading-relaxed text-sand-400/80">{stat.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
