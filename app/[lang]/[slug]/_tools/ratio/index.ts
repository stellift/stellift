export const slugs = {
  "pt-BR": "regra-de-tres",
  en: "rule-of-three-calculator",
};

export function ruleOfThree(a: number, b: number, c: number, inverse: boolean) {
  if (inverse) return c === 0 ? null : (a * b) / c;
  return a === 0 ? null : (b * c) / a;
}
