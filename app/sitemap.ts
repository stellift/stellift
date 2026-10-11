import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "pt-BR" ? 1 : 0.9,
    alternates: {
      languages: {
        "pt-BR": `${siteUrl}/pt-BR`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/pt-BR`,
      },
    },
  }));
}