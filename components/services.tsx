import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

/** Um valor de navy por setor: o campo inteiro muda, não um detalhe dentro dele. */
const grounds = ["bg-ink", "bg-navy", "bg-blue"] as const;

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b-2 border-rule">
      <div className="mx-auto max-w-[96rem] px-5 pt-14 sm:px-8 sm:pt-20">
        <SectionHeading id="services-title" code="01" title={dict.ui.services.title} />
      </div>

      <ul className="field">
        {dict.services.map((service, i) => (
          <li
            key={service.code}
            className={`col-span-12 flex min-h-[22rem] flex-col justify-between p-6 text-white sm:p-8 lg:col-span-4 ${grounds[i % grounds.length]}`}
          >
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">
              {service.category}
            </p>

            <p
              aria-hidden
              className="font-sans text-[6rem] font-extrabold uppercase leading-[0.8] tracking-[-0.05em] text-white/25 sm:text-[8rem]"
            >
              {service.code}
            </p>

            <div>
              <h3 className="font-sans text-[1.75rem] font-extrabold uppercase leading-[0.95] tracking-[-0.025em] sm:text-[2.25rem]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.55] text-white">
                {service.text}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 border-b-2 border-white pb-0.5 text-[14px] font-bold uppercase tracking-[0.06em] transition-colors duration-100 hover:border-white/40 hover:text-white"
              >
                {dict.ui.card.action}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
