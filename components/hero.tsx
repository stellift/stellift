import type { Dictionary } from "@/lib/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" className="border-b-2 border-rule">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="field gap-x-4 gap-y-6 py-10 sm:py-14">
          {/* IDEIA: a primeira palavra ocupa o campo antes de qualquer frase. */}
          <h1 className="col-span-12 lg:col-span-7">
            <span className="sr-only">
              {dict.ui.hero.title} {dict.ui.hero.titleAccent}
            </span>
            <span
              aria-hidden
              className="block font-sans text-[22vw] font-extrabold uppercase leading-[0.78] tracking-[-0.045em] text-ink sm:text-[16vw] lg:text-[11.5vw]"
            >
              {dict.ui.hero.fieldStart}
            </span>
          </h1>

          {/* A oferta dita uma vez, dentro de um campo vermelho chapado. */}
          <p className="col-span-12 self-start bg-red px-6 py-7 text-[1.0625rem] font-medium leading-[1.4] text-white sm:text-[1.25rem] lg:col-span-5 lg:col-start-8">
            {dict.site.description}
          </p>

          <p
            aria-hidden
            className="col-span-12 self-end text-right font-sans text-[22vw] font-extrabold uppercase leading-[0.78] tracking-[-0.045em] text-blue sm:text-[16vw] lg:col-span-9 lg:col-start-4 lg:text-[11.5vw]"
          >
            {dict.ui.hero.fieldEnd}
          </p>

          {/* A ação é um bloco sólido, não uma pílula. */}
          <div className="col-span-12 flex flex-col sm:flex-row lg:col-span-7">
            <a
              href="#contact"
              className="flex min-h-14 flex-1 items-center justify-between gap-6 bg-blue px-6 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-100 hover:bg-ink"
            >
              {dict.ui.hero.primary}
              <Arrow />
            </a>
            <a
              href="#services"
              className="flex min-h-14 flex-1 items-center justify-between gap-6 border-2 border-rule px-6 text-[15px] font-bold uppercase tracking-[0.06em] text-ink transition-colors duration-100 hover:bg-ink hover:text-white sm:border-l-0"
            >
              {dict.ui.hero.secondary}
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
