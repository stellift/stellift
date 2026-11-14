import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "stellift";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return ogCard({
    brand: dict.site.name,
    lines: [dict.ui.hero.title, dict.ui.hero.titleAccent],
    description: dict.site.description,
  });
}
