import type { Dictionary } from "@/lib/i18n/types";

export default function Statement({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
  const words = dict.about.text.split(/\s+/).filter(Boolean);
  const span = 72 / words.length;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      data-tone="accent"
      className="statement-track tone-accent relative h-[300svh] border-b border-line"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="shell">
          <div className="slate">
            <span className="index">{index}</span>
            <span className="eyebrow">{eyebrow}</span>
            <span aria-hidden className="h-px flex-1 bg-line-strong opacity-30" />
            <span className="eyebrow">{dict.ui.about.title}</span>
          </div>

          <h2
            id="about-title"
            className="mt-8 max-w-[26ch] font-serif text-[clamp(1.6rem,3.9vw,3.6rem)] leading-[1.08] tracking-[-0.025em] text-ink"
          >
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="statement-word"
                style={{
                  animationRange: `contain ${(i * span).toFixed(2)}% contain ${Math.min(
                    100,
                    i * span + span * 2.6,
                  ).toFixed(2)}%`,
                }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line-strong/30 pt-6">
            {dict.services.map((service) => (
              <div key={service.code} className="flex items-baseline gap-3">
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
