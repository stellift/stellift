import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "stellift";

// Sem isto a rota sai como ƒ (dinâmica): o [lang] é dinâmico e o
// generateStaticParams do layout não alcança este arquivo. Scrapers de rede
// social têm timeout curto — a imagem precisa já estar pronta.
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
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Inter Tight",
            fontSize: 36,
            letterSpacing: "-0.01em",
            color: "#0b1a33",
          }}
        >
          {dict.site.name}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Newsreader",
            fontSize: 82,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
          }}
        >
          <div style={{ display: "flex", color: "#0b1a33" }}>
            {dict.ui.hero.title}
          </div>
          <div style={{ display: "flex", color: "#1f5bd8" }}>
            {dict.ui.hero.titleAccent}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontFamily: "Inter Tight",
            fontSize: 26,
            color: "#4a5568",
          }}
        >
          <div style={{ display: "flex", width: 56, height: 4, background: "#1f5bd8" }} />
          {dict.site.description}
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
