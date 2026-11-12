import LogoMark from "@/app/[lang]/_components/logo-mark";
import Orbit from "@/app/[lang]/_components/orbit";
import type { Dictionary } from "@/lib/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <Orbit className="pointer-events-none absolute left-1/2 top-1/2 h-[200vw] w-[200vw] -translate-x-1/2 -translate-y-1/2 sm:left-[30%] sm:h-[180vh] sm:w-[180vh]" />

      <LogoMark
        variant="duo"
        fold="#2a7fcb"
        className="monument pointer-events-none absolute left-1/2 top-[50%] h-[40vh] -translate-x-1/2 -translate-y-1/2 text-[#4eaefd] sm:left-auto sm:right-[-8%] sm:top-1/2 sm:h-[62vh] sm:translate-x-0 lg:right-[-6%] lg:h-[74vh]"
      />

      <div className="shell relative flex min-h-[calc(100svh-4rem)] flex-col justify-between pb-14 pt-20 sm:pb-20 sm:pt-32">
        <h1 className="max-w-[18ch] font-serif text-[clamp(2.6rem,6.6vw,5.75rem)] leading-[0.97] tracking-[-0.03em] text-ink sm:max-w-[11ch]">
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

        <div className="flex max-w-xl flex-col gap-8">
          <p
            className="hero-line line-mask max-w-sm"
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
