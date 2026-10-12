"use client";

import { CalculatorShell, useNumbers } from "@/app/[lang]/[slug]/_tools/shell";
import { formatMoney } from "@/app/[lang]/[slug]/_tools/format";
import { monthlySaving } from "@/app/[lang]/[slug]/_tools/automation";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Automation({ dict, currency }: CalculatorProps) {
  const { values, set, num } = useNumbers({
    hours: "40",
    cost: "150",
    reduction: "80",
  });

  const money = (value: number) => formatMoney(value, dict.htmlLang, currency);
  const monthly = num("hours") * num("cost");
  const saved = monthlySaving(num("hours"), num("cost"), num("reduction"));

  return (
    <CalculatorShell
      copy={dict.tools.items.automation}
      values={values}
      onChange={set}
      results={{
        month: money(monthly),
        saveMonth: money(saved),
        saveYear: money(saved * 12),
      }}
    />
  );
}
