import { locales, type Locale } from "@/lib/i18n/config";
import { toolFromSlug, toolIds, toolSlugs, type ToolId } from "@/app/[lang]/[slug]/_tools/config";
import * as accelerators from "@/app/[lang]/[slug]/_lists/accelerators/data";
import * as doctors from "@/app/[lang]/[slug]/_pages/doctors/data";

export type Route =
  | { kind: "tool"; id: ToolId }
  | { kind: "list" }
  | { kind: "doctors" };

export function routeParams() {
  return [
    ...locales.flatMap((lang) =>
      toolIds.map((id) => ({ lang, slug: toolSlugs[id][lang] })),
    ),
    { lang: accelerators.locale, slug: accelerators.slug },
    { lang: doctors.locale, slug: doctors.slug },
  ];
}

export function resolveRoute(lang: Locale, slug: string): Route | null {
  if (lang === accelerators.locale && slug === accelerators.slug) {
    return { kind: "list" };
  }
  if (lang === doctors.locale && slug === doctors.slug) {
    return { kind: "doctors" };
  }
  const id = toolFromSlug(lang, slug);
  return id ? { kind: "tool", id } : null;
}
