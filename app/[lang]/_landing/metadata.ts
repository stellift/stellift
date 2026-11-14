import type { Metadata } from "next";
import { siteUrl } from "@/lib/i18n/config";
import { landingLocale, landingPath } from "@/app/[lang]/_landing/registry";
import type { Niche } from "@/app/[lang]/_landing/types";

export function landingMetadata(niche: Niche): Metadata {
  const path = landingPath(niche);

  return {
    metadataBase: new URL(siteUrl),
    title: niche.metaTitle,
    description: niche.metaDescription,
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
      canonical: path,
      languages: { [landingLocale]: path },
    },
    openGraph: {
      title: niche.metaTitle,
      description: niche.metaDescription,
      type: "website",
      url: path,
      siteName: "stellift",
      locale: "pt_BR",
      images: [{ url: niche.demo.ogImage, width: 1280, height: 800, alt: niche.demo.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: niche.metaTitle,
      description: niche.metaDescription,
      images: [niche.demo.ogImage],
    },
  };
}
