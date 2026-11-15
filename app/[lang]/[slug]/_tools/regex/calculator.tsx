"use client";

import { useDeferredValue, useId, useState } from "react";
import { runRegex, segments } from "@/app/[lang]/[slug]/_tools/regex";
import {
  Block,
  Check,
  OutputHeader,
  Panels,
  Problem,
  TextInput,
  labelsOf,
} from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const flagList = ["g", "i", "m", "s", "u"] as const;

export default function Regex({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [replacement, setReplacement] = useState("");
  const deferred = useDeferredValue({ pattern, flags, text, replacement });
  const result =
    deferred.pattern === ""
      ? null
      : runRegex(deferred.pattern, deferred.flags, deferred.text, deferred.replacement);
  const number = new Intl.NumberFormat(locale);

  function toggle(flag: string, on: boolean) {
    setFlags(flagList.filter((item) => (item === flag ? on : flags.includes(item))).join(""));
  }

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-pattern`} className="field-label mb-2.5">
              {t("pattern")}
            </label>
            <div className="flex items-center gap-2 font-mono text-[16px] text-ink-muted">
              <span aria-hidden>/</span>
              <input
                id={`${id}-pattern`}
                type="text"
                autoComplete="off"
                spellCheck={false}
                value={pattern}
                onChange={(event) => setPattern(event.target.value)}
                className="input font-mono text-[16px]"
              />
              <span aria-hidden>/{flags}</span>
            </div>
          </div>
          <fieldset>
            <legend className="field-label mb-3">{t("flags")}</legend>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {flagList.map((flag) => (
                <Check
                  key={flag}
                  label={`${flag}, ${t(flag)}`}
                  checked={flags.includes(flag)}
                  onChange={(on) => toggle(flag, on)}
                />
              ))}
            </div>
          </fieldset>
          <TextInput id={`${id}-text`} label={t("text")} value={text} onChange={setText} mono={false} />
          <div>
            <label htmlFor={`${id}-replace`} className="field-label mb-2.5">
              {t("replacement")}
            </label>
            <input
              id={`${id}-replace`}
              type="text"
              autoComplete="off"
              spellCheck={false}
              value={replacement}
              onChange={(event) => setReplacement(event.target.value)}
              aria-describedby={`${id}-replace-hint`}
              className="input font-mono text-[16px]"
            />
            <p id={`${id}-replace-hint`} className="mt-2 text-xs text-ink-faint">
              {t("replacementHint")}
            </p>
          </div>
        </>
      }
      output={
        result && !result.ok ? (
          <Problem>
            {t("invalid")} <span className="font-mono">{result.error}</span>
          </Problem>
        ) : (
          <>
            <p aria-live="polite" className="font-serif text-3xl leading-none text-ink">
              {number.format(result?.matches.length ?? 0)}{" "}
              <span className="font-sans text-sm text-ink-muted">
                {result?.matches.length === 1 ? t("match") : t("matches")}
                {result?.truncated ? ` (${t("truncated")})` : ""}
              </span>
            </p>
            <span id={`${id}-marked`} className="field-label">
              {t("marked")}
            </span>
            <Block labelledBy={`${id}-marked`} prose>
              {result
                ? segments(deferred.text, result.matches).map((part, i) =>
                    part.match ? (
                      <mark key={i} className="bg-accent-soft text-ink underline decoration-accent">
                        {part.text}
                      </mark>
                    ) : (
                      part.text
                    ),
                  )
                : deferred.text}
            </Block>
            {result && result.matches.some((match) => match.groups.length > 0) ? (
              <ol className="flex max-h-60 flex-col gap-2 overflow-auto font-mono text-[13px] text-ink">
                {result.matches.slice(0, 50).map((match, i) => (
                  <li key={i} className="break-all">
                    <span className="text-ink-faint">{i + 1}.</span> {match.text}
                    {match.groups.map((group, g) => (
                      <span key={g} className="ml-3 text-ink-muted">
                        ${g + 1}={group ?? "∅"}
                      </span>
                    ))}
                  </li>
                ))}
              </ol>
            ) : null}
            {replacement !== "" && result ? (
              <>
                <OutputHeader
                  id={`${id}-replaced`}
                  label={t("replaced")}
                  value={result.replaced}
                  shared={shared}
                />
                <Block labelledBy={`${id}-replaced`} prose>
                  {result.replaced}
                </Block>
              </>
            ) : null}
          </>
        )
      }
    />
  );
}
