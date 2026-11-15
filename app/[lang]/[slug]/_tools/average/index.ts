export const slugs = {
  "pt-BR": "calculadora-de-media",
  en: "average-calculator",
};

function number(text: string) {
  const value = Number(text.replace(",", "."));
  return Number.isFinite(value) ? value : null;
}

export function parseGrades(text: string) {
  const grades: { value: number; weight: number }[] = [];
  const invalid: number[] = [];
  text.split(/\r?\n/).forEach((line, i) => {
    const parts = line.trim().split(/[\s;]+|\t/).filter(Boolean);
    if (parts.length === 0) return;
    const value = number(parts[0]);
    const weight = parts.length > 1 ? number(parts[1]) : 1;
    if (value === null || weight === null || weight < 0 || parts.length > 2) invalid.push(i + 1);
    else grades.push({ value, weight });
  });
  return { grades, invalid };
}

export function summarize(grades: { value: number; weight: number }[]) {
  if (grades.length === 0) return null;
  const values = grades.map((g) => g.value).sort((a, b) => a - b);
  const totalWeight = grades.reduce((sum, g) => sum + g.weight, 0);
  const mid = Math.floor(values.length / 2);
  return {
    count: grades.length,
    mean: values.reduce((a, b) => a + b, 0) / values.length,
    weighted: totalWeight === 0 ? null : grades.reduce((sum, g) => sum + g.value * g.weight, 0) / totalWeight,
    weightedUsed: grades.some((g) => g.weight !== 1),
    median: values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2,
    min: values[0],
    max: values[values.length - 1],
    totalWeight,
  };
}

export function neededGrade(
  grades: { value: number; weight: number }[],
  target: number,
  nextWeight: number,
) {
  if (nextWeight <= 0) return null;
  const sum = grades.reduce((total, g) => total + g.value * g.weight, 0);
  const weight = grades.reduce((total, g) => total + g.weight, 0);
  return (target * (weight + nextWeight) - sum) / nextWeight;
}
