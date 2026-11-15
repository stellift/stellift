"use client";

import { CalculatorShell, useNumbers } from "@/app/[lang]/[slug]/_tools/shell";
import { formatMoney } from "@/app/[lang]/[slug]/_tools/format";
import { revenuePerHour } from "@/app/[lang]/[slug]/_tools/downtime-cost";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function DowntimeCost({ copy, locale, currency }: CalculatorProps) {
  const { values, set, num } = useNumbers({
    revenue: "250000",
    openHours: "720",
    minutes: "45",
  });

  const money = (value: number) => formatMoney(value, locale, currency);
  const perHour = revenuePerHour(num("revenue"), num("openHours"));

  return (
    <CalculatorShell
      copy={copy}
      values={values}
      onChange={set}
      results={{
        minute: money(perHour / 60),
        hour: money(perHour),
        total: money((perHour / 60) * num("minutes")),
      }}
    />
  );
}
