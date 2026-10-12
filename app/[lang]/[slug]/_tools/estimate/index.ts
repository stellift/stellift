export const slugs = {
  "pt-BR": "estimativa-de-prazo-pert",
  en: "pert-estimate-calculator",
};

export function pert(optimistic: number, likely: number, pessimistic: number) {
  const expected = (optimistic + 4 * likely + pessimistic) / 6;
  const deviation = Math.max((pessimistic - optimistic) / 6, 0);
  return { expected, deviation };
}
