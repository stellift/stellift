"use client";

import { useEffect, useId, useState } from "react";
import { compareDates } from "@/app/[lang]/[slug]/_tools/dates";
import { Check, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

function iso(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function Dates({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [includeLast, setIncludeLast] = useState(false);
  const result = compareDates(from, to, includeLast);
  const number = new Intl.NumberFormat(locale);
  const plural = new Intl.PluralRules(locale);
  const list = new Intl.ListFormat(locale, { type: "conjunction" });
  const unit = (n: number, key: string) =>
    `${number.format(n)} ${t(`${key}${plural.select(n) === "one" ? "One" : "Many"}`)}`;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const today = new Date();
      setFrom(iso(today));
      setTo(iso(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const breakdown = result
    ? list.format(
        [
          result.years ? unit(result.years, "year") : "",
          result.months ? unit(result.months, "month") : "",
          result.rest || (!result.years && !result.months) ? unit(result.rest, "day") : "",
        ].filter(Boolean),
      )
    : "";

  return (
    <Panels
      controls={
        <>
          {[
            { key: "from", value: from, set: setFrom },
            { key: "to", value: to, set: setTo },
          ].map((field) => (
            <div key={field.key}>
              <label htmlFor={`${id}-${field.key}`} className="field-label mb-2.5">
                {t(field.key)}
              </label>
              <input
                id={`${id}-${field.key}`}
                type="date"
                value={field.value}
                onChange={(event) => field.set(event.target.value)}
                className="input text-[16px]"
              />
            </div>
          ))}
          <Check label={t("includeLast")} checked={includeLast} onChange={setIncludeLast} />
        </>
      }
      output={
        result ? (
          <>
            <p aria-live="polite" className="font-serif text-5xl leading-none text-ink">
              {unit(result.days, "day")}
            </p>
            <dl className="flex flex-col gap-4">
              {[
                { label: t("calendar"), value: breakdown },
                {
                  label: t("weeks"),
                  value: list.format(
                    [
                      result.weeks ? unit(result.weeks, "week") : "",
                      result.weekRest ? unit(result.weekRest, "day") : "",
                    ].filter(Boolean),
                  ) || unit(0, "day"),
                },
                { label: t("business"), value: unit(result.business, "day") },
              ].map((row) => (
                <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4 last:border-b-0">
                  <dt className="field-label">{row.label}</dt>
                  <dd className="text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : (
          <p className="text-sm text-ink-faint">{t("empty")}</p>
        )
      }
    />
  );
}
