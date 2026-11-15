"use client";

import { useId, useState } from "react";
import { neededGrade, parseGrades, summarize } from "@/app/[lang]/[slug]/_tools/average";
import { NumberField, toNumber } from "@/app/[lang]/[slug]/_tools/number-input";
import { Panels, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Average({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("7,5 2\n6 3\n8,5 2");
  const [target, setTarget] = useState("7");
  const [nextWeight, setNextWeight] = useState("3");
  const { grades, invalid } = parseGrades(text);
  const summary = summarize(grades);
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const goal = toNumber(target);
  const weight = toNumber(nextWeight);
  const needed = goal !== null && weight !== null ? neededGrade(grades, goal, weight) : null;

  const rows = summary
    ? [
        ...(summary.weightedUsed && summary.weighted !== null
          ? [{ label: t("weighted"), value: summary.weighted, big: true }]
          : []),
        { label: t("mean"), value: summary.mean, big: !summary.weightedUsed },
        { label: t("median"), value: summary.median },
        { label: t("min"), value: summary.min },
        { label: t("max"), value: summary.max },
      ]
    : [];

  return (
    <Panels
      controls={
        <>
          <TextInput id={`${id}-grades`} label={t("input")} value={text} onChange={setText} rows={7} />
          <p className="-mt-3 text-xs text-ink-faint">{t("inputHint")}</p>
          {invalid.length ? (
            <p className="text-sm text-accent">{t("skipped").replace("{lines}", invalid.join(", "))}</p>
          ) : null}
          <div className="border-t border-line pt-6">
            <h2 className="font-serif text-xl leading-tight text-ink">{t("neededTitle")}</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <NumberField id={`${id}-target`} label={t("target")} value={target} onChange={setTarget} />
              <NumberField id={`${id}-weight`} label={t("nextWeight")} value={nextWeight} onChange={setNextWeight} />
            </div>
            <p aria-live="polite" className="mt-4 text-ink">
              {needed === null
                ? ""
                : needed <= 0
                  ? t("alreadyThere")
                  : t("needed").replace("{value}", number.format(needed))}
            </p>
          </div>
        </>
      }
      output={
        summary ? (
          <>
          <dl aria-live="polite" className="flex flex-col gap-4">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 border-b border-line pb-4 last:border-b-0"
              >
                <dt className="field-label">{row.label}</dt>
                <dd
                  className={`font-serif tabular-nums leading-none text-ink ${row.big ? "text-5xl" : "text-2xl"}`}
                >
                  {number.format(row.value)}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-ink-faint">
            {t("count").replace("{count}", number.format(summary.count))}
          </p>
          </>
        ) : (
          <p className="text-sm text-ink-faint">{t("empty")}</p>
        )
      }
    />
  );
}
