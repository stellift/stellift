"use client";

import { useId, useState } from "react";
import { decodeJwt } from "@/app/[lang]/[slug]/_tools/jwt";
import {
  Block,
  OutputHeader,
  Panels,
  Problem,
  TextInput,
  labelsOf,
} from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Jwt({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [token, setToken] = useState("");
  const decoded = token.trim() === "" ? null : decodeJwt(token);
  const header = decoded ? JSON.stringify(decoded.header, null, 2) : "";
  const payload = decoded ? JSON.stringify(decoded.payload, null, 2) : "";
  const format = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "medium" });

  return (
    <Panels
      controls={
        <>
          <TextInput id={`${id}-token`} label={t("input")} value={token} onChange={setToken} rows={10} />
          {decoded && decoded.times.length > 0 ? (
            <dl className="flex flex-col gap-3">
              {decoded.times.map(({ claim, date }) => (
                <div key={claim} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <dt className="field-label">{t(claim)}</dt>
                  <dd className="text-sm tabular-nums text-ink">{format.format(date)}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </>
      }
      output={
        token.trim() !== "" && !decoded ? (
          <Problem>{t("invalid")}</Problem>
        ) : (
          <>
            <OutputHeader id={`${id}-header`} label={t("header")} value={header} shared={shared} />
            <Block labelledBy={`${id}-header`}>{header}</Block>
            <OutputHeader id={`${id}-payload`} label={t("payload")} value={payload} shared={shared} />
            <Block labelledBy={`${id}-payload`}>{payload}</Block>
          </>
        )
      }
    />
  );
}
