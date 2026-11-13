import Slate from "@/app/[lang]/_components/slate";
import type { Dictionary } from "@/lib/i18n/types";

export default function Mission({
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
      id="mission"
      aria-labelledby="mission-title"
      data-tone="canvas"
      className="scene border-b border-line"
    >
      <div className="shell">
        <Slate
          id="mission-title"
          index={index}
          label={eyebrow}
          title={dict.mission.title}
        >
          {dict.mission.lead}
        </Slate>

        <ul className="reveal mt-14 grid-ruled sm:grid-cols-2 lg:grid-cols-4">
          {dict.mission.values.map((value, i) => (
            <li key={value.title} className="cell p-7 sm:p-8">
              <span className="index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-xl leading-tight text-ink">
                {value.title}
              </h3>
              <p className="mt-3.5 text-pretty text-sm leading-relaxed text-ink-muted">
                {value.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
