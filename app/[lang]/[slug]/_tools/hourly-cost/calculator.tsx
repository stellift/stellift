"use client";

import { CalculatorShell, useNumbers } from "@/app/[lang]/[slug]/_tools/shell";
import { formatMoney } from "@/app/[lang]/[slug]/_tools/format";
import { hourlyCost } from "@/app/[lang]/[slug]/_tools/hourly-cost";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function HourlyCost({ dict, currency }: CalculatorProps) {
  const { values, set, num } = useNumbers({
    monthly: "12000",
    charges: "80",
    hours: "120",
  });

  const money = (value: number) => formatMoney(value, dict.htmlLang, currency);
  const perHour = hourlyCost(num("monthly"), num("charges"), num("hours"));

  return (
    <CalculatorShell
      copy={dict.tools.items["hourly-cost"]}
      values={values}
      onChange={set}
      results={{
        hour: money(perHour),
        day: money(perHour * 6),
        month: money(num("monthly") * (1 + num("charges") / 100)),
      }}
    />
  );
}
