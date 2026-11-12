import Star from "@/app/[lang]/_components/star";
import type { Dictionary } from "@/lib/i18n/types";

const ticks = Array.from({ length: 33 }, (_, i) => i);

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" className="border-b border-line">
      <div className="shell pb-14 pt-16 sm:pb-20 sm:pt-28">
        <p className="flex items-center gap-3">
          <Star className="size-2.5 shrink-0 text-accent" />
          <span className="eyebrow">{dict.site.tagline}</span>
        </p>

        <h1 className="mt-8 max-w-4xl text-balance font-serif text-[2.5rem] leading-[1.03] text-ink sm:text-6xl lg:text-[4.75rem]">
          {dict.ui.hero.title} {dict.ui.hero.titleAccent}
        </h1>

        <p className="mt-8 max-w-lg text-pretty text-lg leading-relaxed text-ink-muted">
          {dict.site.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn btn-primary">
            {dict.ui.hero.primary}
          </a>
          <a href="#services" className="btn btn-outline">
            {dict.ui.hero.secondary}
          </a>
        </div>

        <div
          aria-hidden
          className="animate-trajectory mt-16 flex items-center gap-3 sm:mt-24 sm:gap-5"
        >
          <span className="eyebrow shrink-0">{dict.ui.hero.fieldStart}</span>

          <span className="relative flex h-3 flex-1 items-center">
            <span className="h-px w-full bg-line" />
            <span className="absolute inset-x-0 flex items-center justify-between">
              {ticks.map((tick) => (
                <span
                  key={tick}
                  className={`w-px bg-line ${tick % 4 === 0 ? "h-2.5" : "h-1.5"}`}
                />
              ))}
            </span>
          </span>

          <Star className="size-3.5 shrink-0 text-accent" />
          <span className="eyebrow shrink-0 text-ink">{dict.ui.hero.fieldEnd}</span>
        </div>
      </div>
    </section>
  );
}
