"use client";

import { useId, useState } from "react";
import { decodeEntities, encodeEntities } from "@/app/[lang]/[slug]/_tools/entities";
import { Block, Check, Choice, OutputHeader, Panels, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "encode" | "decode";

export default function Entities({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("");
  const [mode, setMode] = useState<Mode>("encode");
  const [nonAscii, setNonAscii] = useState(false);
  const result = text === "" ? "" : mode === "encode" ? encodeEntities(text, nonAscii) : decodeEntities(text);
  const modes = [
    { value: "encode", label: t("encode") },
    { value: "decode", label: t("decode") },
  ] as const;

  return (
    <Panels
      controls={
        <>
          <Choice label={t("mode")} options={modes} value={mode} onChange={setMode} />
          <TextInput id={`${id}-input`} label={t("input")} value={text} onChange={setText} />
          {mode === "encode" ? <Check label={t("nonAscii")} checked={nonAscii} onChange={setNonAscii} /> : null}
        </>
      }
      output={
        <>
          <OutputHeader id={id} label={t("result")} value={result} shared={shared} />
          <Block labelledBy={id}>{result}</Block>
        </>
      }
    />
  );
}
