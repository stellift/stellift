import type { Locale } from "@/lib/i18n/config";
import { slugs as automation } from "@/app/[lang]/[slug]/_tools/automation";
import { slugs as base64 } from "@/app/[lang]/[slug]/_tools/base64";
import { slugs as cnpj } from "@/app/[lang]/[slug]/_tools/cnpj";
import { slugs as counter } from "@/app/[lang]/[slug]/_tools/counter";
import { slugs as cpf } from "@/app/[lang]/[slug]/_tools/cpf";
import { slugs as json } from "@/app/[lang]/[slug]/_tools/json";
import { slugs as password } from "@/app/[lang]/[slug]/_tools/password";
import { slugs as uuid } from "@/app/[lang]/[slug]/_tools/uuid";
import { slugs as hash } from "@/app/[lang]/[slug]/_tools/hash";
import { slugs as url } from "@/app/[lang]/[slug]/_tools/url";
import { slugs as timestamp } from "@/app/[lang]/[slug]/_tools/timestamp";
import { slugs as jwt } from "@/app/[lang]/[slug]/_tools/jwt";
import { slugs as textCase } from "@/app/[lang]/[slug]/_tools/case";
import { slugs as lorem } from "@/app/[lang]/[slug]/_tools/lorem";
import { slugs as regex } from "@/app/[lang]/[slug]/_tools/regex";
import { slugs as numberBase } from "@/app/[lang]/[slug]/_tools/base";
import { slugs as qrcode } from "@/app/[lang]/[slug]/_tools/qrcode";
import { slugs as color } from "@/app/[lang]/[slug]/_tools/color";
import { slugs as diff } from "@/app/[lang]/[slug]/_tools/diff";
import { slugs as dates } from "@/app/[lang]/[slug]/_tools/dates";
import { slugs as percent } from "@/app/[lang]/[slug]/_tools/percent";
import { slugs as draw } from "@/app/[lang]/[slug]/_tools/draw";
import { slugs as slugTool } from "@/app/[lang]/[slug]/_tools/slug";
import { slugs as lines } from "@/app/[lang]/[slug]/_tools/lines";
import { slugs as csv } from "@/app/[lang]/[slug]/_tools/csv";
import { slugs as cron } from "@/app/[lang]/[slug]/_tools/cron";
import { slugs as ratio } from "@/app/[lang]/[slug]/_tools/ratio";
import { slugs as age } from "@/app/[lang]/[slug]/_tools/age";
import { slugs as words } from "@/app/[lang]/[slug]/_tools/words";
import { slugs as interest } from "@/app/[lang]/[slug]/_tools/interest";
import { slugs as hours } from "@/app/[lang]/[slug]/_tools/hours";
import { slugs as entities } from "@/app/[lang]/[slug]/_tools/entities";
import { slugs as timezone } from "@/app/[lang]/[slug]/_tools/timezone";
import { slugs as units } from "@/app/[lang]/[slug]/_tools/units";
import { slugs as average } from "@/app/[lang]/[slug]/_tools/average";
import { slugs as whatsapp } from "@/app/[lang]/[slug]/_tools/whatsapp";
import { slugs as stopwatch } from "@/app/[lang]/[slug]/_tools/stopwatch";
import { slugs as image } from "@/app/[lang]/[slug]/_tools/image";
import { slugs as utm } from "@/app/[lang]/[slug]/_tools/utm";
import { slugs as margin } from "@/app/[lang]/[slug]/_tools/margin";
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
  hash,
  url,
  timestamp,
  jwt,
  case: textCase,
  lorem,
  regex,
  base: numberBase,
  qrcode,
  color,
  diff,
  dates,
  percent,
  draw,
  slug: slugTool,
  lines,
  csv,
  cron,
  ratio,
  age,
  words,
  interest,
  hours,
  entities,
  timezone,
  units,
  average,
  whatsapp,
  stopwatch,
  image,
  utm,
  margin,
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

export const utilityIds: ToolId[] = [
  "whatsapp",
  "percent",
  "margin",
  "ratio",
  "interest",
  "words",
  "average",
  "age",
  "dates",
  "hours",
  "timezone",
  "stopwatch",
  "units",
  "draw",
  "cpf",
  "cnpj",
  "password",
  "uuid",
  "hash",
  "jwt",
  "json",
  "regex",
  "diff",
  "cron",
  "csv",
  "base64",
  "image",
  "url",
  "utm",
  "entities",
  "timestamp",
  "base",
  "color",
  "qrcode",
  "counter",
  "case",
  "slug",
  "lines",
  "lorem",
];

export function toolGroup(id: ToolId) {
  return calculatorIds.includes(id) ? calculatorIds : utilityIds;
}

export function toolPath(locale: Locale, id: ToolId) {
  return `/${locale}/${toolSlugs[id][locale]}`;
}

export function toolFromSlug(locale: Locale, slug: string): ToolId | null {
  return toolIds.find((id) => toolSlugs[id][locale] === slug) ?? null;
}

export const catalogSlugs: Record<Locale, string> = {
  "pt-BR": "ferramentas",
  en: "tools",
};

export function catalogPath(locale: Locale) {
  return `/${locale}/${catalogSlugs[locale]}`;
}
