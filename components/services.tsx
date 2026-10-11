import Card from "@/components/card";
import SectionHeading from "@/components/section-heading";
import { servicePlates } from "@/components/plates";
import type { Dictionary } from "@/lib/i18n/types";

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" aria-labelledby="services-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="services-title"
          title={dict.ui.services.title}
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service) => {
            const Plate = servicePlates[service.code];
            return (
              <li key={service.code} className="h-full">
                <Card
                  category={service.category}
                  title={service.title}
                  text={service.text}
                  href="#contact"
                  action={dict.ui.card.action}
                  plate={<Plate className="h-24 w-full" />}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
