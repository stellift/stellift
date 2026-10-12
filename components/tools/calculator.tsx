"use client";

import { useId, useState } from "react";
import {
  downtimeMinutes,
  formatDuration,
  formatMoney,
  formatNumber,
  hourlyCost,
  pert,
} from "@/lib/tools/math";
import type { ToolId } from "@/lib/tools/config";
import type { Dictionary } from "@/lib/i18n/types";

const defaults: Record<ToolId, Record<string, string>> = {
  sla: { uptime: "99.9" },
  "downtime-cost": { revenue: "250000", openHours: "720", minutes: "45" },
  "hourly-cost": { monthly: "12000", charges: "80", hours: "120" },
  "team-cost": { people: "3", cost: "180", hours: "30", weeks: "12" },
  estimate: { optimistic: "5", likely: "8", pessimistic: "20" },
  automation: { hours: "40", cost: "150", reduction: "80" },
};

export default function Calculator({
  id,
  dict,
  currency,
}: {
  id: ToolId;
  dict: Dictionary;
  currency: string;
}) {
  const copy = dict.tools.items[id];
  const fieldId = useId();
  const [values, setValues] = useState<Record<string, string>>(defaults[id]);

  const num = (key: string) => {
    const parsed = Number.parseFloat((values[key] ?? "").replace(",", "."));
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const results = compute(id, num, dict, currency);

  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-2">
      <form className="cell flex flex-col gap-5 p-6" onSubmit={(e) => e.preventDefault()}>
        {copy.fields.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={`${fieldId}-${field.key}`}
              className="field-label mb-2 block uppercase"
            >
              {field.label}
            </label>
            <input
              id={`${fieldId}-${field.key}`}
              name={field.key}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={values[field.key] ?? ""}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
              }
              className="input text-[16px]"
            />
            {field.hint ? (
              <p className="mt-1.5 text-xs text-ink-muted">{field.hint}</p>
            ) : null}
          </div>
        ))}
      </form>

      <dl className="cell flex flex-col justify-center gap-4 p-6">
        {copy.results.map((result) => (
          <div key={result.key} className="flex flex-wrap items-baseline gap-x-4">
            <dt className="field-label min-w-[12rem] flex-1 uppercase">
              {result.label}
            </dt>
            <dd
              aria-live="polite"
              className="font-serif text-2xl text-ink tabular-nums"
            >
              {results[result.key]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function compute(
  id: ToolId,
  num: (key: string) => number,
  dict: Dictionary,
  currency: string,
): Record<string, string> {
  const locale = dict.htmlLang;
  const units = dict.tools.units;
  const duration = (minutes: number) => formatDuration(minutes, units);
  const money = (value: number) => formatMoney(value, locale, currency);

  if (id === "sla") {
    const uptime = num("uptime");
    return {
      day: duration(downtimeMinutes(uptime, 1)),
      week: duration(downtimeMinutes(uptime, 7)),
      month: duration(downtimeMinutes(uptime, 30)),
      year: duration(downtimeMinutes(uptime, 365)),
    };
  }

  if (id === "downtime-cost") {
    const perHour = num("openHours") > 0 ? num("revenue") / num("openHours") : 0;
    return {
      minute: money(perHour / 60),
      hour: money(perHour),
      total: money((perHour / 60) * num("minutes")),
    };
  }

  if (id === "team-cost") {
    const week = num("people") * num("cost") * num("hours");
    const total = week * num("weeks");
    return {
      total: money(total),
      week: money(week),
      person: money(num("people") > 0 ? total / num("people") : 0),
    };
  }

  if (id === "estimate") {
    const { expected, deviation } = pert(
      num("optimistic"),
      num("likely"),
      num("pessimistic"),
    );
    const span = (factor: number) =>
      `${formatNumber(Math.max(expected - factor * deviation, 0), locale)} ${dict.tools.rangeJoin} ${formatNumber(expected + factor * deviation, locale)}`;
    return {
      expected: formatNumber(expected, locale),
      range: span(1),
      safe: span(2),
    };
  }

  if (id === "hourly-cost") {
    const perHour = hourlyCost(num("monthly"), num("charges"), num("hours"));
    return {
      hour: money(perHour),
      day: money(perHour * 6),
      month: money(num("monthly") * (1 + num("charges") / 100)),
    };
  }

  const monthly = num("hours") * num("cost");
  const saved = monthly * (num("reduction") / 100);
  return {
    month: money(monthly),
    saveMonth: money(saved),
    saveYear: money(saved * 12),
  };
}
