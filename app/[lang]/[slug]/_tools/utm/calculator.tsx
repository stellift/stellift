"use client";

import { useId, useState } from "react";
import { buildUtm, utmKeys, type UtmKey } from "@/app/[lang]/[slug]/_tools/utm";
import { Check, OutputHeader, Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Utm({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [base, setBase] = useState("");
  const [lowercase, setLowercase] = useState(true);
  const [values, setValues] = useState<Record<UtmKey, string>>({
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
  });
  const link = base.trim() ? buildUtm(base, values, lowercase) : null;

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-url`} className="field-label mb-2.5">
              {t("url")}
            </label>
            <input
              id={`${id}-url`}
              type="url"
              autoComplete="off"
              placeholder="https://"
              value={base}
              onChange={(event) => setBase(event.target.value)}
              className="input text-[16px]"
            />
          </div>
          {utmKeys.map((key) => (
            <div key={key}>
              <label htmlFor={`${id}-${key}`} className="field-label mb-2.5">
                utm_{key} {key === "term" || key === "content" ? <span className="normal-case tracking-normal text-ink-faint">({t("optional")})</span> : null}
              </label>
              <input
                id={`${id}-${key}`}
                type="text"
                autoComplete="off"
                value={values[key]}
                placeholder={t(`${key}Placeholder`)}
                onChange={(event) => setValues((prev) => ({ ...prev, [key]: event.target.value }))}
                aria-describedby={`${id}-${key}-hint`}
                className="input text-[16px]"
              />
              <p id={`${id}-${key}-hint`} className="mt-2 text-xs text-ink-faint">
                {t(`${key}Hint`)}
              </p>
            </div>
          ))}
          <Check label={t("lowercase")} checked={lowercase} onChange={setLowercase} />
        </>
      }
      output={
        !base.trim() ? (
          <p className="text-sm text-ink-faint">{t("empty")}</p>
        ) : link ? (
          <>
            <OutputHeader id={id} label={t("result")} value={link} shared={shared} />
            <p aria-labelledby={id} aria-live="polite" className="break-all font-mono text-sm leading-relaxed text-ink">
              {link}
            </p>
          </>
        ) : (
          <Problem>{t("invalid")}</Problem>
        )
      }
    />
  );
}
