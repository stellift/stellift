import type { Metadata } from "next";
import { locales, siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import { toolPath, type ToolId } from "@/app/[lang]/[slug]/_tools/config";

export const currencies: Record<Locale, string> = { "pt-BR": "BRL", en: "USD" };

export async function toolMetadata(lang: Locale, id: ToolId): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const copy = dict.tools.items[id];

  return {
    metadataBase: new URL(siteUrl),
    title: copy.metaTitle,
    description: copy.metaDescription,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: toolPath(lang, id),
      languages: Object.fromEntries([
        ...locales.map((l) => [l, toolPath(l, id)]),
        ["x-default", toolPath("pt-BR", id)],
      ]),
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: "website",
      url: toolPath(lang, id),
      siteName: dict.site.name,
      locale: dict.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
    },
  };
}
