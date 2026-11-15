"use client";

import { useEffect, useId, useState } from "react";
import { formatCnpj, generateCnpj, isValidCnpj } from "@/app/[lang]/[slug]/_tools/cnpj";
import { Big, Check, OutputHeader, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import { Validator } from "@/app/[lang]/[slug]/_tools/validator";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Cnpj({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [raw, setRaw] = useState("");
  const [punctuation, setPunctuation] = useState(true);
  const [alphanumeric, setAlphanumeric] = useState(false);
  const shown = punctuation ? formatCnpj(raw) : raw;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setRaw(generateCnpj(false)));
    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleAlphanumeric(next: boolean) {
    setAlphanumeric(next);
    setRaw(generateCnpj(next));
  }

  return (
    <Panels
      controls={
        <>
          <OutputHeader id={id} label={t("generated")} value={shown} shared={shared} />
          <Big labelledBy={id}>{shown || " "}</Big>
          <div className="flex flex-col gap-3">
            <Check label={t("punctuation")} checked={punctuation} onChange={setPunctuation} />
            <Check label={t("alphanumeric")} checked={alphanumeric} onChange={toggleAlphanumeric} />
          </div>
          <div>
            <button
              type="button"
              onClick={() => setRaw(generateCnpj(alphanumeric))}
              className="btn btn-primary"
            >
              {t("generate")}
            </button>
          </div>
        </>
      }
      output={<Validator t={t} validate={isValidCnpj} uppercase />}
    />
  );
}
