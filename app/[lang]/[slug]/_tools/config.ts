import type { Locale } from "@/lib/i18n/config";
import { slugs as automation } from "@/app/[lang]/[slug]/_tools/automation";
import { slugs as base64 } from "@/app/[lang]/[slug]/_tools/base64";
import { slugs as cnpj } from "@/app/[lang]/[slug]/_tools/cnpj";
import { slugs as counter } from "@/app/[lang]/[slug]/_tools/counter";
import { slugs as cpf } from "@/app/[lang]/[slug]/_tools/cpf";
import { slugs as json } from "@/app/[lang]/[slug]/_tools/json";
import { slugs as password } from "@/app/[lang]/[slug]/_tools/password";
import { slugs as uuid } from "@/app/[lang]/[slug]/_tools/uuid";
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
  cpf,
  cnpj,
  password,
  uuid,
  base64,
  json,
  counter,
} satisfies Record<string, Record<Locale, string>>;

export type ToolId = keyof typeof toolSlugs;

export const toolIds = Object.keys(toolSlugs) as ToolId[];

export const calculatorIds: ToolId[] = [
  "sla",
  "downtime-cost",
  "hourly-cost",
  "team-cost",
  "estimate",
  "automation",
];

export const utilityIds: ToolId[] = ["cpf", "cnpj", "password", "uuid", "base64", "json", "counter"];

export function toolGroup(id: ToolId) {
  return calculatorIds.includes(id) ? calculatorIds : utilityIds;
}

export function toolPath(locale: Locale, id: ToolId) {
  return `/${locale}/${toolSlugs[id][locale]}`;
}

export function toolFromSlug(locale: Locale, slug: string): ToolId | null {
  return toolIds.find((id) => toolSlugs[id][locale] === slug) ?? null;
}
