/* Hero background: layered Sahel horizon — sun, dunes, grid, grain.
   Pure SVG so it stays sharp, themeable and zero-JS. */
export function SahelBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* warm glow */}
      <div className="absolute -top-1/3 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(249,122,10,0.34),rgba(249,122,10,0.06)_45%,transparent_70%)] blur-2xl animate-drift" />
      <div className="absolute -bottom-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.16),transparent_65%)] blur-3xl" />

      {/* sundial rings */}
      <svg
        className="absolute left-1/2 top-[6%] h-[38rem] w-[38rem] -translate-x-1/2 opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="198" stroke="rgba(255,184,110,0.16)" />
        <circle cx="200" cy="200" r="150" stroke="rgba(255,184,110,0.12)" strokeDasharray="2 8" />
        <circle cx="200" cy="200" r="104" stroke="rgba(255,184,110,0.1)" />
        <circle cx="200" cy="200" r="60" stroke="rgba(255,184,110,0.2)" />
        <path d="M200 2v28M200 370v28M2 200h28M370 200h28" stroke="rgba(255,184,110,0.25)" />
      </svg>

      {/* horizon grid */}
      <div
        className="absolute inset-x-0 bottom-0 h-[58%] opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,220,180,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,220,180,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />

      {/* dune silhouettes */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[26%] w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 208C180 150 320 182 470 196c150 14 250-58 402-44 152 14 262 74 388 56 60-9 122-30 180-58v108H0z"
          fill="url(#dune-a)"
        />
        <path
          d="M0 244c210-36 356-8 520 6 164 14 286-22 430-16 110 5 200 26 320 12v14H0z"
          fill="url(#dune-b)"
        />
        <defs>
          <linearGradient id="dune-a" x1="720" y1="150" x2="720" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0d1319" stopOpacity="0.2" />
            <stop offset="1" stopColor="#06090c" />
          </linearGradient>
          <linearGradient id="dune-b" x1="720" y1="220" x2="720" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a0f14" stopOpacity="0.9" />
            <stop offset="1" stopColor="#06090c" />
          </linearGradient>
        </defs>
      </svg>

      {/* star specks */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        {[
          [8, 12], [22, 6], [37, 18], [54, 9], [68, 22], [82, 7], [92, 16], [14, 32],
          [46, 38], [74, 34], [28, 48], [63, 52], [88, 44], [5, 58], [96, 60],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={i % 4 === 0 ? 1.4 : 0.9}
            fill="#ffe9cd"
            opacity={0.18 + (i % 5) * 0.07}
          />
        ))}
      </svg>
    </div>
  );
}
