"use client";

import { useId, useState } from "react";
import {
  contrast,
  parseColor,
  toHex,
  toHsl,
  toRgb,
} from "@/app/[lang]/[slug]/_tools/color";
import { CopyRow, Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const white = { r: 255, g: 255, b: 255, a: 1 };
const black = { r: 0, g: 0, b: 0, a: 1 };

export default function Color({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [input, setInput] = useState("#0B63C6");
  const color = parseColor(input);
  const ratio = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-text`} className="field-label mb-2.5">
              {t("input")}
            </label>
            <input
              id={`${id}-text`}
              type="text"
              autoComplete="off"
              spellCheck={false}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-describedby={`${id}-hint`}
              className="input text-[16px]"
            />
            <p id={`${id}-hint`} className="mt-2 text-xs text-ink-faint">
              {t("inputHint")}
            </p>
          </div>
          <div>
            <label htmlFor={`${id}-pick`} className="field-label mb-2.5">
              {t("picker")}
            </label>
            <input
              id={`${id}-pick`}
              type="color"
              value={color ? toHex({ ...color, a: 1 }).toLowerCase() : "#000000"}
              onChange={(event) => setInput(event.target.value.toUpperCase())}
              className="h-14 w-full cursor-pointer rounded-[2px] border border-line bg-canvas p-1"
            />
          </div>
        </>
      }
      output={
        color ? (
          <>
            <div
              aria-hidden
              className="h-24 rounded-[2px] border border-line"
              style={{ backgroundColor: toRgb(color) }}
            />
            <dl className="flex flex-col gap-4">
              <CopyRow label="HEX" value={toHex(color)} shared={shared} />
              <CopyRow label="RGB" value={toRgb(color)} shared={shared} />
              <CopyRow label="HSL" value={toHsl(color)} shared={shared} />
            </dl>
            <dl className="grid grid-cols-2 gap-px border border-line bg-line">
              {[
                { key: "onWhite", against: white },
                { key: "onBlack", against: black },
              ].map(({ key, against }) => {
                const value = contrast({ ...color, a: 1 }, against);
                return (
                  <div key={key} className="flex flex-col gap-2 bg-canvas p-4">
                    <dt className="field-label">{t(key)}</dt>
                    <dd className="font-serif text-2xl tabular-nums leading-none text-ink">
                      {ratio.format(value)}:1
                    </dd>
                    <dd className="text-xs text-ink-muted">
                      {value >= 4.5 ? t("passes") : value >= 3 ? t("large") : t("fails")}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </>
        ) : (
          <Problem>{t("invalid")}</Problem>
        )
      }
    />
  );
}
