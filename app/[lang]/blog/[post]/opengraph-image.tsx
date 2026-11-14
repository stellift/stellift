import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import { ogCard, ogSize } from "@/lib/og";
import { findEntry, postParams } from "@/app/[lang]/blog/_content/posts";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "stellift";

export function generateStaticParams() {
  return postParams();
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; post: string }>;
}) {
  const { lang, post } = await params;
  if (!isLocale(lang)) notFound();
  const entry = findEntry(lang, post);
  if (!entry) notFound();
  const dict = await getDictionary(lang);

  return ogCard({
    brand: dict.site.name,
    kicker: dict.blog.navLabel,
    lines: [entry.content.title],
    description: entry.content.description,
  });
}
