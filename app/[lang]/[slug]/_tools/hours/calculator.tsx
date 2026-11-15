"use client";

import { useId, useState } from "react";
import { between, formatMinutes, sumDurations } from "@/app/[lang]/[slug]/_tools/hours";
import { TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Hours({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [start, setStart] = useState("08:00");
  const [end, setEnd] = useState("17:48");
  const [pause, setPause] = useState("01:00");
  const [list, setList] = useState("08:30\n07:45\n2h15\n-0:30");
  const decimal = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const pauseMinutes = between("00:00", pause) ?? 0;
  const span = between(start, end);
  const worked = span === null ? null : span - pauseMinutes;
  const sum = sumDurations(list);

  const show = (minutes: number | null) =>
    minutes === null ? "–" : `${formatMinutes(minutes)} h`;
  const asDecimal = (minutes: number | null) =>
    minutes === null ? "" : t("decimal").replace("{value}", decimal.format(minutes / 60));

  return (
    <div className="grid-ruled lg:grid-cols-2">
      <section aria-labelledby={`${id}-span`} className="cell flex flex-col gap-6 p-7 sm:p-8">
        <h2 id={`${id}-span`} className="font-serif text-xl leading-tight text-ink">
          {t("spanTitle")}
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { key: "start", value: start, set: setStart },
            { key: "end", value: end, set: setEnd },
            { key: "pause", value: pause, set: setPause },
          ].map((field) => (
            <div key={field.key}>
              <label htmlFor={`${id}-${field.key}`} className="field-label mb-2.5">
                {t(field.key)}
              </label>
              <input
                id={`${id}-${field.key}`}
                type="time"
                value={field.value}
                onChange={(event) => field.set(event.target.value)}
                className="input px-2 text-[16px]"
              />
            </div>
          ))}
        </div>
        <output aria-live="polite" className="block">
          <span className="block font-serif text-4xl tabular-nums leading-none text-ink">{show(worked)}</span>
          <span className="mt-2 block text-sm text-ink-muted">{asDecimal(worked)}</span>
        </output>
        {span !== null && end < start ? <p className="text-xs text-ink-faint">{t("overnight")}</p> : null}
      </section>
      <section aria-labelledby={`${id}-sum`} className="cell flex flex-col gap-6 p-7 sm:p-8">
        <h2 id={`${id}-sum`} className="font-serif text-xl leading-tight text-ink">
          {t("sumTitle")}
        </h2>
        <TextInput id={`${id}-list`} label={t("list")} value={list} onChange={setList} rows={6} />
        <p className="-mt-3 text-xs text-ink-faint">{t("listHint")}</p>
        <output aria-live="polite" className="block">
          <span className="block font-serif text-4xl tabular-nums leading-none text-ink">{show(sum.total)}</span>
          <span className="mt-2 block text-sm text-ink-muted">{asDecimal(sum.total)}</span>
        </output>
        {sum.invalid.length ? (
          <p className="text-sm text-accent">
            {t("skipped").replace("{lines}", sum.invalid.join(", "))}
          </p>
        ) : null}
      </section>
    </div>
  );
}
