export const slugs = {
  "pt-BR": "calculadora-de-horas",
  en: "hours-calculator",
};

export function parseDuration(input: string) {
  const text = input.trim().toLowerCase().replace(/\s/g, "");
  if (text === "") return null;
  const sign = text.startsWith("-") ? -1 : 1;
  const body = text.replace(/^[-+]/, "");
  let match = body.match(/^(\d+):([0-5]?\d)(?::([0-5]?\d))?$/);
  if (match) return sign * (Number(match[1]) * 60 + Number(match[2]) + Number(match[3] ?? 0) / 60);
  match = body.match(/^(\d+)h(?:(\d+)(?:m|min)?)?$/);
  if (match) return sign * (Number(match[1]) * 60 + Number(match[2] ?? 0));
  match = body.match(/^(\d+)(?:m|min)$/);
  if (match) return sign * Number(match[1]);
  match = body.match(/^(\d+)(?:[.,](\d+))?$/);
  if (match) return sign * Number(`${match[1]}.${match[2] ?? 0}`) * 60;
  return null;
}

export function sumDurations(text: string) {
  let total = 0;
  const invalid: number[] = [];
  text.split(/\r?\n/).forEach((line, i) => {
    if (line.trim() === "") return;
    const minutes = parseDuration(line);
    if (minutes === null) invalid.push(i + 1);
    else total += minutes;
  });
  return { total, invalid };
}

export function between(start: string, end: string) {
  const parse = (value: string) => {
    const match = value.match(/^(\d{2}):(\d{2})$/);
    return match ? Number(match[1]) * 60 + Number(match[2]) : null;
  };
  const a = parse(start);
  const b = parse(end);
  if (a === null || b === null) return null;
  return b >= a ? b - a : b + 1440 - a;
}

export function formatMinutes(minutes: number) {
  const sign = minutes < 0 ? "-" : "";
  const total = Math.round(Math.abs(minutes));
  return `${sign}${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
