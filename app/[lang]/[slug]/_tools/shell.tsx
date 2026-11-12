"use client";

import { useId, useState } from "react";
import type { ToolCopy } from "@/lib/i18n/types";

export function useNumbers(initial: Record<string, string>) {
  const [values, setValues] = useState(initial);

  function num(key: string) {
    const parsed = Number.parseFloat((values[key] ?? "").replace(",", "."));
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function set(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  return { values, set, num };
}

export function CalculatorShell({
  copy,
  values,
  onChange,
  results,
}: {
  copy: ToolCopy;
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  results: Record<string, string>;
}) {
  const fieldId = useId();

  return (
    <div className="grid-ruled lg:grid-cols-2">
      <form className="cell flex flex-col justify-center gap-6 p-7 sm:p-8" onSubmit={(e) => e.preventDefault()}>
        {copy.fields.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={`${fieldId}-${field.key}`}
              className="field-label mb-2.5"
            >
              {field.label}
            </label>
            <input
              id={`${fieldId}-${field.key}`}
              name={field.key}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={values[field.key] ?? ""}
              onChange={(e) => onChange(field.key, e.target.value)}
              className="input text-[16px]"
            />
            {field.hint ? (
              <p className="mt-2 text-xs text-ink-faint">{field.hint}</p>
            ) : null}
          </div>
        ))}
      </form>

      <dl className="cell flex flex-col justify-center gap-px bg-line p-0">
        {copy.results.map((result) => (
          <div
            key={result.key}
            className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-2 bg-canvas p-7 sm:p-8"
          >
            <dt className="field-label">{result.label}</dt>
            <dd
              aria-live="polite"
              className="font-serif text-3xl tabular-nums leading-none text-ink sm:text-[2.25rem]"
            >
              {results[result.key]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
