"use client";

import { useEffect, useId, useState } from "react";
import { nextRuns, parseCron } from "@/app/[lang]/[slug]/_tools/cron";
import { Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const presets = ["*/15 * * * *", "0 * * * *", "0 9 * * 1-5", "0 0 1 * *", "30 2 * * 0"];

const fields = ["minute", "hour", "dayOfMonth", "month", "dayOfWeek"] as const;

const ranges = { minute: 60, hour: 24, dayOfMonth: 31, month: 12, dayOfWeek: 7 };

function compact(values: number[]) {
  const parts: string[] = [];
  for (let i = 0; i < values.length; i++) {
    let j = i;
    while (j + 1 < values.length && values[j + 1] === values[j] + 1) j++;
    parts.push(j - i >= 2 ? `${values[i]}-${values[j]}` : values.slice(i, j + 1).join(", "));
    i = j;
  }
  return parts.join(", ");
}

export default function Cron({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [expression, setExpression] = useState("0 9 * * 1-5");
  const [now, setNow] = useState<Date | null>(null);
  const cron = parseCron(expression);
  const runs = cron && now ? nextRuns(cron, now, 5) : [];
  const format = new Intl.DateTimeFormat(locale, { dateStyle: "full", timeStyle: "short" });
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: "short" }).format(new Date(2026, 10, 15 + i)),
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(2026, i, 1)),
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => setNow(new Date()));
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);

  function describe(field: (typeof fields)[number]) {
    if (!cron) return "";
    const values = [...cron[field].values].filter((v) => !(field === "dayOfWeek" && v === 7)).sort((a, b) => a - b);
    if (values.length === ranges[field]) return t("any");
    if (field === "dayOfWeek") return values.map((v) => weekdays[v]).join(", ");
    if (field === "month") return values.map((v) => months[v - 1]).join(", ");
    return compact(values);
  }

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={id} className="field-label mb-2.5">
              {t("input")}
            </label>
            <input
              id={id}
              type="text"
              autoComplete="off"
              spellCheck={false}
              value={expression}
              onChange={(event) => setExpression(event.target.value)}
              aria-describedby={`${id}-hint`}
              className="input font-mono text-[18px]"
            />
            <p id={`${id}-hint`} className="mt-2 text-xs text-ink-faint">
              {t("inputHint")}
            </p>
          </div>
          <div>
            <span className="field-label mb-2.5">{t("examples")}</span>
            <ul className="flex flex-col gap-1">
              {presets.map((preset, i) => (
                <li key={preset}>
                  <button
                    type="button"
                    onClick={() => setExpression(preset)}
                    className="flex w-full items-baseline gap-4 py-1.5 text-left text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    <code className="w-28 shrink-0 font-mono text-ink">{preset}</code>
                    {t(`preset${i + 1}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      }
      output={
        cron ? (
          <>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
              {fields.map((field) => (
                <div key={field} className="contents">
                  <dt className="field-label self-center">{t(field)}</dt>
                  <dd className="text-ink">{describe(field)}</dd>
                </div>
              ))}
            </dl>
            <h2 className="field-label mt-2">{t("next")}</h2>
            {runs.length > 0 ? (
              <ol aria-live="polite" className="flex flex-col gap-2 text-ink">
                {runs.map((run) => (
                  <li key={run.getTime()} className="first-letter:uppercase">
                    {format.format(run)}
                  </li>
                ))}
              </ol>
            ) : now ? (
              <p className="text-sm text-ink-muted">{t("never")}</p>
            ) : null}
          </>
        ) : (
          <Problem>{t("invalid")}</Problem>
        )
      }
    />
  );
}
