"use client";

import { useDeferredValue, useId, useState } from "react";
import { qrMatrix, qrPath, qrSvg, type Level } from "@/app/[lang]/[slug]/_tools/qrcode";
import { Choice, Panels, Problem, TextInput, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

const margin = 4;

function save(href: string, name: string) {
  const link = document.createElement("a");
  link.href = href;
  link.download = name;
  link.click();
}

function downloadSvg(matrix: boolean[][]) {
  const url = URL.createObjectURL(new Blob([qrSvg(matrix, margin)], { type: "image/svg+xml" }));
  save(url, "qrcode.svg");
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadPng(matrix: boolean[][]) {
  const scale = 16;
  const size = (matrix.length + margin * 2) * scale;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);
  context.fillStyle = "#000000";
  matrix.forEach((row, y) =>
    row.forEach((dark, x) => {
      if (dark) context.fillRect((x + margin) * scale, (y + margin) * scale, scale, scale);
    }),
  );
  save(canvas.toDataURL("image/png"), "qrcode.png");
}

function build(text: string, level: Level) {
  try {
    return qrMatrix(text, level);
  } catch {
    return null;
  }
}

export default function QrCode({ copy }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [text, setText] = useState("https://example.com");
  const [level, setLevel] = useState<Level>("M");
  const deferred = useDeferredValue(text);
  const matrix = deferred === "" ? null : build(deferred, level);
  const levels = (["L", "M", "Q", "H"] as const).map((value) => ({
    value,
    label: t(`level${value}`),
  }));
  const size = matrix ? matrix.length + margin * 2 : 0;

  return (
    <Panels
      controls={
        <>
          <TextInput id={id} label={t("input")} value={text} onChange={setText} rows={5} mono={false} />
          <Choice label={t("level")} options={levels} value={level} onChange={setLevel} />
        </>
      }
      output={
        deferred !== "" && !matrix ? (
          <Problem>{t("tooLong")}</Problem>
        ) : (
          <>
            <div className="mx-auto w-full max-w-72 border border-line bg-white">
              {matrix ? (
                <svg
                  viewBox={`0 0 ${size} ${size}`}
                  shapeRendering="crispEdges"
                  role="img"
                  aria-label={t("preview")}
                  className="block h-auto w-full"
                >
                  <path d={qrPath(matrix, margin)} fill="#000000" />
                </svg>
              ) : (
                <div className="aspect-square" />
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                type="button"
                disabled={!matrix}
                onClick={() => matrix && downloadPng(matrix)}
                className="btn btn-primary btn-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("png")}
              </button>
              <button
                type="button"
                disabled={!matrix}
                onClick={() => matrix && downloadSvg(matrix)}
                className="btn btn-outline btn-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("svg")}
              </button>
            </div>
          </>
        )
      }
    />
  );
}
