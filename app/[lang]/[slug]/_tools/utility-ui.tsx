"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { ToolCopy } from "@/lib/i18n/types";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export function labelsOf(copy: ToolCopy) {
  return (key: string) => copy.labels?.[key] ?? key;
}

export function Panels({ controls, output }: { controls: ReactNode; output: ReactNode }) {
  return (
    <div className="grid-ruled lg:grid-cols-2">
      <div className="cell flex flex-col gap-6 p-7 sm:p-8">{controls}</div>
      <div className="cell flex min-w-0 flex-col gap-5 p-7 sm:p-8">{output}</div>
    </div>
  );
}

export function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 shrink-0 accent-(--color-accent)"
      />
      {label}
    </label>
  );
}

export function Choice<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div role="group" aria-label={label}>
      <span aria-hidden className="field-label mb-2.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
            className={`btn btn-sm ${option.value === value ? "btn-primary" : "btn-outline"}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function CopyButton({
  value,
  shared,
}: {
  value: string;
  shared: CalculatorProps["shared"];
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      disabled={!value}
      onClick={() => {
        navigator.clipboard.writeText(value).then(
          () => setCopied(true),
          () => setCopied(false),
        );
      }}
      className="btn btn-outline btn-sm disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span aria-live="polite">{copied ? shared.copiedLabel : shared.copyLabel}</span>
    </button>
  );
}

export function OutputHeader({
  label,
  value,
  shared,
  id,
}: {
  label: string;
  value: string;
  shared: CalculatorProps["shared"];
  id?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span id={id} className="field-label">
        {label}
      </span>
      <CopyButton value={value} shared={shared} />
    </div>
  );
}

export function Big({ children, labelledBy }: { children: ReactNode; labelledBy: string }) {
  return (
    <output
      aria-labelledby={labelledBy}
      aria-live="polite"
      className="block break-all text-2xl leading-snug text-ink sm:text-[1.75rem]"
    >
      {children}
    </output>
  );
}

export function Block({
  children,
  labelledBy,
  prose = false,
}: {
  children: ReactNode;
  labelledBy: string;
  prose?: boolean;
}) {
  return (
    <pre
      tabIndex={0}
      aria-labelledby={labelledBy}
      className={`max-h-[28rem] min-h-40 overflow-auto whitespace-pre-wrap ${prose ? "break-words" : "break-all"} rounded-[2px] border border-line bg-surface p-4 leading-relaxed text-ink ${prose ? "text-[15px]" : "font-mono text-[13px]"}`}
    >
      {children}
    </pre>
  );
}

export function CopyRow({
  label,
  value,
  shared,
  literal = false,
  display,
}: {
  label: string;
  value: string;
  shared: CalculatorProps["shared"];
  literal?: boolean;
  display?: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 border-b border-line pb-4 last:border-b-0 last:pb-0">
      <dt className={literal ? "field-label normal-case tracking-normal" : "field-label"}>{label}</dt>
      <dd>
        <CopyButton value={value} shared={shared} />
      </dd>
      <dd className="col-span-2 break-all font-mono text-[13px] leading-relaxed text-ink">
        {(display ?? value) || "\u00a0"}
      </dd>
    </div>
  );
}

export function TextInput({
  id,
  label,
  value,
  onChange,
  rows = 8,
  mono = true,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  mono?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label mb-2.5">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        spellCheck={false}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`input resize-y ${mono ? "font-mono text-[14px]" : "text-[16px] leading-relaxed"}`}
      />
    </div>
  );
}

export function Problem({ children }: { children: ReactNode }) {
  return (
    <p aria-live="polite" className="text-sm leading-relaxed text-accent">
      {children}
    </p>
  );
}
