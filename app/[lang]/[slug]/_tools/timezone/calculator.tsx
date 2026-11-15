"use client";

import { useEffect, useId, useState } from "react";
import { offsetLabel, popularZones, wallTimeToInstant, zoneName } from "@/app/[lang]/[slug]/_tools/timezone";
import { toLocalInput } from "@/app/[lang]/[slug]/_tools/timestamp";
import { Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

function allZones() {
  try {
    return Intl.supportedValuesOf("timeZone");
  } catch {
    return popularZones;
  }
}

export default function TimeZone({ copy, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [value, setValue] = useState("");
  const [zone, setZone] = useState("America/Sao_Paulo");
  const [zones, setZones] = useState<string[]>(popularZones);
  const [targets, setTargets] = useState<string[]>(popularZones);
  const [extra, setExtra] = useState("");
  const instant = value ? wallTimeToInstant(value, zone) : null;
  const name = (z: string) => zoneName(z).split("/").pop() ?? z;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const local = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const list = allZones();
      setZones(list.includes("UTC") ? list : [...list, "UTC"]);
      setZone(local);
      setValue(toLocalInput(new Date()).slice(0, 16));
      setTargets((prev) => (prev.includes(local) ? prev : [local, ...prev]));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const select = (selectId: string, current: string, onChange: (zone: string) => void, placeholder?: string) => (
    <select
      id={selectId}
      value={current}
      onChange={(event) => onChange(event.target.value)}
      className="input text-[16px]"
    >
      {placeholder ? <option value="">{placeholder}</option> : null}
      {zones.map((z) => (
        <option key={z} value={z}>
          {zoneName(z)}
        </option>
      ))}
    </select>
  );

  return (
    <Panels
      controls={
        <>
          <div>
            <label htmlFor={`${id}-when`} className="field-label mb-2.5">
              {t("when")}
            </label>
            <input
              id={`${id}-when`}
              type="datetime-local"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="input text-[16px]"
            />
          </div>
          <div>
            <label htmlFor={`${id}-zone`} className="field-label mb-2.5">
              {t("zone")}
            </label>
            {select(`${id}-zone`, zone, setZone)}
          </div>
          <div>
            <label htmlFor={`${id}-add`} className="field-label mb-2.5">
              {t("add")}
            </label>
            {select(
              `${id}-add`,
              extra,
              (next) => {
                setExtra("");
                if (next && !targets.includes(next)) setTargets((prev) => [next, ...prev]);
              },
              t("addPlaceholder"),
            )}
          </div>
        </>
      }
      output={
        instant ? (
          <ul aria-live="polite" className="flex flex-col">
            {targets.map((target) => (
              <li
                key={target}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-3 first:pt-0 last:border-b-0"
              >
                <span className="text-sm text-ink">
                  {name(target)}
                  <span className="ml-2 font-mono text-[11px] text-ink-faint">{offsetLabel(instant, target)}</span>
                </span>
                <span className="text-right text-sm tabular-nums text-ink">
                  {new Intl.DateTimeFormat(locale, {
                    timeZone: target,
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(instant)}
                </span>
              </li>
            ))}
          </ul>
        ) : value ? (
          <Problem>{t("invalid")}</Problem>
        ) : null
      }
    />
  );
}
