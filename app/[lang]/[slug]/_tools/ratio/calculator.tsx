"use client";

import { useId, useState } from "react";
import { ruleOfThree } from "@/app/[lang]/[slug]/_tools/ratio";
import { NumberField, toNumber } from "@/app/[lang]/[slug]/_tools/number-input";
import { Choice, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Kind = "direct" | "inverse";

export default function Ratio({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [kind, setKind] = useState<Kind>("direct");
  const [a, setA] = useState("2");
  const [b, setB] = useState("10");
  const [c, setC] = useState("5");
  const [x, y, z] = [toNumber(a), toNumber(b), toNumber(c)];
  const result = x === null || y === null || z === null ? null : ruleOfThree(x, y, z, kind === "inverse");
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 4 });
  const kinds = [
    { value: "direct", label: t("direct") },
    { value: "inverse", label: t("inverse") },
  ] as const;

  return (
    <Panels
      controls={
        <>
          <Choice label={t("kind")} options={kinds} value={kind} onChange={setKind} />
          <div className="grid grid-cols-2 gap-4">
            <NumberField id={`${id}-a`} label="A" value={a} onChange={setA} />
            <NumberField id={`${id}-b`} label="B" value={b} onChange={setB} />
            <NumberField id={`${id}-c`} label="C" value={c} onChange={setC} />
            <div>
              <span className="field-label mb-2.5">X</span>
              <output
                aria-live="polite"
                className="flex h-[46px] items-center border border-line-strong px-3.5 font-mono text-[16px] text-ink"
              >
                {result === null ? "?" : number.format(result)}
              </output>
            </div>
          </div>
          <p className="text-sm text-ink-muted">{kind === "direct" ? t("readDirect") : t("readInverse")}</p>
        </>
      }
      output={
        <>
          <span className="field-label">X</span>
          <p className="font-serif text-5xl tabular-nums leading-none text-ink">
            {result === null ? "–" : number.format(result)}
          </p>
          <p className="font-mono text-sm text-ink-muted">
            {result === null
              ? ""
              : kind === "direct"
                ? `X = (B × C) ÷ A = (${b} × ${c}) ÷ ${a}`
                : `X = (A × B) ÷ C = (${a} × ${b}) ÷ ${c}`}
          </p>
        </>
      }
    />
  );
}
