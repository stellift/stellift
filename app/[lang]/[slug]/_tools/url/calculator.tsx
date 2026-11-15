"use client";

import { useId, useState } from "react";
import { decodeUrl, encodeUrl } from "@/app/[lang]/[slug]/_tools/url";
import {
  Block,
  Check,
  Choice,
  OutputHeader,
  Panels,
  Problem,
  TextInput,
  labelsOf,
} from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "encode" | "decode";

export default function Url({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("");
  const [mode, setMode] = useState<Mode>("encode");
  const [whole, setWhole] = useState(false);
  const [plus, setPlus] = useState(true);
  const modes = [
    { value: "encode", label: t("encode") },
    { value: "decode", label: t("decode") },
  ] as const;

  let result = "";
  let failed = false;
  try {
    result = mode === "encode" ? encodeUrl(text, whole) : decodeUrl(text, plus);
  } catch {
    failed = true;
  }

  return (
    <Panels
      controls={
        <>
          <Choice label={t("mode")} options={modes} value={mode} onChange={setMode} />
          <TextInput id={`${id}-input`} label={t("input")} value={text} onChange={setText} />
          {mode === "encode" ? (
            <Check label={t("whole")} checked={whole} onChange={setWhole} />
          ) : (
            <Check label={t("plus")} checked={plus} onChange={setPlus} />
          )}
        </>
      }
      output={
        <>
          <OutputHeader id={id} label={t("result")} value={failed ? "" : result} shared={shared} />
          {failed ? <Problem>{t("invalid")}</Problem> : <Block labelledBy={id}>{result}</Block>}
        </>
      }
    />
  );
}
