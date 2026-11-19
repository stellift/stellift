import { locales, type Locale } from "@/lib/i18n/config";
import { catalogSlugs, toolFromSlug, toolIds, toolSlugs, type ToolId } from "@/app/[lang]/[slug]/_tools/config";
import * as accelerators from "@/app/[lang]/[slug]/_lists/accelerators/data";

export type Route =
  | { kind: "tool"; id: ToolId }
  | { kind: "list" }
  | { kind: "catalog" };

export function routeParams() {
  return [
    ...locales.flatMap((lang) =>
      toolIds.map((id) => ({ lang, slug: toolSlugs[id][lang] })),
    ),
    ...locales.map((lang) => ({ lang, slug: catalogSlugs[lang] })),
    { lang: accelerators.locale, slug: accelerators.slug },
  ];
}

export function resolveRoute(lang: Locale, slug: string): Route | null {
  if (lang === accelerators.locale && slug === accelerators.slug) {
    return { kind: "list" };
  }
  if (slug === catalogSlugs[lang]) return { kind: "catalog" };
  const id = toolFromSlug(lang, slug);
  return id ? { kind: "tool", id } : null;
}
