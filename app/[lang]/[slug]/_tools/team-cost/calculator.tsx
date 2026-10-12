"use client";

import { CalculatorShell, useNumbers } from "@/app/[lang]/[slug]/_tools/shell";
import { formatMoney } from "@/app/[lang]/[slug]/_tools/format";
import { weeklyCost } from "@/app/[lang]/[slug]/_tools/team-cost";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function TeamCost({ dict, currency }: CalculatorProps) {
  const { values, set, num } = useNumbers({
    people: "3",
    cost: "180",
    hours: "30",
    weeks: "12",
  });

  const money = (value: number) => formatMoney(value, dict.htmlLang, currency);
  const week = weeklyCost(num("people"), num("cost"), num("hours"));
  const total = week * num("weeks");

  return (
    <CalculatorShell
      copy={dict.tools.items["team-cost"]}
      values={values}
      onChange={set}
      results={{
        total: money(total),
        week: money(week),
        person: money(num("people") > 0 ? total / num("people") : 0),
      }}
    />
  );
}
