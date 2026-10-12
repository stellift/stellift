import { locales, type Locale } from "@/lib/i18n/config";
import { toolFromSlug, toolIds, toolSlugs } from "@/lib/tools/config";
import * as accelerators from "@/lib/lists/startup-accelerators";

export type Route = { kind: "tool"; id: (typeof toolIds)[number] } | { kind: "list" };

export function routeParams() {
  return [
    ...locales.flatMap((lang) =>
      toolIds.map((id) => ({ lang, slug: toolSlugs[lang][id] })),
    ),
    { lang: accelerators.locale, slug: accelerators.slug },
  ];
}

export function resolveRoute(lang: Locale, slug: string): Route | null {
  if (lang === accelerators.locale && slug === accelerators.slug) {
    return { kind: "list" };
  }
  const id = toolFromSlug(lang, slug);
  return id ? { kind: "tool", id } : null;
}
