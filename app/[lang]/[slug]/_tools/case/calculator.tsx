"use client";

import { useId, useState } from "react";
import { caseIds, convertCase } from "@/app/[lang]/[slug]/_tools/case";
import { CopyRow, Panels, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

export default function Case({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("");

  return (
    <Panels
      controls={<TextInput id={id} label={t("input")} value={text} onChange={setText} rows={10} mono={false} />}
      output={
        <dl className="flex flex-col gap-4">
          {caseIds.map((caseId) => (
            <CopyRow
              key={caseId}
              label={t(caseId)}
              value={convertCase(text, caseId, locale)}
              shared={shared}
              literal
            />
          ))}
        </dl>
      }
    />
  );
}
