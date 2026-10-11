import { Cloud, Smartphone, Globe, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import type { Dictionary, ServiceCode } from "@/lib/i18n/types";

const icons: Record<ServiceCode, LucideIcon> = {
  WEB: Globe,
  MOB: Smartphone,
  CLD: Cloud,
};

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          id="services-title"
          eyebrow={dict.ui.services.eyebrow}
          title={dict.ui.services.title}
        />

        {/* A grade é o fundo: o gap de 1px sobre bg-line vira o filete. */}
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service) => {
            const Icon = icons[service.code];
            return (
              <li key={service.code} className="cell p-6">
                <Icon className="size-5 text-accent" aria-hidden />
                <p className="field-label mt-4 uppercase">{service.category}</p>
                <h3 className="mt-2 text-sm font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-muted">
                  {service.text}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {dict.ui.card.action}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
