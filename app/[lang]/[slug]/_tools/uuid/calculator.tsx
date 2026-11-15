"use client";

import { useEffect, useId, useState } from "react";
import { uuidV4, uuidV7 } from "@/app/[lang]/[slug]/_tools/uuid";
import { Block, Choice, OutputHeader, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Version = "v4" | "v7";

const versions = [
  { value: "v4", label: "v4" },
  { value: "v7", label: "v7" },
] as const;

const amounts = [
  { value: "1", label: "1" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "50", label: "50" },
] as const;

type Amount = (typeof amounts)[number]["value"];

function make(version: Version, amount: number) {
  return Array.from({ length: amount }, () => (version === "v4" ? uuidV4() : uuidV7())).join("\n");
}

export default function Uuid({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [version, setVersion] = useState<Version>("v4");
  const [amount, setAmount] = useState<Amount>("1");
  const [list, setList] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setList(make("v4", 1)));
    return () => cancelAnimationFrame(frame);
  }, []);

  function changeVersion(next: Version) {
    setVersion(next);
    setList(make(next, Number(amount)));
  }

  function changeAmount(next: Amount) {
    setAmount(next);
    setList(make(version, Number(next)));
  }

  return (
    <Panels
      controls={
        <>
          <Choice label={t("version")} options={versions} value={version} onChange={changeVersion} />
          <Choice label={t("amount")} options={amounts} value={amount} onChange={changeAmount} />
          <div>
            <button
              type="button"
              onClick={() => setList(make(version, Number(amount)))}
              className="btn btn-primary"
            >
              {t("generate")}
            </button>
          </div>
        </>
      }
      output={
        <>
          <OutputHeader id={id} label={t("result")} value={list} shared={shared} />
          <Block labelledBy={id}>{list}</Block>
        </>
      }
    />
  );
}
