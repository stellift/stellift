export const slugs = {
  "pt-BR": "custo-de-time-de-projeto",
  en: "project-team-cost-calculator",
};

export function weeklyCost(people: number, cost: number, hours: number) {
  return people * cost * hours;
}
