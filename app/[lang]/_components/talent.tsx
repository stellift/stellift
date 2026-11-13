import Slate from "@/app/[lang]/_components/slate";
import type { Dictionary } from "@/lib/i18n/types";

export default function Talent({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
  const subject = encodeURIComponent(dict.talent.hiring.subject);

  return (
    <section
      id="talent"
      aria-labelledby="talent-title"
      data-tone="canvas"
      className="scene border-b border-line"
    >
      <div className="shell">
        <Slate
          id="talent-title"
          index={index}
          label={eyebrow}
          title={dict.talent.title}
        >
          {dict.talent.lead}
        </Slate>

        <div className="reveal mt-14 grid-ruled lg:grid-cols-3">
          <div className="cell p-8 sm:p-10 lg:col-span-2">
            <h3 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
              {dict.talent.hiring.title}
            </h3>
            <p className="mt-4 max-w-[52ch] text-pretty text-sm leading-relaxed text-ink-muted">
              {dict.talent.hiring.text}
            </p>
          </div>

          <div className="cell flex flex-col justify-between gap-7 p-8 sm:p-10">
            <span className="eyebrow">{dict.talent.hiring.eyebrow}</span>
            <a
              href={`mailto:${dict.site.email}?subject=${subject}`}
              className="btn btn-outline"
            >
              {dict.talent.hiring.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
