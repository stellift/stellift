import { Cloud, Smartphone, Globe, type LucideIcon } from "lucide-react";
import Slate from "@/app/[lang]/_components/slate";
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
    <section
      id="services"
      aria-labelledby="services-title"
      data-tone="canvas"
      className="scene border-b border-line"
    >
      <div className="shell">
        <Slate
          id="services-title"
          index={index}
          label={eyebrow}
          title={dict.ui.services.title}
        />

        <ul className="reveal mt-16 border-t border-line">
          {dict.services.map((service, i) => {
            const Icon = icons[service.code];
            return (
              <li key={service.code} className="border-b border-line">
                <a
                  href="#contact"
                  aria-label={`${service.title}: ${dict.ui.card.action}`}
                  className="row-link group grid items-baseline gap-x-8 gap-y-5 py-10 sm:py-14 lg:grid-cols-12"
                >
                  <span className="index row-shift lg:col-span-1 lg:pl-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="row-shift font-serif text-[clamp(2rem,4.2vw,3.5rem)] leading-[0.98] tracking-[-0.03em] text-ink lg:col-span-5">
                    {service.title}
                  </h3>

                  <div className="lg:col-span-6 lg:pr-6">
                    <p className="eyebrow flex items-center gap-2.5">
                      <Icon
                        className="size-4 shrink-0 text-ink-faint transition-colors duration-300 group-hover:text-accent"
                        aria-hidden
                      />
                      {service.category}
                    </p>
                    <p className="mt-4 max-w-[48ch] text-pretty text-sm leading-relaxed text-ink-muted">
                      {service.text}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
