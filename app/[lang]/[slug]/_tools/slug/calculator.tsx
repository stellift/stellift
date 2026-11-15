"use client";

import { useId, useState } from "react";
import { slugify } from "@/app/[lang]/[slug]/_tools/slug";
import { Big, Choice, OutputHeader, Panels, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const separators = [
  { value: "-", label: "hífen -" },
  { value: "_", label: "underline _" },
] as const;

export default function Slug({ copy, shared }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState(t("example"));
  const [separator, setSeparator] = useState<"-" | "_">("-");
  const slug = slugify(text, separator);
  const options = separators.map((option) => ({ ...option, label: t(option.value === "-" ? "hyphen" : "underscore") }));

  return (
    <Panels
      controls={
        <>
          <TextInput id={`${id}-input`} label={t("input")} value={text} onChange={setText} rows={3} mono={false} />
          <Choice label={t("separator")} options={options} value={separator} onChange={setSeparator} />
        </>
      }
      output={
        <>
          <OutputHeader id={id} label={t("result")} value={slug} shared={shared} />
          <Big labelledBy={id}>{slug || " "}</Big>
        </>
      }
    />
  );
}
