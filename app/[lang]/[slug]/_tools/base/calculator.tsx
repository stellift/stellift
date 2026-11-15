"use client";

import { useId, useState } from "react";
import { bases, formatInBase, parseInBase, type Base } from "@/app/[lang]/[slug]/_tools/base";
import { CopyButton, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function NumberBase({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [source, setSource] = useState<Base>(10);
  const [raw, setRaw] = useState("255");
  const value = raw.trim() === "" ? null : parseInBase(raw, source);
  const invalid = raw.trim() !== "" && value === null;

  return (
    <div className="grid-ruled sm:grid-cols-2">
      {bases.map((base) => {
        const shown = base === source ? raw : value === null ? "" : formatInBase(value, base);
        return (
          <div key={base} className="cell flex flex-col gap-3 p-7 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <label htmlFor={`${id}-${base}`} className="field-label">
                {t(`b${base}`)}
              </label>
              <CopyButton value={invalid ? "" : shown} shared={shared} />
            </div>
            <input
              id={`${id}-${base}`}
              type="text"
              autoComplete="off"
              spellCheck={false}
              value={shown}
              aria-invalid={base === source && invalid}
              aria-describedby={base === source && invalid ? `${id}-error` : undefined}
              onChange={(event) => {
                setSource(base);
                setRaw(event.target.value);
              }}
              className="input font-mono text-[16px]"
            />
            {base === source && invalid ? (
              <p id={`${id}-error`} className="text-xs text-accent">
                {t("invalid")}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
