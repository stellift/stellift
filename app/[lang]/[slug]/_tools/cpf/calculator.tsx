"use client";

import { useEffect, useId, useState } from "react";
import { formatCpf, generateCpf, isValidCpf } from "@/app/[lang]/[slug]/_tools/cpf";
import { Big, Check, OutputHeader, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import { Validator } from "@/app/[lang]/[slug]/_tools/validator";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Cpf({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [digits, setDigits] = useState("");
  const [punctuation, setPunctuation] = useState(true);
  const shown = punctuation ? formatCpf(digits) : digits;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setDigits(generateCpf()));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Panels
      controls={
        <>
          <OutputHeader id={id} label={t("generated")} value={shown} shared={shared} />
          <Big labelledBy={id}>{shown || " "}</Big>
          <Check label={t("punctuation")} checked={punctuation} onChange={setPunctuation} />
          <div>
            <button type="button" onClick={() => setDigits(generateCpf())} className="btn btn-primary">
              {t("generate")}
            </button>
          </div>
        </>
      }
      output={<Validator t={t} validate={isValidCpf} />}
    />
  );
}
