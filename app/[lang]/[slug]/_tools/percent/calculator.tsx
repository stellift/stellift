"use client";

import { useId, useState } from "react";
import { change, percentOf, shareOf } from "@/app/[lang]/[slug]/_tools/percent";
import { labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

function toNumber(text: string) {
  const clean = text.trim().replace(/\s/g, "");
  if (clean === "") return null;
  const normalized = /,\d*$/.test(clean) ? clean.replace(/\./g, "").replace(",", ".") : clean;
  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}

export default function Percent({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [values, setValues] = useState<Record<string, string>>({
    a1: "15",
    b1: "200",
    a2: "30",
    b2: "200",
    a3: "80",
    b3: "100",
  });
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const read = (key: string) => toNumber(values[key] ?? "");
  const both = (a: string, b: string, fn: (x: number, y: number) => number | null) => {
    const x = read(a);
    const y = read(b);
    return x === null || y === null ? null : fn(x, y);
  };

  const r1 = both("a1", "b1", percentOf);
  const r2 = both("a2", "b2", shareOf);
  const r3 = both("a3", "b3", change);

  const cards = [
    { n: 1, result: r1 === null ? "–" : number.format(r1) },
    { n: 2, result: r2 === null ? "–" : `${number.format(r2)}%` },
    {
      n: 3,
      result:
        r3 === null ? "–" : `${r3 > 0 ? "+" : ""}${number.format(r3)}%`,
      hint: r3 === null || r3 === 0 ? "" : r3 > 0 ? t("up") : t("down"),
    },
  ];

  return (
    <div className="grid-ruled lg:grid-cols-3">
      {cards.map((card) => (
        <form
          key={card.n}
          onSubmit={(event) => event.preventDefault()}
          className="cell flex flex-col gap-5 p-7 sm:p-8"
        >
          <h2 className="font-serif text-xl leading-tight text-ink">{t(`q${card.n}`)}</h2>
          {(["a", "b"] as const).map((side) => (
            <div key={side}>
              <label htmlFor={`${id}-${side}${card.n}`} className="field-label mb-2.5">
                {t(`${side}${card.n}`)}
              </label>
              <input
                id={`${id}-${side}${card.n}`}
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={values[`${side}${card.n}`]}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, [`${side}${card.n}`]: event.target.value }))
                }
                className="input text-[16px]"
              />
            </div>
          ))}
          <output aria-live="polite" className="mt-auto block">
            <span className="block font-serif text-4xl tabular-nums leading-none text-ink">
              {card.result}
            </span>
            {card.hint ? <span className="mt-2 block text-sm text-ink-muted">{card.hint}</span> : null}
          </output>
        </form>
      ))}
    </div>
  );
}
