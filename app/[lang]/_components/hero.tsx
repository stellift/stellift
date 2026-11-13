import LogoMark from "@/app/[lang]/_components/logo-mark";
import Orbit from "@/app/[lang]/_components/orbit";
import type { Dictionary } from "@/lib/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" data-tone="canvas" className="scene justify-end overflow-hidden border-b border-line">
      <Orbit className="drift-out pointer-events-none absolute left-1/2 top-1/2 h-[210vw] w-[210vw] -translate-x-1/2 -translate-y-1/2 sm:left-[32%] sm:h-[200vh] sm:w-[200vh]" />

      <LogoMark
        variant="duo"
        fold="#2a7fcb"
        className="monument pointer-events-none absolute left-1/2 top-[30%] h-[30vh] -translate-x-1/2 -translate-y-1/2 text-[#4eaefd] sm:left-auto sm:right-[-9%] sm:top-1/2 sm:h-[60vh] sm:translate-x-0 lg:right-[-7%] lg:h-[74vh]"
      />

      <div className="hero-push shell relative">
        <h1 className="max-w-[min(100%,15ch)] font-serif text-[clamp(2.5rem,7vw,7.5rem)] leading-[0.94] tracking-[-0.03em] text-ink lg:max-w-[min(62%,900px)]">
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
