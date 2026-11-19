import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import { ogCard, ogSize } from "@/lib/og";
import { resolveRoute, routeParams } from "@/app/[lang]/[slug]/_lib/routes";
import * as accelerators from "@/app/[lang]/[slug]/_lists/accelerators/data";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "stellift";

export function generateStaticParams() {
  return routeParams();
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const route = resolveRoute(lang, slug);
  if (!route) notFound();
  const dict = await getDictionary(lang);

  if (route.kind === "list") {
    return ogCard({
      brand: dict.site.name,
      lines: [accelerators.title],
      description: accelerators.metaDescription,
    });
  }

  if (route.kind === "catalog") {
    return ogCard({
      brand: dict.site.name,
      kicker: dict.tools.allLabel,
      lines: [dict.tools.title],
      description: dict.tools.metaDescription,
    });
  }

  const copy = dict.tools.items[route.id];
  const kicker = dict.tools.allLabel;

  return ogCard({
    brand: dict.site.name,
    kicker,
    lines: [copy.name],
    description: copy.tagline,
  });
}
