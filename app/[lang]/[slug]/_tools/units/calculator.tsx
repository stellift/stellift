"use client";

import { useId, useState } from "react";
import { categories, convert, type Category } from "@/app/[lang]/[slug]/_tools/units";
import { toNumber } from "@/app/[lang]/[slug]/_tools/number-input";
import { Choice, CopyButton, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const defaults: Record<Category, string> = {
  length: "m",
  mass: "kg",
  volume: "l",
  area: "m2",
  speed: "kmh",
  data: "GB",
  temperature: "c",
};

export default function Units({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [category, setCategory] = useState<Category>("length");
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState("m");
  const units = Object.keys(categories[category]);
  const amount = toNumber(value);
  const number = new Intl.NumberFormat(locale, { maximumSignificantDigits: 10 });
  const options = (Object.keys(categories) as Category[]).map((key) => ({ value: key, label: t(key) }));

  return (
    <Panels
      controls={
        <>
          <Choice
            label={t("category")}
            options={options}
            value={category}
            onChange={(next) => {
              setCategory(next);
              setFrom(defaults[next]);
            }}
          />
          <div className="grid grid-cols-[1fr_auto] items-end gap-3">
            <div>
              <label htmlFor={`${id}-value`} className="field-label mb-2.5">
                {t("value")}
              </label>
              <input
                id={`${id}-value`}
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="input text-[16px]"
              />
            </div>
            <div>
              <label htmlFor={`${id}-from`} className="field-label mb-2.5">
                {t("from")}
              </label>
              <select
                id={`${id}-from`}
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                className="input text-[16px]"
              >
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {t(`u_${unit}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      }
      output={
        <dl aria-live="polite" className="flex flex-col">
          {units
            .filter((unit) => unit !== from)
            .map((unit) => {
              const result = amount === null ? "" : number.format(convert(category, amount, from, unit));
              return (
                <div
                  key={unit}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-4 border-b border-line py-3 first:pt-0 last:border-b-0"
                >
                  <dt className="text-sm text-ink-muted">{t(`u_${unit}`)}</dt>
                  <dd className="row-span-2 self-center">
                    <CopyButton value={result} shared={shared} />
                  </dd>
                  <dd className="tabular-nums text-lg tabular-nums text-ink">{result || "–"}</dd>
                </div>
              );
            })}
        </dl>
      }
    />
  );
}
