import type { Dictionary } from "@/lib/i18n/types";

/** Os setores da planta, na ordem em que a página os desenha. */
export const sectors = ["01", "02", "03", "04", "05"] as const;

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="top" className="border-b-2 border-rule">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <p className="legend-strip">
          <span>escala 1:1</span>
          <span>{dict.site.name}</span>
          <span className="ml-auto">{dict.site.tagline}</span>
        </p>

        <div className="field">
          {/* O eixo: o assunto da planta ocupa a esquerda, rente à margem. */}
          <div className="col-span-12 py-10 pr-0 sm:py-14 lg:col-span-8 lg:border-r-2 lg:border-rule lg:pr-10">
            <h1 className="max-w-[16ch] font-sans text-[2.75rem] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-ink sm:text-[4.5rem] lg:text-[6rem]">
              {dict.ui.hero.title}{" "}
              <span className="text-blue">{dict.ui.hero.titleAccent}</span>
            </h1>

            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.6] text-ink-2 sm:text-[1.1875rem]">
              {dict.site.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row">
              <a
                href="#contact"
                className="flex min-h-14 items-center justify-between gap-8 bg-navy px-6 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-100 hover:bg-ink"
              >
                {dict.ui.hero.primary}
                <Arrow />
              </a>
              <a
                href="#services"
                className="flex min-h-14 items-center justify-between gap-8 border-2 border-rule px-6 text-[14px] font-bold uppercase tracking-[0.08em] text-ink transition-colors duration-100 hover:bg-ink hover:text-white sm:border-l-0"
              >
                {dict.ui.hero.secondary}
                <Arrow />
              </a>
            </div>
          </div>

          {/* O quadro de legenda: toda planta tem um, e ele endereça os setores. */}
          <div className="col-span-12 flex flex-col border-t-2 border-rule lg:col-span-4 lg:border-t-0">
            <p className="border-b-2 border-rule py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-3 lg:pl-10">
              legenda
            </p>
            <ul>
              {dict.nav.map((item, i) => (
                <li key={item.href} className="border-b-2 border-rule">
                  <a
                    href={item.href}
                    className="group flex items-baseline gap-4 py-3.5 transition-colors duration-100 hover:bg-wash lg:pl-10"
                  >
                    <span className="text-[11px] font-bold tracking-[0.14em] text-blue">
                      {sectors[i]}
                    </span>
                    <span className="text-[15px] font-bold uppercase tracking-[0.04em] text-ink">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* O rodapé do quadro de legenda: para onde a planta aponta. */}
            <a
              href={`mailto:${dict.site.email}`}
              className="mt-auto flex items-baseline gap-4 border-t-2 border-rule py-4 transition-colors duration-100 hover:bg-wash lg:pl-10"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-3">
                contato
              </span>
              <span className="break-all text-[14px] font-bold text-blue underline decoration-2 underline-offset-4">
                {dict.site.email}
              </span>
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
