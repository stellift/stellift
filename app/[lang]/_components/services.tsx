import { Cloud, Smartphone, Globe, ArrowRight, type LucideIcon } from "lucide-react";
import SectionHeading from "@/app/[lang]/_components/section-heading";
import type { Dictionary, ServiceCode } from "@/lib/i18n/types";

const icons: Record<ServiceCode, LucideIcon> = {
  WEB: Globe,
  MOB: Smartphone,
  CLD: Cloud,
};

export default function Services({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-line">
      <div className="shell py-20 sm:py-28">
        <SectionHeading
          id="services-title"
          index={index}
          eyebrow={eyebrow}
          title={dict.ui.services.title}
        />

        <ul className="grid-ruled mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service) => {
            const Icon = icons[service.code];
            return (
              <li key={service.code} className="cell cell-link group flex flex-col p-7">
                <span aria-hidden className="cell-mark" />

                <div className="flex items-center justify-between gap-4">
                  <Icon className="size-5 text-accent" aria-hidden />
                  <span className="index text-ink-faint">{service.code}</span>
                </div>

                <p className="eyebrow mt-7">{service.category}</p>

                <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {dict.ui.card.action}
                  <ArrowRight
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
