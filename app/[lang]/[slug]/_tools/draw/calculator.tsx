"use client";

import { useId, useState } from "react";
import { drawNames, drawNumbers } from "@/app/[lang]/[slug]/_tools/draw";
import {
  Check,
  Choice,
  OutputHeader,
  Panels,
  Problem,
  TextInput,
  labelsOf,
} from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "numbers" | "names";

export default function Draw({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [mode, setMode] = useState<Mode>("numbers");
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("60");
  const [count, setCount] = useState("6");
  const [unique, setUnique] = useState(true);
  const [names, setNames] = useState("");
  const [result, setResult] = useState<string[] | null>(null);
  const [problem, setProblem] = useState("");
  const modes = [
    { value: "numbers", label: t("numbers") },
    { value: "names", label: t("names") },
  ] as const;

  function draw() {
    setProblem("");
    const amount = Math.floor(Number(count));
    if (!Number.isFinite(amount) || amount < 1 || amount > 1000) {
      setProblem(t("badCount"));
      return;
    }
    if (mode === "numbers") {
      const low = Number(min);
      const high = Number(max);
      if (!Number.isFinite(low) || !Number.isFinite(high) || Math.abs(high - low) > 4e9) {
        setProblem(t("badRange"));
        return;
      }
      const picked = drawNumbers(low, high, amount, unique);
      if (!picked) {
        setProblem(t("tooMany"));
        return;
      }
      const sorted = unique ? [...picked].sort((a, b) => a - b) : picked;
      setResult(sorted.map((value) => new Intl.NumberFormat(locale).format(value)));
    } else {
      const list = names
        .split(/\r?\n/)
        .map((name) => name.trim())
        .filter(Boolean);
      if (list.length === 0) {
        setProblem(t("noNames"));
        return;
      }
      setResult(drawNames(list, Math.min(amount, list.length)));
    }
  }

  const field = (key: string, value: string, set: (value: string) => void) => (
    <div>
      <label htmlFor={`${id}-${key}`} className="field-label mb-2.5">
        {t(key)}
      </label>
      <input
        id={`${id}-${key}`}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        value={value}
        onChange={(event) => set(event.target.value)}
        className="input text-[16px]"
      />
    </div>
  );

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
              setResult(null);
              setProblem("");
              if (next === "names") setCount("1");
            }}
          />
          {mode === "numbers" ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                {field("min", min, setMin)}
                {field("max", max, setMax)}
              </div>
              {field("count", count, setCount)}
              <Check label={t("unique")} checked={unique} onChange={setUnique} />
            </>
          ) : (
            <>
              <TextInput id={`${id}-names`} label={t("list")} value={names} onChange={setNames} rows={8} mono={false} />
              {field("count", count, setCount)}
            </>
          )}
          <div>
            <button type="button" onClick={draw} className="btn btn-primary">
              {t("draw")}
            </button>
          </div>
        </>
      }
      output={
        problem ? (
          <Problem>{problem}</Problem>
        ) : (
          <>
            <OutputHeader id={id} label={t("result")} value={result ? result.join(mode === "names" ? "\n" : ", ") : ""} shared={shared} />
            <ul aria-labelledby={id} aria-live="polite" className="flex flex-wrap gap-2">
              {(result ?? []).map((value, i) => (
                <li
                  key={i}
                  className="min-w-14 border border-line-strong px-3 py-2 text-center font-serif text-2xl tabular-nums leading-none text-ink"
                >
                  {value}
                </li>
              ))}
            </ul>
            {!result ? <p className="text-sm text-ink-faint">{t("waiting")}</p> : null}
          </>
        )
      }
    />
  );
}
