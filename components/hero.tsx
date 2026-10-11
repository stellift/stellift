import type { Dictionary } from "@/lib/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto w-full max-w-3xl px-6 pb-20 pt-24 text-center sm:pb-24 sm:pt-28">
        <h1 className="text-balance font-serif text-[42px] leading-[1.05] text-ink sm:text-6xl">
          {dict.ui.hero.title} {dict.ui.hero.titleAccent}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
          {dict.site.description}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn btn-primary">
            {dict.ui.hero.primary}
          </a>
          <a href="#services" className="btn btn-ghost">
            {dict.ui.hero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
