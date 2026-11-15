"use client";

import { useEffect, useId, useState } from "react";
import {
  characterSets,
  generatePassword,
  type CharacterSet,
} from "@/app/[lang]/[slug]/_tools/password";
import { Big, Check, OutputHeader, Panels, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const allSets = Object.keys(characterSets) as CharacterSet[];

export default function Password({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [length, setLength] = useState(20);
  const [sets, setSets] = useState<CharacterSet[]>(allSets);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setPassword(generatePassword(20, allSets)));
    return () => cancelAnimationFrame(frame);
  }, []);

  function changeLength(next: number) {
    setLength(next);
    setPassword(generatePassword(next, sets));
  }

  function toggle(set: CharacterSet, on: boolean) {
    const next = allSets.filter((item) => (item === set ? on : sets.includes(item)));
    setSets(next);
    setPassword(generatePassword(length, next));
  }

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-length`} className="field-label mb-2.5">
              {t("length")}: <span className="tabular-nums text-ink">{length}</span>
            </label>
            <input
              id={`${id}-length`}
              type="range"
              min={6}
              max={64}
              value={length}
              onChange={(event) => changeLength(Number(event.target.value))}
              className="w-full accent-(--color-accent)"
            />
          </div>
          <fieldset className="flex flex-col gap-3">
            <legend className="sr-only">{t("sets")}</legend>
            {allSets.map((set) => (
              <Check
                key={set}
                label={t(set)}
                checked={sets.includes(set)}
                onChange={(on) => toggle(set, on)}
              />
            ))}
          </fieldset>
        </>
      }
      output={
        <>
          <OutputHeader id={id} label={t("result")} value={password} shared={shared} />
          {sets.length === 0 ? (
            <p className="text-sm text-accent">{t("pickOne")}</p>
          ) : (
            <Big labelledBy={id}>{password || " "}</Big>
          )}
          <div>
            <button
              type="button"
              disabled={sets.length === 0}
              onClick={() => setPassword(generatePassword(length, sets))}
              className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("generate")}
            </button>
          </div>
        </>
      }
    />
  );
}
