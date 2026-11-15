"use client";

import { useId, useState } from "react";
import { fromPrice, priceForMargin, priceForMarkup } from "@/app/[lang]/[slug]/_tools/margin";
import { NumberField, toNumber } from "@/app/[lang]/[slug]/_tools/number-input";
import { labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Margin({ copy, locale, currency }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [values, setValues] = useState<Record<string, string>>({
    cost1: "60",
    price1: "100",
    cost2: "60",
    margin2: "40",
    cost3: "60",
    markup3: "50",
  });
  const money = new Intl.NumberFormat(locale, { style: "currency", currency });
  const pct = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const n = (key: string) => toNumber(values[key] ?? "");
  const set = (key: string) => (value: string) => setValues((prev) => ({ ...prev, [key]: value }));

  const c1 = n("cost1");
  const p1 = n("price1");
  const first = c1 !== null && p1 !== null ? fromPrice(c1, p1) : null;
  const c2 = n("cost2");
  const m2 = n("margin2");
  const second = c2 !== null && m2 !== null ? priceForMargin(c2, m2) : null;
  const c3 = n("cost3");
  const k3 = n("markup3");
  const third = c3 !== null && k3 !== null ? priceForMarkup(c3, k3) : null;

  const cards = [
    {
      key: 1,
      fields: ["cost1", "price1"],
      result: first ? (
        <dl className="flex flex-col gap-3">
          {[
            { label: t("margin"), value: first.margin === null ? "–" : `${pct.format(first.margin)}%` },
            { label: t("markup"), value: first.markup === null ? "–" : `${pct.format(first.markup)}%` },
            { label: t("profit"), value: money.format(first.profit) },
          ].map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4">
              <dt className="field-label">{row.label}</dt>
              <dd className="font-serif text-2xl tabular-nums leading-none text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null,
    },
    {
      key: 2,
      fields: ["cost2", "margin2"],
      result: (
        <p className="font-serif text-4xl tabular-nums leading-none text-ink">
          {second === null ? "–" : money.format(second)}
        </p>
      ),
    },
    {
      key: 3,
      fields: ["cost3", "markup3"],
      result: (
        <p className="font-serif text-4xl tabular-nums leading-none text-ink">
          {third === null ? "–" : money.format(third)}
        </p>
      ),
    },
  ];

  return (
    <div className="grid-ruled lg:grid-cols-3">
      {cards.map((card) => (
        <form key={card.key} onSubmit={(event) => event.preventDefault()} className="cell flex flex-col gap-5 p-7 sm:p-8">
          <h2 className="font-serif text-xl leading-tight text-ink">{t(`q${card.key}`)}</h2>
          {card.fields.map((field) => (
            <NumberField
              key={field}
              id={`${id}-${field}`}
              label={t(field.replace(/\d$/, ""))}
              value={values[field]}
              onChange={set(field)}
            />
          ))}
          <output aria-live="polite" className="mt-auto block">
            {card.result}
          </output>
        </form>
      ))}
    </div>
  );
}
