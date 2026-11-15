"use client";

import { useEffect, useId, useState } from "react";
import { parseTimestamp, toLocalInput } from "@/app/[lang]/[slug]/_tools/timestamp";
import { CopyRow, Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

function nowSeconds() {
  return String(Math.floor(Date.now() / 1000));
}

export default function Timestamp({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [input, setInput] = useState("");
  const parsed = parseTimestamp(input);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setInput(nowSeconds()));
    return () => cancelAnimationFrame(frame);
  }, []);

  const rows = parsed
    ? [
        {
          label: t("local"),
          value: new Intl.DateTimeFormat(locale, {
            dateStyle: "full",
            timeStyle: "long",
          }).format(parsed.date),
        },
        { label: t("iso"), value: parsed.date.toISOString() },
        { label: t("seconds"), value: String(Math.floor(parsed.date.getTime() / 1000)) },
        { label: t("milliseconds"), value: String(parsed.date.getTime()) },
      ]
    : [];

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-ts`} className="field-label mb-2.5">
              {t("input")}
            </label>
            <input
              id={`${id}-ts`}
              type="text"
              inputMode="numeric"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-describedby={`${id}-hint`}
              className="input font-mono text-[16px]"
            />
            <p id={`${id}-hint`} className="mt-2 text-xs text-ink-faint">
              {t("inputHint")}
            </p>
          </div>
          <div>
            <label htmlFor={`${id}-date`} className="field-label mb-2.5">
              {t("date")}
            </label>
            <input
              id={`${id}-date`}
              type="datetime-local"
              step={1}
              value={parsed ? toLocalInput(parsed.date) : ""}
              onChange={(event) => {
                const time = new Date(event.target.value).getTime();
                if (Number.isFinite(time)) setInput(String(Math.floor(time / 1000)));
              }}
              className="input text-[16px]"
            />
          </div>
          <div>
            <button type="button" onClick={() => setInput(nowSeconds())} className="btn btn-primary">
              {t("now")}
            </button>
          </div>
        </>
      }
      output={
        parsed || input.trim() === "" ? (
          <dl className="flex flex-col gap-4">
            {rows.map((row) => (
              <CopyRow key={row.label} label={row.label} value={row.value} shared={shared} />
            ))}
          </dl>
        ) : (
          <Problem>{t("invalid")}</Problem>
        )
      }
    />
  );
}
