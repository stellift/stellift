"use client";

import { useId, useState } from "react";
import { amountInWords } from "@/app/[lang]/[slug]/_tools/words";
import { Choice, OutputHeader, Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "money" | "number";

export default function Words({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const language = locale.startsWith("pt") ? "pt-BR" : "en";
  const [input, setInput] = useState(language === "pt-BR" ? "1.250,75" : "1,250.75");
  const [mode, setMode] = useState<Mode>("money");
  const [capital, setCapital] = useState(false);
  const words = input.trim() === "" ? "" : amountInWords(input, language, mode === "money");
  const shown = words && capital ? words.charAt(0).toUpperCase() + words.slice(1) : words;
  const modes = [
    { value: "money", label: t("money") },
    { value: "number", label: t("number") },
  ] as const;

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-input`} className="field-label mb-2.5">
              {t("input")}
            </label>
            <input
              id={`${id}-input`}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-describedby={`${id}-hint`}
              className="input font-mono text-[18px]"
            />
            <p id={`${id}-hint`} className="mt-2 text-xs text-ink-faint">
              {t("inputHint")}
            </p>
          </div>
          <Choice label={t("mode")} options={modes} value={mode} onChange={setMode} />
          <label className="flex cursor-pointer items-center gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={capital}
              onChange={(event) => setCapital(event.target.checked)}
              className="size-4 shrink-0 accent-(--color-accent)"
            />
            {t("capital")}
          </label>
        </>
      }
      output={
        words === null ? (
          <Problem>{t("invalid")}</Problem>
        ) : (
          <>
            <OutputHeader id={id} label={t("result")} value={shown ?? ""} shared={shared} />
            <p aria-labelledby={id} aria-live="polite" className="font-serif text-2xl leading-snug text-ink sm:text-[1.75rem]">
              {shown || " "}
            </p>
          </>
        )
      }
    />
  );
}
