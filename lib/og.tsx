import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  markFold,
  markSilhouette,
  markViewBox,
} from "@/app/[lang]/_components/logo-mark";

export const ogSize = { width: 1200, height: 630 };

const canvas = "#06080b";
const ink = "#f6f8fb";
const muted = "#98a3b2";
const accent = "#4eaefd";
const foldTone = "#2a7fcb";

let fonts: Promise<[Buffer, Buffer]> | null = null;

function loadFonts() {
  fonts ??= Promise.all([
    readFile(join(process.cwd(), "assets/Fraunces-Medium.ttf")),
    readFile(join(process.cwd(), "assets/InterTight-SemiBold.ttf")),
  ]);
  return fonts;
}

function titleSize(lines: string[]) {
  const longest = Math.max(...lines.map((line) => line.length));
  if (longest <= 22) return 76;
  if (longest <= 32) return 64;
  if (longest <= 44) return 54;
  return 46;
}

export async function ogCard({
  brand,
  kicker,
  lines,
  description,
}: {
  brand: string;
  kicker?: string;
  lines: string[];
  description: string;
}) {
  const [fraunces, interTight] = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: canvas,
          overflow: "hidden",
        }}
      >
        <svg
          width={404}
          height={584}
          viewBox={markViewBox}
          style={{ position: "absolute", right: -54, top: 23 }}
        >
          <path fill={accent} fillRule="evenodd" d={markSilhouette} />
          <path fill={foldTone} fillRule="evenodd" d={markFold} />
        </svg>

        <div
          style={{
            width: 790,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "62px 0 62px 76px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width={46} height={46} viewBox="0 0 460 460">
              <rect width="460" height="460" rx="40" fill={accent} />
              <path fill="#ffffff" fillRule="evenodd" d={markSilhouette} />
              <path fill="#d9e8fa" fillRule="evenodd" d={markFold} />
            </svg>
            <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 38, color: ink }}>
              {brand}
            </div>
            {kicker ? (
              <div
                style={{
                  display: "flex",
                  marginLeft: 12,
                  fontFamily: "Inter Tight",
                  fontSize: 18,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: accent,
                }}
              >
                {kicker}
              </div>
            ) : null}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Fraunces",
              fontSize: titleSize(lines),
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: ink,
            }}
          >
            {lines.map((line) => (
              <div key={line} style={{ display: "flex" }}>
                {line}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", fontFamily: "Inter Tight", fontSize: 21, color: muted }}>
            {description}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
        { name: "Inter Tight", data: interTight, style: "normal", weight: 600 },
      ],
    },
  );
}
