"use client";

import { useDeferredValue, useId, useState } from "react";
import { diffLines, maxLines } from "@/app/[lang]/[slug]/_tools/diff";
import { Check, Problem, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const marks = { same: " ", added: "+", removed: "−" } as const;

const tones = {
  same: "text-ink-muted",
  added: "bg-accent-soft text-ink",
  removed: "bg-danger/10 text-ink",
} as const;

export default function Diff({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [ignoreSpace, setIgnoreSpace] = useState(false);
  const deferred = useDeferredValue({ before, after, ignoreSpace });
  const lines = diffLines(deferred.before, deferred.after, deferred.ignoreSpace);
  const number = new Intl.NumberFormat(locale);
  const added = lines?.filter((line) => line.type === "added").length ?? 0;
  const removed = lines?.filter((line) => line.type === "removed").length ?? 0;

  return (
    <div className="grid-ruled">
      <div className="cell grid gap-6 p-7 sm:p-8 lg:grid-cols-2">
        <TextInput id={`${id}-a`} label={t("before")} value={before} onChange={setBefore} rows={10} />
        <TextInput id={`${id}-b`} label={t("after")} value={after} onChange={setAfter} rows={10} />
        <Check label={t("ignoreSpace")} checked={ignoreSpace} onChange={setIgnoreSpace} />
      </div>
      <div className="cell flex min-w-0 flex-col gap-5 p-7 sm:p-8">
        {lines === null ? (
          <Problem>{t("tooLong").replace("{max}", number.format(maxLines))}</Problem>
        ) : (
          <>
            <p aria-live="polite" className="text-sm text-ink-muted">
              <span className="tabular-nums text-ink">+{number.format(added)}</span> {t("added")}
              {", "}
              <span className="tabular-nums text-ink">−{number.format(removed)}</span> {t("removed")}
            </p>
            <span id={`${id}-out`} className="field-label">
              {t("result")}
            </span>
            <pre
              tabIndex={0}
              aria-labelledby={`${id}-out`}
              className="max-h-[32rem] min-h-40 overflow-auto rounded-[2px] border border-line bg-surface py-2 font-mono text-[13px] leading-relaxed"
            >
              {lines.map((line, i) => (
                <div key={i} className={`flex gap-3 px-4 ${tones[line.type]}`}>
                  <span aria-hidden className="w-3 shrink-0 select-none">
                    {marks[line.type]}
                  </span>
                  <span className="sr-only">{line.type === "same" ? "" : t(line.type === "added" ? "lineAdded" : "lineRemoved")}</span>
                  <span className="whitespace-pre-wrap break-all">{line.text || " "}</span>
                </div>
              ))}
            </pre>
          </>
        )}
      </div>
    </div>
  );
}
