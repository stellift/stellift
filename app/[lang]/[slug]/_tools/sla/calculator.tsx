"use client";

import { CalculatorShell, useNumbers } from "@/app/[lang]/[slug]/_tools/shell";
import { formatDuration } from "@/app/[lang]/[slug]/_tools/format";
import { downtimeMinutes } from "@/app/[lang]/[slug]/_tools/sla";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Sla({ dict }: CalculatorProps) {
  const { values, set, num } = useNumbers({ uptime: "99.9" });
  const window = (days: number) =>
    formatDuration(downtimeMinutes(num("uptime"), days), dict.tools.units);

  return (
    <CalculatorShell
      copy={dict.tools.items.sla}
      values={values}
      onChange={set}
      results={{
        day: window(1),
        week: window(7),
        month: window(30),
        year: window(365),
      }}
    />
  );
}
