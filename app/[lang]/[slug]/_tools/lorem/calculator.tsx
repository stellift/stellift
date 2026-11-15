"use client";

import { useEffect, useId, useState } from "react";
import { generateLorem } from "@/app/[lang]/[slug]/_tools/lorem";
import {
  Block,
  Check,
  Choice,
  OutputHeader,
  Panels,
  labelsOf,
} from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const counts = [
  { value: "1", label: "1" },
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
] as const;

type Count = (typeof counts)[number]["value"];

export default function Lorem({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [count, setCount] = useState<Count>("3");
  const [classic, setClassic] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setText(generateLorem(3, true)));
    return () => cancelAnimationFrame(frame);
  }, []);

  function changeCount(next: Count) {
    setCount(next);
    setText(generateLorem(Number(next), classic));
  }

  function changeClassic(next: boolean) {
    setClassic(next);
    setText(generateLorem(Number(count), next));
  }

  return (
    <Panels
      controls={
        <>
          <Choice label={t("paragraphs")} options={counts} value={count} onChange={changeCount} />
          <Check label={t("classic")} checked={classic} onChange={changeClassic} />
          <div>
            <button
              type="button"
              onClick={() => setText(generateLorem(Number(count), classic))}
              className="btn btn-primary"
            >
              {t("generate")}
            </button>
          </div>
        </>
      }
      output={
        <>
          <OutputHeader id={id} label={t("result")} value={text} shared={shared} />
          <Block labelledBy={id} prose>
            {text}
          </Block>
        </>
      }
    />
  );
}
