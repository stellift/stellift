"use client";

import { useId, useState } from "react";
import { compound } from "@/app/[lang]/[slug]/_tools/interest";
import { NumberField, toNumber } from "@/app/[lang]/[slug]/_tools/number-input";
import { Choice, Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Period = "month" | "year";

export default function Interest({ copy, locale, currency }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [principal, setPrincipal] = useState("1000");
  const [monthly, setMonthly] = useState("200");
  const [rate, setRate] = useState("1");
  const [rateUnit, setRateUnit] = useState<Period>("month");
  const [time, setTime] = useState("5");
  const [timeUnit, setTimeUnit] = useState<Period>("year");
  const money = new Intl.NumberFormat(locale, { style: "currency", currency });
  const percent = new Intl.NumberFormat(locale, { maximumFractionDigits: 4 });
  const values = [principal, monthly, rate, time].map(toNumber);
  const months = values[3] === null ? 0 : Math.round(timeUnit === "year" ? values[3] * 12 : values[3]);
  const valid = values.every((value) => value !== null && value >= 0) && months > 0 && months <= 1200;
  const result = valid
    ? compound(values[0]!, values[1]!, values[2]!, rateUnit === "year", months)
    : null;
  const units = (["month", "year"] as const).map((value) => ({ value, label: t(value) }));

  return (
    <Panels
      controls={
        <>
          <NumberField id={`${id}-p`} label={t("principal")} value={principal} onChange={setPrincipal} />
          <NumberField id={`${id}-m`} label={t("monthly")} value={monthly} onChange={setMonthly} />
          <div className="grid grid-cols-[1fr_auto] items-end gap-3">
            <NumberField id={`${id}-r`} label={t("rate")} value={rate} onChange={setRate} />
            <Choice label={t("ratePer")} options={units} value={rateUnit} onChange={setRateUnit} />
          </div>
          <div className="grid grid-cols-[1fr_auto] items-end gap-3">
            <NumberField id={`${id}-t`} label={t("time")} value={time} onChange={setTime} />
            <Choice label={t("timeIn")} options={units.map((u) => ({ ...u, label: t(`${u.value}s`) }))} value={timeUnit} onChange={setTimeUnit} />
          </div>
        </>
      }
      output={
        result ? (
          <>
            <div>
              <span className="field-label">{t("final")}</span>
              <p aria-live="polite" className="mt-3 font-serif text-4xl tabular-nums leading-none text-ink sm:text-5xl">
                {money.format(result.balance)}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-px border border-line bg-line">
              {[
                { label: t("invested"), value: money.format(result.invested) },
                { label: t("earned"), value: money.format(result.interest) },
              ].map((row) => (
                <div key={row.label} className="flex flex-col gap-2 bg-canvas p-4">
                  <dt className="field-label">{row.label}</dt>
                  <dd className="font-serif text-xl tabular-nums text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
            {rateUnit === "year" ? (
              <p className="text-xs text-ink-muted">
                {t("equivalent").replace("{rate}", percent.format(result.monthlyRate))}
              </p>
            ) : null}
            <div className="max-h-72 overflow-auto" tabIndex={0} role="region" aria-label={t("table")}>
              <table className="w-full text-left text-sm tabular-nums">
                <thead>
                  <tr className="text-ink-muted">
                    <th className="py-2 font-normal">{t("when")}</th>
                    <th className="py-2 text-right font-normal">{t("invested")}</th>
                    <th className="py-2 text-right font-normal">{t("balance")}</th>
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row) => (
                    <tr key={row.month} className="border-t border-line text-ink">
                      <td className="py-2">
                        {row.month % 12 === 0
                          ? `${t("yearShort")} ${row.month / 12}`
                          : `${t("monthShort")} ${row.month}`}
                      </td>
                      <td className="py-2 text-right">{money.format(row.invested)}</td>
                      <td className="py-2 text-right">{money.format(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <Problem>{t("invalid")}</Problem>
        )
      }
    />
  );
}
