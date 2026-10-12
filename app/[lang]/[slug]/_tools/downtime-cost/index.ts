export const slugs = {
  "pt-BR": "quanto-custa-ficar-fora-do-ar",
  en: "cost-of-downtime-calculator",
};

export function revenuePerHour(revenue: number, openHours: number) {
  return openHours > 0 ? revenue / openHours : 0;
}
