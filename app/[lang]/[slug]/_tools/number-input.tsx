"use client";

export function toNumber(text: string) {
  const clean = text.trim().replace(/\s/g, "");
  if (clean === "") return null;
  const normalized = /,\d*$/.test(clean) ? clean.replace(/\./g, "").replace(",", ".") : clean;
  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}

export function NumberField({
  id,
  label,
  value,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label mb-2.5">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className="input text-[16px]"
      />
      {hint ? (
        <p id={`${id}-hint`} className="mt-2 text-xs text-ink-faint">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
