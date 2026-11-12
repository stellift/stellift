import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import {
  markFold,
  markSilhouette,
  markViewBox,
} from "@/app/[lang]/_components/logo-mark";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "stellift";

const canvas = "#06080b";
const ink = "#f6f8fb";
const muted = "#98a3b2";
const accent = "#4eaefd";
const foldTone = "#2a7fcb";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const [newsreader, interTight] = await Promise.all([
  readFile(join(process.cwd(), "assets/Newsreader-Medium.ttf")),
  readFile(join(process.cwd(), "assets/InterTight-SemiBold.ttf")),
]);

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

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
            <div
              style={{
                display: "flex",
                fontFamily: "Newsreader",
                fontSize: 38,
                color: ink,
              }}
            >
              {dict.site.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Newsreader",
              fontSize: 76,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: ink,
            }}
          >
            <div style={{ display: "flex" }}>{dict.ui.hero.title}</div>
            <div style={{ display: "flex" }}>{dict.ui.hero.titleAccent}</div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Inter Tight",
              fontSize: 21,
              color: muted,
            }}
          >
            {dict.site.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: newsreader, style: "normal", weight: 500 },
        { name: "Inter Tight", data: interTight, style: "normal", weight: 600 },
      ],
    },
  );
}
