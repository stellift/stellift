"use client";

import { useId, useState } from "react";

export function Validator({
  t,
  validate,
  uppercase = false,
}: {
  t: (key: string) => string;
  validate: (input: string) => boolean;
  uppercase?: boolean;
}) {
  const id = useId();
  const [input, setInput] = useState("");
  const filled = input.trim() !== "";
  const valid = filled && validate(input);

  return (
    <>
      <div>
        <label htmlFor={id} className="field-label mb-2.5">
          {t("input")}
        </label>
        <input
          id={id}
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={input}
          onChange={(event) =>
            setInput(uppercase ? event.target.value.toUpperCase() : event.target.value)
          }
          aria-describedby={`${id}-hint ${id}-status`}
          className="input font-mono text-[16px]"
        />
        <p id={`${id}-hint`} className="mt-2 text-xs text-ink-faint">
          {t("inputHint")}
        </p>
      </div>
      <p
        id={`${id}-status`}
        aria-live="polite"
        className={
          filled
            ? `font-serif text-3xl leading-none ${valid ? "text-ink" : "text-accent"}`
            : "text-sm text-ink-faint"
        }
      >
        {filled ? (valid ? t("valid") : t("invalid")) : t("empty")}
      </p>
    </>
  );
}
