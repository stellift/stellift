"use client";

import { CalculatorShell, useNumbers } from "@/app/[lang]/[slug]/_tools/shell";
import { formatNumber } from "@/app/[lang]/[slug]/_tools/format";
import { pert } from "@/app/[lang]/[slug]/_tools/estimate";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Estimate({ dict }: CalculatorProps) {
  const { values, set, num } = useNumbers({
    optimistic: "5",
    likely: "8",
    pessimistic: "20",
  });

  const { expected, deviation } = pert(
    num("optimistic"),
    num("likely"),
    num("pessimistic"),
  );
  const show = (value: number) => formatNumber(value, dict.htmlLang);
  const span = (factor: number) =>
    `${show(Math.max(expected - factor * deviation, 0))} ${dict.tools.rangeJoin} ${show(expected + factor * deviation)}`;

  return (
    <CalculatorShell
      copy={dict.tools.items.estimate}
      values={values}
      onChange={set}
      results={{ expected: show(expected), range: span(1), safe: span(2) }}
    />
  );
}
