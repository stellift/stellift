"use client";

import { useId, useState } from "react";
import { decodeBase64, encodeBase64 } from "@/app/[lang]/[slug]/_tools/base64";
import { Block, Check, Choice, OutputHeader, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "encode" | "decode";

function convert(input: string, mode: Mode, urlSafe: boolean) {
  if (input === "") return { ok: true, text: "" };
  try {
    return { ok: true, text: mode === "encode" ? encodeBase64(input, urlSafe) : decodeBase64(input) };
  } catch {
    return { ok: false, text: "" };
  }
}

export default function Base64({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");
  const [urlSafe, setUrlSafe] = useState(false);
  const result = convert(input, mode, urlSafe);
  const modes = [
    { value: "encode", label: t("encode") },
    { value: "decode", label: t("decode") },
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
              rows={8}
              spellCheck={false}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="input resize-y font-mono text-[15px]"
            />
          </div>
          {mode === "encode" ? (
            <Check label={t("urlSafe")} checked={urlSafe} onChange={setUrlSafe} />
          ) : null}
        </>
      }
      output={
        <>
          <OutputHeader id={id} label={t("result")} value={result.text} shared={shared} />
          {result.ok ? (
            <Block labelledBy={id}>{result.text}</Block>
          ) : (
            <p role="alert" className="text-sm leading-relaxed text-accent">
              {t("invalid")}
            </p>
          )}
        </>
      }
    />
  );
}
