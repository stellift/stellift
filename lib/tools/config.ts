import type { Locale } from "@/lib/i18n/config";

export const toolIds = ["sla", "hourly-cost", "automation"] as const;

export type ToolId = (typeof toolIds)[number];

export const toolSlugs: Record<Locale, Record<ToolId, string>> = {
  "pt-BR": {
    sla: "calculadora-de-sla",
    "hourly-cost": "custo-hora-de-desenvolvedor",
    automation: "calculadora-de-economia-com-automacao",
  },
  en: {
    sla: "sla-uptime-calculator",
    "hourly-cost": "developer-hourly-cost-calculator",
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
