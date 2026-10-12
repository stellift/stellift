export const slugs = {
  "pt-BR": "calculadora-de-sla",
  en: "sla-uptime-calculator",
};

export function downtimeMinutes(uptimePercent: number, days: number) {
  const ratio = Math.min(Math.max(uptimePercent, 0), 100) / 100;
  return days * 24 * 60 * (1 - ratio);
}
