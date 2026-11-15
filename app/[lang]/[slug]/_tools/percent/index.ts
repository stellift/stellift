export const slugs = {
  "pt-BR": "calculadora-de-porcentagem",
  en: "percentage-calculator",
};

export function percentOf(percent: number, value: number) {
  return (percent / 100) * value;
}

export function shareOf(part: number, whole: number) {
  return whole === 0 ? null : (part / whole) * 100;
}

export function change(from: number, to: number) {
  return from === 0 ? null : ((to - from) / Math.abs(from)) * 100;
}
