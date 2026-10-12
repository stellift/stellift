export const slugs = {
  "pt-BR": "custo-hora-de-desenvolvedor",
  en: "developer-hourly-cost-calculator",
};

export function hourlyCost(monthly: number, chargesPercent: number, hours: number) {
  if (hours <= 0) return 0;
  return (monthly * (1 + chargesPercent / 100)) / hours;
}
