"use client";

import { useId, useState } from "react";
import { whatsappLink } from "@/app/[lang]/[slug]/_tools/whatsapp";
import { qrMatrix, qrPath } from "@/app/[lang]/[slug]/_tools/qrcode";

function matrixFor(link: string) {
  try {
    return qrMatrix(link, "M");
  } catch {
    return null;
  }
}
import { OutputHeader, Panels, Problem, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Whatsapp({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [country, setCountry] = useState(locale.startsWith("pt") ? "55" : "1");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const link = whatsappLink(country, phone, message);
  const empty = phone.trim() === "" && message.trim() === "";
  const matrix = link ? matrixFor(link) : null;
  const size = matrix ? matrix.length + 8 : 0;

  return (
    <Panels
      controls={
        <>
          <div className="grid grid-cols-[6rem_1fr] gap-3">
            <div>
              <label htmlFor={`${id}-country`} className="field-label mb-2.5">
                {t("country")}
              </label>
              <input
                id={`${id}-country`}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="input text-[16px]"
              />
            </div>
            <div>
              <label htmlFor={`${id}-phone`} className="field-label mb-2.5">
                {t("phone")}
              </label>
              <input
                id={`${id}-phone`}
                type="tel"
                autoComplete="off"
                value={phone}
                placeholder={t("phonePlaceholder")}
                onChange={(event) => setPhone(event.target.value)}
                className="input text-[16px]"
              />
            </div>
          </div>
          <p className="-mt-3 text-xs text-ink-faint">{t("phoneHint")}</p>
          <TextInput id={`${id}-message`} label={t("message")} value={message} onChange={setMessage} rows={5} mono={false} />
        </>
      }
      output={
        link ? (
          <>
            <OutputHeader id={id} label={t("result")} value={link} shared={shared} />
            <p aria-labelledby={id} className="break-all font-mono text-sm leading-relaxed text-ink">
              {link}
            </p>
            <div>
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                {t("test")}
              </a>
            </div>
            {matrix ? (
              <div className="w-40 border border-line bg-white">
                <svg viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" role="img" aria-label={t("qr")} className="block h-auto w-full">
                  <path d={qrPath(matrix, 4)} fill="#000000" />
                </svg>
              </div>
            ) : null}
          </>
        ) : empty ? (
          <p className="text-sm text-ink-faint">{t("empty")}</p>
        ) : (
          <Problem>{t("invalid")}</Problem>
        )
      }
    />
  );
}
