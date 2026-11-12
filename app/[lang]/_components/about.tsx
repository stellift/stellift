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
    <section id="about" aria-labelledby="about-title" className="border-b border-line">
      <div className="shell py-20 sm:py-28">
        <div className="flex items-center gap-4">
          <span className="index">{index}</span>
          <span className="eyebrow">{eyebrow}</span>
          <span aria-hidden className="h-px flex-1 bg-line" />
          <Star className="size-2.5 shrink-0 text-line-strong" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <h2
            id="about-title"
            className="font-serif text-[2rem] leading-[1.08] text-ink sm:text-5xl lg:col-span-4"
          >
            {dict.ui.about.title}
          </h2>

          <div className="lg:col-span-8">
            <p className="max-w-[46ch] text-pretty font-serif text-2xl leading-[1.45] text-ink sm:text-[1.75rem]">
              {dict.about.text}
            </p>

            <dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
              {dict.services.map((service) => (
                <div key={service.code} className="cell px-6 py-5">
                  <dt className="index text-ink-faint">{service.code}</dt>
                  <dd className="mt-2.5 text-sm font-medium text-ink">
                    {service.title}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
