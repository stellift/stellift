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

        <ul className="reveal mt-14 border-t border-line">
          {dict.services.map((service, i) => {
            const Icon = icons[service.code];
            return (
              <li key={service.code} className="border-b border-line">
                <a
                  href="#contact"
                  aria-label={`${service.title}: ${dict.ui.card.action}`}
                  className="row-link group grid items-baseline gap-x-8 gap-y-5 py-9 sm:py-11 lg:grid-cols-12"
                >
                  <span className="index row-shift lg:col-span-1 lg:pl-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="row-shift font-serif text-[clamp(1.875rem,3.8vw,3.25rem)] leading-[0.98] tracking-[-0.025em] text-ink lg:col-span-4">
                    {service.title}
                  </h3>

                  <p className="eyebrow lg:col-span-2">{service.category}</p>

                  <p className="text-pretty text-sm leading-relaxed text-ink-muted lg:col-span-4">
                    {service.text}
                  </p>

                  <span className="flex items-center gap-4 self-center lg:col-span-1 lg:justify-self-end lg:pr-5">
                    <Icon
                      className="size-5 text-ink-faint transition-colors duration-300 group-hover:text-accent"
                      aria-hidden
                    />
                    <ArrowRight
                      className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
