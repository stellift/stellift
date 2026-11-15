"use client";

import { useId, useState } from "react";
import { readAsDataUrl, snippets } from "@/app/[lang]/[slug]/_tools/image";
import { CopyRow, Panels, Problem, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const maxBytes = 5 * 1024 * 1024;

export default function Image({ copy, shared, locale }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [file, setFile] = useState<{ name: string; size: number; type: string; dataUrl: string } | null>(null);
  const [problem, setProblem] = useState("");
  const [dragging, setDragging] = useState(false);
  const size = new Intl.NumberFormat(locale, { style: "unit", unit: "kilobyte", maximumFractionDigits: 1 });

  async function load(picked: File | undefined) {
    setProblem("");
    if (!picked) return;
    if (!picked.type.startsWith("image/")) {
      setProblem(t("notImage"));
      return;
    }
    if (picked.size > maxBytes) {
      setProblem(t("tooBig"));
      return;
    }
    const dataUrl = await readAsDataUrl(picked);
    setFile({ name: picked.name, size: picked.size, type: picked.type, dataUrl });
  }

  const out = file ? snippets(file.dataUrl, file.name.replace(/\.[^.]+$/, "")) : null;

  return (
    <Panels
      controls={
        <>
          <label
            htmlFor={id}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              load(event.dataTransfer.files[0]);
            }}
            className={`flex min-h-48 cursor-pointer flex-col items-center justify-center gap-3 border border-dashed p-6 text-center transition-colors ${
              dragging ? "border-accent bg-accent-soft" : "border-line-strong hover:bg-surface"
            }`}
          >
            <span className="font-serif text-xl text-ink">{t("drop")}</span>
            <span className="text-sm text-ink-muted">{t("dropHint")}</span>
            <input
              id={id}
              type="file"
              accept="image/*"
              onChange={(event) => load(event.target.files?.[0])}
              className="sr-only"
            />
          </label>
          {file ? (
            <div className="flex items-center gap-4">
              <span
                role="img"
                aria-label={t("preview")}
                style={{ backgroundImage: `url("${file.dataUrl}")` }}
                className="size-20 shrink-0 border border-line bg-contain bg-center bg-no-repeat"
              />
              <p className="min-w-0 break-all text-sm text-ink-muted">
                <span className="block text-ink">{file.name}</span>
                {file.type} · {size.format(file.size / 1024)} → {size.format(file.dataUrl.length / 1024)} {t("asText")}
              </p>
            </div>
          ) : null}
        </>
      }
      output={
        problem ? (
          <Problem>{problem}</Problem>
        ) : out ? (
          <dl className="flex flex-col gap-4">
            {[
              { key: "dataUrl", value: out.dataUrl },
              { key: "base64", value: out.base64 },
              { key: "img", value: out.img },
              { key: "css", value: out.css },
            ].map((row) => (
              <CopyRow
                key={row.key}
                label={t(row.key)}
                value={row.value}
                display={row.value.length > 400 ? `${row.value.slice(0, 400)}…` : row.value}
                shared={shared}
              />
            ))}
          </dl>
        ) : (
          <p className="text-sm text-ink-faint">{t("empty")}</p>
        )
      }
    />
  );
}
