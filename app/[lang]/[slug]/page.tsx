import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Accelerators from "@/app/[lang]/[slug]/_lists/accelerators/page";
import ToolPage from "@/app/[lang]/[slug]/_tools/page";
import { isLocale } from "@/lib/i18n/config";
import { acceleratorsMetadata } from "@/app/[lang]/[slug]/_lists/accelerators/metadata";
import { resolveRoute, routeParams } from "@/app/[lang]/[slug]/_lib/routes";
import { toolMetadata } from "@/app/[lang]/[slug]/_tools/metadata";

export function generateStaticParams() {
  return routeParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const route = resolveRoute(lang, slug);
  if (!route) return {};

  return route.kind === "list"
    ? acceleratorsMetadata()
    : toolMetadata(lang, route.id);
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const route = resolveRoute(lang, slug);
  if (!route) notFound();

  return route.kind === "list" ? (
    <Accelerators lang={lang} />
  ) : (
    <ToolPage lang={lang} id={route.id} />
  );
}
