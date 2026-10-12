import type { Locale } from "@/lib/i18n/config";

export const toolIds = [
  "sla",
  "downtime-cost",
  "hourly-cost",
  "team-cost",
  "estimate",
  "automation",
] as const;

export type ToolId = (typeof toolIds)[number];

export const toolSlugs: Record<Locale, Record<ToolId, string>> = {
  "pt-BR": {
    sla: "calculadora-de-sla",
    "downtime-cost": "quanto-custa-ficar-fora-do-ar",
    "hourly-cost": "custo-hora-de-desenvolvedor",
    "team-cost": "custo-de-time-de-projeto",
    estimate: "estimativa-de-prazo-pert",
    automation: "calculadora-de-economia-com-automacao",
  },
  en: {
    sla: "sla-uptime-calculator",
    "downtime-cost": "cost-of-downtime-calculator",
    "hourly-cost": "developer-hourly-cost-calculator",
    "team-cost": "project-team-cost-calculator",
    estimate: "pert-estimate-calculator",
    automation: "automation-savings-calculator",
  },
};

export function toolFromSlug(locale: Locale, slug: string): ToolId | null {
  const entries = Object.entries(toolSlugs[locale]) as [ToolId, string][];
  return entries.find(([, value]) => value === slug)?.[0] ?? null;
}

export function toolPath(locale: Locale, id: ToolId) {
  return `/${locale}/${toolSlugs[locale][id]}`;
}
