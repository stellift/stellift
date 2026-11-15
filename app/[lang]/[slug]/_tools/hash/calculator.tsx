"use client";

import { useEffect, useId, useState } from "react";
import { algorithms, hashText } from "@/app/[lang]/[slug]/_tools/hash";
import { Check, CopyRow, Panels, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Hash({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("");
  const [upper, setUpper] = useState(false);
  const [hashes, setHashes] = useState<string[]>([]);

  useEffect(() => {
    let current = true;
    Promise.all(algorithms.map((algorithm) => hashText(text, algorithm))).then((list) => {
      if (current) setHashes(list);
    });
    return () => {
      current = false;
    };
  }, [text]);

  return (
    <Panels
      controls={
        <>
          <TextInput id={id} label={t("input")} value={text} onChange={setText} mono={false} />
          <Check label={t("upper")} checked={upper} onChange={setUpper} />
        </>
      }
      output={
        <dl className="flex flex-col gap-4">
          {algorithms.map((algorithm, i) => (
            <CopyRow
              key={algorithm}
              label={algorithm}
              value={upper ? (hashes[i] ?? "").toUpperCase() : (hashes[i] ?? "")}
              shared={shared}
            />
          ))}
        </dl>
      }
    />
  );
}
