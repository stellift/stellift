"use client";

import { useDeferredValue, useId, useState } from "react";
import { csvToJson, detectDelimiter, jsonToCsv, type Delimiter } from "@/app/[lang]/[slug]/_tools/csv";
import { Block, Choice, OutputHeader, Panels, Problem, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "toJson" | "toCsv";
type DelimiterChoice = "auto" | "comma" | "semicolon" | "tab";

const delimiters: Record<Exclude<DelimiterChoice, "auto">, Delimiter> = {
  comma: ",",
  semicolon: ";",
  tab: "\t",
};

function convert(text: string, mode: Mode, choice: DelimiterChoice) {
  if (text.trim() === "") return { ok: true as const, text: "" };
  try {
    if (mode === "toJson") {
      const delimiter = choice === "auto" ? detectDelimiter(text) : delimiters[choice];
      return { ok: true as const, text: JSON.stringify(csvToJson(text, delimiter), null, 2) };
    }
    return { ok: true as const, text: jsonToCsv(text, choice === "auto" ? "," : delimiters[choice]) };
  } catch {
    return { ok: false as const, text: "" };
  }
}

export default function Csv({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("");
  const [mode, setMode] = useState<Mode>("toJson");
  const [choice, setChoice] = useState<DelimiterChoice>("auto");
  const deferred = useDeferredValue(text);
  const result = convert(deferred, mode, choice);
  const modes = [
    { value: "toJson", label: t("toJson") },
    { value: "toCsv", label: t("toCsv") },
  ] as const;
  const options = (["auto", "comma", "semicolon", "tab"] as const)
    .filter((value) => mode === "toJson" || value !== "auto")
    .map((value) => ({ value, label: t(value) }));

  return (
    <Panels
      controls={
        <>
          <Choice
            label={t("mode")}
            options={modes}
            value={mode}
            onChange={(next) => {
              setMode(next);
              setChoice(next === "toJson" ? "auto" : "comma");
            }}
          />
          <Choice label={t("delimiter")} options={options} value={choice} onChange={setChoice} />
          <TextInput
            id={`${id}-input`}
            label={mode === "toJson" ? "CSV" : "JSON"}
            value={text}
            onChange={setText}
            rows={12}
          />
        </>
      }
      output={
        result.ok ? (
          <>
            <OutputHeader id={id} label={mode === "toJson" ? "JSON" : "CSV"} value={result.text} shared={shared} />
            <Block labelledBy={id}>{result.text}</Block>
          </>
        ) : (
          <Problem>{t("invalid")}</Problem>
        )
      }
    />
  );
}
