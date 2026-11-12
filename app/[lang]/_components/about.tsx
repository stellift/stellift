import Star from "@/app/[lang]/_components/star";
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
    <section id="about" aria-labelledby="about-title" className="band border-b border-line">
      <div className="shell py-24 sm:py-36">
        <div className="flex items-center gap-4">
          <span className="index">{index}</span>
          <span className="eyebrow">{eyebrow}</span>
          <span aria-hidden className="h-px flex-1 bg-line" />
          <Star className="size-2.5 shrink-0 text-line-strong" />
        </div>

        <h2 id="about-title" className="sr-only">
          {dict.ui.about.title}
        </h2>

        <p className="reveal-line mt-14 max-w-[22ch] font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.025em] text-ink sm:max-w-[16ch]">
          <span>{dict.ui.about.title}</span>
        </p>

        <div className="reveal mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-14">
          <p className="max-w-[46ch] text-pretty text-lg leading-relaxed text-ink-muted lg:col-span-7 lg:text-xl">
            {dict.about.text}
          </p>

          <dl className="grid gap-px bg-line lg:col-span-5">
            {dict.services.map((service) => (
              <div
                key={service.code}
                className="flex items-baseline justify-between gap-6 bg-canvas py-4"
              >
                <dt className="index text-ink-faint">{service.code}</dt>
                <dd className="text-sm font-medium text-ink">{service.title}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
