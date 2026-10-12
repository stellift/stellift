export const slugs = {
  "pt-BR": "calculadora-de-economia-com-automacao",
  en: "automation-savings-calculator",
};

export function monthlySaving(hours: number, cost: number, reductionPercent: number) {
  return hours * cost * (reductionPercent / 100);
}
