"use client";

import { useDeferredValue, useId, useState } from "react";
import { processLines, type LineOptions, type Order } from "@/app/[lang]/[slug]/_tools/lines";
import { Block, Check, Choice, OutputHeader, Panels, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const toggles = ["trim", "dropEmpty", "dedupe", "ignoreCase"] as const;

export default function Lines({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("");
  const [options, setOptions] = useState<LineOptions>({
    trim: true,
    dropEmpty: true,
    dedupe: true,
    ignoreCase: false,
    order: "keep",
  });
  const deferred = useDeferredValue(text);
  const lines = processLines(deferred, options, locale);
  const before = deferred === "" ? 0 : deferred.split(/\r\n|\r|\n/).length;
  const output = lines.join("\n");
  const number = new Intl.NumberFormat(locale);
  const orders = (["keep", "asc", "desc", "reverse"] as const).map((value) => ({ value, label: t(value) }));

  return (
    <Panels
      controls={
        <>
          <TextInput id={`${id}-input`} label={t("input")} value={text} onChange={setText} rows={10} mono={false} />
          <div className="flex flex-col gap-3">
            {toggles.map((key) => (
              <Check
                key={key}
                label={t(key)}
                checked={options[key]}
                onChange={(on) => setOptions((prev) => ({ ...prev, [key]: on }))}
              />
            ))}
          </div>
          <Choice<Order>
            label={t("order")}
            options={orders}
            value={options.order}
            onChange={(order) => setOptions((prev) => ({ ...prev, order }))}
          />
        </>
      }
      output={
        <>
          <p aria-live="polite" className="text-sm text-ink-muted">
            {t("count")
              .replace("{before}", number.format(before))
              .replace("{after}", number.format(lines.length))}
          </p>
          <OutputHeader id={id} label={t("result")} value={output} shared={shared} />
          <Block labelledBy={id} prose>
            {output}
          </Block>
        </>
      }
    />
  );
}
