"use client";

import { useId, useState } from "react";
import { formatJson } from "@/app/[lang]/[slug]/_tools/json";
import { Block, Choice, OutputHeader, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "2" | "4" | "min";

export default function Json({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("2");
  const result =
    input.trim() === ""
      ? { ok: true as const, text: "" }
      : formatJson(input, mode === "min" ? null : Number(mode));
  const modes = [
    { value: "2", label: t("indent2") },
    { value: "4", label: t("indent4") },
    { value: "min", label: t("minify") },
  ] as const;

  return (
    <Panels
      controls={
        <>
          <Choice label={t("mode")} options={modes} value={mode} onChange={setMode} />
          <div>
            <label htmlFor={`${id}-input`} className="field-label mb-2.5">
              {t("input")}
            </label>
            <textarea
              id={`${id}-input`}
              rows={12}
              spellCheck={false}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="input resize-y font-mono text-[14px]"
            />
          </div>
        </>
      }
      output={
        <>
          <OutputHeader
            id={id}
            label={t("result")}
            value={result.ok ? result.text : ""}
            shared={shared}
          />
          {result.ok ? (
            <Block labelledBy={id}>{result.text}</Block>
          ) : (
            <p role="alert" className="text-sm leading-relaxed text-accent">
              {t("invalid")} <span className="font-mono">{result.error}</span>
            </p>
          )}
        </>
      }
    />
  );
}
