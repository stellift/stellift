"use client";

import { useId, useState } from "react";
import { countText } from "@/app/[lang]/[slug]/_tools/counter";
import { labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const keys = ["characters", "noSpaces", "words", "lines", "bytes"] as const;

export default function Counter({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("");
  const counts = countText(text, locale);
  const number = new Intl.NumberFormat(locale);

  return (
    <div className="grid-ruled lg:grid-cols-2">
      <div className="cell p-7 sm:p-8">
        <label htmlFor={id} className="field-label mb-2.5">
          {t("input")}
        </label>
        <textarea
          id={id}
          rows={12}
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="input resize-y text-[16px] leading-relaxed"
        />
      </div>
      <dl className="cell flex flex-col gap-px bg-line p-0">
        {keys.map((key) => (
          <div
            key={key}
            className="flex flex-1 items-baseline justify-between gap-6 bg-canvas px-7 py-5 sm:px-8"
          >
            <dt className="field-label">{t(key)}</dt>
            <dd className="font-serif text-3xl tabular-nums leading-none text-ink">
              {number.format(counts[key])}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
