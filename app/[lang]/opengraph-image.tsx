import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "stellift";

const ink = "#0b1018";
const muted = "#4f5968";
const line = "#d5dbe4";
const accent = "#0b4ea2";

const starPath =
  "M12 .5 14.58 8.45 22.94 8.45 16.18 13.36 18.76 21.3 12 16.39 5.24 21.3 7.82 13.36 1.06 8.45 9.42 8.45Z";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const [newsreader, interTight, mark] = await Promise.all([
  readFile(join(process.cwd(), "assets/Newsreader-Medium.ttf")),
  readFile(join(process.cwd(), "assets/InterTight-SemiBold.ttf")),
  readFile(join(process.cwd(), "public/logos/stellift.png")),
]);

const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

function Star({ size: box, color }: { size: number; color: string }) {
  return (
    <svg width={box} height={box} viewBox="0 0 24 24" fill={color}>
      <path d={starPath} />
    </svg>
  );
}

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
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 76px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {}
            <img src={markSrc} width={48} height={48} alt="" />
            <div
              style={{
                display: "flex",
                fontFamily: "Newsreader",
                fontSize: 40,
                color: ink,
              }}
            >
              {dict.site.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Inter Tight",
              fontSize: 18,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: muted,
            }}
          >
            {dict.site.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Newsreader",
            fontSize: 86,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            color: ink,
          }}
        >
          <div style={{ display: "flex" }}>{dict.ui.hero.title}</div>
          <div style={{ display: "flex" }}>{dict.ui.hero.titleAccent}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Inter Tight",
              fontSize: 17,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: muted,
            }}
          >
            {dict.ui.hero.fieldStart}
          </div>

          <div style={{ display: "flex", flex: 1, height: 1, background: line }} />

          <Star size={18} color={accent} />

          <div
            style={{
              display: "flex",
              fontFamily: "Inter Tight",
              fontSize: 17,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: ink,
            }}
          >
            {dict.ui.hero.fieldEnd}
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
