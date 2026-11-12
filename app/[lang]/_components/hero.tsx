import LogoMark from "@/app/[lang]/_components/logo-mark";
import Orbit from "@/app/[lang]/_components/orbit";
import type { Dictionary } from "@/lib/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" data-tone="canvas" className="scene min-h-[calc(100svh-4rem)] justify-end overflow-hidden border-b border-line">
      <Orbit className="pointer-events-none absolute left-1/2 top-1/2 h-[210vw] w-[210vw] -translate-x-1/2 -translate-y-1/2 sm:left-[32%] sm:h-[200vh] sm:w-[200vh]" />

      <LogoMark
        variant="duo"
        fold="#2a7fcb"
        className="monument pointer-events-none absolute left-1/2 top-[30%] h-[30vh] -translate-x-1/2 -translate-y-1/2 text-[#4eaefd] sm:left-auto sm:right-[-7%] sm:top-1/2 sm:h-[64vh] sm:translate-x-0 lg:right-[-5%] lg:h-[78vh]"
      />

      <div className="shell relative">
        <h1 className="font-serif text-[clamp(2.75rem,8.2vw,9rem)] leading-[0.92] tracking-[-0.035em] text-ink">
          <span
            className="hero-line line-mask"
            style={{ "--line": 0 } as React.CSSProperties}
          >
            <span>{dict.ui.hero.title}</span>
          </span>
          <span
            className="hero-line line-mask"
            style={{ "--line": 1 } as React.CSSProperties}
          >
            <span>{dict.ui.hero.titleAccent}</span>
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-14">
          <p
            className="hero-line line-mask max-w-md"
            style={{ "--line": 2 } as React.CSSProperties}
          >
            <span className="text-pretty text-lg leading-relaxed text-ink-muted">
              {dict.site.description}
            </span>
          </p>

          <div
            className="hero-line line-mask"
            style={{ "--line": 3 } as React.CSSProperties}
          >
            <span className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn btn-primary">
                {dict.ui.hero.primary}
              </a>
              <a href="#services" className="btn btn-outline">
                {dict.ui.hero.secondary}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
