export const slugs = {
  "pt-BR": "conversor-de-unidades",
  en: "unit-converter",
};

export const categories = {
  length: { mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 },
  mass: { mg: 0.001, g: 1, kg: 1000, t: 1000000, oz: 28.349523125, lb: 453.59237 },
  volume: { ml: 0.001, l: 1, m3: 1000, floz: 0.0295735295625, cup: 0.2365882365, gal: 3.785411784 },
  area: { cm2: 0.0001, m2: 1, ha: 10000, km2: 1000000, ft2: 0.09290304, acre: 4046.8564224 },
  speed: { ms: 1, kmh: 1 / 3.6, mph: 0.44704, kn: 1852 / 3600 },
  data: { B: 1, KB: 1e3, MB: 1e6, GB: 1e9, TB: 1e12, KiB: 1024, MiB: 1024 ** 2, GiB: 1024 ** 3, TiB: 1024 ** 4 },
  temperature: { c: 0, f: 0, k: 0 },
} as const;

export type Category = keyof typeof categories;

function toCelsius(value: number, unit: string) {
  if (unit === "f") return ((value - 32) * 5) / 9;
  if (unit === "k") return value - 273.15;
  return value;
}

function fromCelsius(value: number, unit: string) {
  if (unit === "f") return (value * 9) / 5 + 32;
  if (unit === "k") return value + 273.15;
  return value;
}

export function convert(category: Category, value: number, from: string, to: string) {
  if (category === "temperature") return fromCelsius(toCelsius(value, from), to);
  const table = categories[category] as Record<string, number>;
  return (value * table[from]) / table[to];
}
