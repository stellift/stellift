import type { Dictionary } from "@/lib/i18n/types";

export default function About({
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
      id="about"
      aria-labelledby="about-title"
      data-tone="accent"
      className="scene tone-accent border-b border-line"
    >
      <div className="shell">
        <div className="slate">
          <span className="index">{index}</span>
          <span className="eyebrow">{eyebrow}</span>
          <span aria-hidden className="h-px flex-1 bg-line-strong opacity-40" />
        </div>

        <h2 id="about-title" className="sr-only">
          {dict.ui.about.title}
        </h2>

        <p className="reveal-line mt-10 max-w-[13ch] font-serif text-[clamp(2.75rem,7.6vw,7rem)] leading-[0.9] tracking-[-0.04em] text-ink">
          <span>{dict.ui.about.title}</span>
        </p>

        <div className="reveal mt-12 grid gap-10 border-t border-line-strong/40 pt-10 lg:grid-cols-12 lg:gap-16">
          <p className="max-w-[46ch] text-pretty text-lg leading-relaxed text-ink-muted lg:col-span-7 lg:text-2xl lg:leading-relaxed">
            {dict.about.text}
          </p>

          <dl className="lg:col-span-5">
            {dict.services.map((service) => (
              <div
                key={service.code}
                className="flex items-baseline justify-between gap-6 border-b border-line-strong/40 py-4 last:border-b-0"
              >
                <dt className="index">{service.code}</dt>
                <dd className="text-sm font-semibold text-ink">
                  {service.title}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
