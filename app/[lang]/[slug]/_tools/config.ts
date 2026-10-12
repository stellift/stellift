import type { Locale } from "@/lib/i18n/config";
import { slugs as automation } from "@/app/[lang]/[slug]/_tools/automation";
import { slugs as downtimeCost } from "@/app/[lang]/[slug]/_tools/downtime-cost";
import { slugs as estimate } from "@/app/[lang]/[slug]/_tools/estimate";
import { slugs as hourlyCost } from "@/app/[lang]/[slug]/_tools/hourly-cost";
import { slugs as sla } from "@/app/[lang]/[slug]/_tools/sla";
import { slugs as teamCost } from "@/app/[lang]/[slug]/_tools/team-cost";

export const toolSlugs = {
  sla,
  "downtime-cost": downtimeCost,
  "hourly-cost": hourlyCost,
  "team-cost": teamCost,
  estimate,
  automation,
} satisfies Record<string, Record<Locale, string>>;

export type ToolId = keyof typeof toolSlugs;

export const toolIds = Object.keys(toolSlugs) as ToolId[];

export function toolPath(locale: Locale, id: ToolId) {
  return `/${locale}/${toolSlugs[id][locale]}`;
}

export function toolFromSlug(locale: Locale, slug: string): ToolId | null {
  return toolIds.find((id) => toolSlugs[id][locale] === slug) ?? null;
}
