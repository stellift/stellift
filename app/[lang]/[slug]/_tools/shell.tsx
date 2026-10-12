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
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-2">
      <form className="cell flex flex-col gap-5 p-6" onSubmit={(e) => e.preventDefault()}>
        {copy.fields.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={`${fieldId}-${field.key}`}
              className="field-label mb-2 block uppercase"
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
              <p className="mt-1.5 text-xs text-ink-muted">{field.hint}</p>
            ) : null}
          </div>
        ))}
      </form>

      <dl className="cell flex flex-col justify-center gap-4 p-6">
        {copy.results.map((result) => (
          <div key={result.key} className="flex flex-wrap items-baseline gap-x-4">
            <dt className="field-label min-w-[12rem] flex-1 uppercase">
              {result.label}
            </dt>
            <dd aria-live="polite" className="font-serif text-2xl tabular-nums text-ink">
              {results[result.key]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
