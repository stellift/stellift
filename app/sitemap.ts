import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n/config";
import { toolIds, toolPath } from "@/app/[lang]/[slug]/_tools/config";
import * as list from "@/app/[lang]/[slug]/_lists/accelerators/data";

export const dynamic = "force-static";

function alternates(path: (lang: (typeof locales)[number]) => string) {
  return {
    languages: {
      ...Object.fromEntries(locales.map((lang) => [lang, `${siteUrl}${path(lang)}`])),
      "x-default": `${siteUrl}${path("pt-BR")}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home = locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: lang === "pt-BR" ? 1 : 0.9,
    alternates: alternates((l) => `/${l}`),
  }));

  const tools = locales.flatMap((lang) =>
    toolIds.map((id) => ({
      url: `${siteUrl}${toolPath(lang, id)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === "pt-BR" ? 0.8 : 0.7,
      alternates: alternates((l) => toolPath(l, id)),
    })),
  );

  return [
    ...home,
    ...tools,
    {
      url: `${siteUrl}/${list.locale}/${list.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
