import type { Metadata } from "next";
import { siteUrl } from "@/lib/i18n/config";
import * as accelerators from "@/app/[lang]/[slug]/_lists/accelerators/data";

export function acceleratorsPath() {
  return `/${accelerators.locale}/${accelerators.slug}`;
}

export function acceleratorsMetadata(): Metadata {
  const path = acceleratorsPath();

  return {
    metadataBase: new URL(siteUrl),
    title: accelerators.metaTitle,
    description: accelerators.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: path,
      languages: { [accelerators.locale]: path },
    },
    openGraph: {
      title: accelerators.metaTitle,
      description: accelerators.metaDescription,
      type: "article",
      url: path,
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: accelerators.metaTitle,
      description: accelerators.metaDescription,
    },
  };
}
