"use client";

import { useEffect, useId, useState } from "react";
import { age } from "@/app/[lang]/[slug]/_tools/age";
import { Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

function iso(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function Age({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [birth, setBirth] = useState("");
  const [today, setToday] = useState("");
  const result = birth && today ? age(birth, today) : null;
  const number = new Intl.NumberFormat(locale);
  const plural = new Intl.PluralRules(locale);
  const list = new Intl.ListFormat(locale, { type: "conjunction" });
  const unit = (n: number, key: string) =>
    `${number.format(n)} ${t(`${key}${plural.select(n) === "one" ? "One" : "Many"}`)}`;
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "long", timeZone: "UTC" });
  const longDate = new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" });

  useEffect(() => {
    const frame = requestAnimationFrame(() => setToday(iso(new Date())));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-birth`} className="field-label mb-2.5">
              {t("birth")}
            </label>
            <input
              id={`${id}-birth`}
              type="date"
              value={birth}
              max={today || undefined}
              onChange={(event) => setBirth(event.target.value)}
              className="input text-[16px]"
            />
          </div>
          <div>
            <label htmlFor={`${id}-today`} className="field-label mb-2.5">
              {t("on")}
            </label>
            <input
              id={`${id}-today`}
              type="date"
              value={today}
              onChange={(event) => setToday(event.target.value)}
              className="input text-[16px]"
            />
          </div>
        </>
      }
      output={
        result ? (
          <>
            <p aria-live="polite" className="font-serif text-5xl leading-none text-ink">
              {unit(result.years, "year")}
            </p>
            <dl className="flex flex-col gap-4">
              {[
                {
                  label: t("exact"),
                  value: list.format([
                    unit(result.years, "year"),
                    unit(result.months, "month"),
                    unit(result.days, "day"),
                  ]),
                },
                { label: t("lived"), value: `${unit(result.totalDays, "day")} (${unit(result.totalWeeks, "week")})` },
                {
                  label: t("next"),
                  value:
                    result.untilBirthday === 0
                      ? t("today")
                      : t("nextValue")
                          .replace("{date}", longDate.format(new Date(`${result.nextBirthday}T12:00:00Z`)))
                          .replace("{days}", unit(result.untilBirthday, "day"))
                          .replace("{age}", number.format(result.turning)),
                },
                {
                  label: t("born"),
                  value: weekday.format(new Date(`${birth}T12:00:00Z`)),
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-line pb-4 last:border-b-0"
                >
                  <dt className="field-label">{row.label}</dt>
                  <dd className="text-ink first-letter:uppercase">{row.value}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : (
          <p className="text-sm text-ink-faint">{birth ? t("future") : t("empty")}</p>
        )
      }
    />
  );
}
