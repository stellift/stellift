import type { Dictionary } from "@/lib/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h1 className="text-balance font-display text-[2.5rem] font-normal leading-[1.05] tracking-[-0.015em] text-ink sm:text-[3.5rem] lg:text-[4rem]">
          <span className="animate-rise block">{dict.ui.hero.title}</span>
          <span className="animate-rise block text-link [animation-delay:110ms]">
            {dict.ui.hero.titleAccent}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[54ch] text-pretty text-[17px] leading-[1.65] text-ink-2">
          {dict.site.description}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-navy px-7 text-[15px] font-semibold text-white shadow-card transition-colors duration-150 hover:bg-ink sm:w-auto"
          >
            {dict.ui.hero.primary}
          </a>
          <a
            href="#services"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-line bg-paper px-7 text-[15px] font-semibold text-ink shadow-card transition-colors duration-150 hover:bg-surface sm:w-auto"
          >
            {dict.ui.hero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}