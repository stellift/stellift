export const slugs = {
  "pt-BR": "expressao-cron",
  en: "cron-expression",
};

const macros: Record<string, string> = {
  "@yearly": "0 0 1 1 *",
  "@annually": "0 0 1 1 *",
  "@monthly": "0 0 1 * *",
  "@weekly": "0 0 * * 0",
  "@daily": "0 0 * * *",
  "@midnight": "0 0 * * *",
  "@hourly": "0 * * * *",
};

const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

type Field = { values: Set<number>; any: boolean };

function parseField(text: string, min: number, max: number, names: string[] = [], nameBase = 0): Field | null {
  const values = new Set<number>();
  const value = (token: string) => {
    const index = names.indexOf(token.toLowerCase());
    if (index >= 0) return index + nameBase;
    return /^\d+$/.test(token) ? Number(token) : Number.NaN;
  };
  for (const part of text.split(",")) {
    const match = part.match(/^(\*|[a-z0-9]+(?:-[a-z0-9]+)?)(?:\/(\d+))?$/i);
    if (!match) return null;
    const step = match[2] ? Number(match[2]) : 1;
    if (step < 1) return null;
    let start: number;
    let end: number;
    if (match[1] === "*") {
      start = min;
      end = max;
    } else if (match[1].includes("-")) {
      [start, end] = match[1].split("-").map(value);
    } else {
      start = value(match[1]);
      end = match[2] ? max : start;
    }
    if (![start, end].every(Number.isInteger) || start < min || end > max || start > end) return null;
    for (let v = start; v <= end; v += step) values.add(v);
  }
  return { values, any: false };
}

export type Cron = {
  minute: Field;
  hour: Field;
  dayOfMonth: Field;
  month: Field;
  dayOfWeek: Field;
};

export function parseCron(expression: string): Cron | null {
  const text = macros[expression.trim().toLowerCase()] ?? expression.trim();
  const parts = text.split(/\s+/);
  if (parts.length !== 5) return null;
  const minute = parseField(parts[0], 0, 59);
  const hour = parseField(parts[1], 0, 23);
  const dayOfMonth = parseField(parts[2], 1, 31);
  const month = parseField(parts[3], 1, 12, monthNames, 1);
  const dayOfWeek = parseField(parts[4], 0, 7, dayNames);
  if (!minute || !hour || !dayOfMonth || !month || !dayOfWeek) return null;
  if (dayOfWeek.values.has(7)) dayOfWeek.values.add(0);
  dayOfMonth.any = parts[2].startsWith("*");
  dayOfWeek.any = parts[4].startsWith("*");
  return { minute, hour, dayOfMonth, month, dayOfWeek };
}

function dayMatches(cron: Cron, date: Date) {
  const dom = cron.dayOfMonth.values.has(date.getDate());
  const dow = cron.dayOfWeek.values.has(date.getDay());
  if (cron.dayOfMonth.any && cron.dayOfWeek.any) return true;
  if (cron.dayOfMonth.any) return dow;
  if (cron.dayOfWeek.any) return dom;
  return dom || dow;
}

export function nextRuns(cron: Cron, from: Date, count: number) {
  const runs: Date[] = [];
  const date = new Date(from);
  date.setSeconds(0, 0);
  date.setMinutes(date.getMinutes() + 1);
  const limit = new Date(from);
  limit.setFullYear(limit.getFullYear() + 5);
  while (runs.length < count && date < limit) {
    if (!cron.month.values.has(date.getMonth() + 1)) {
      date.setMonth(date.getMonth() + 1, 1);
      date.setHours(0, 0, 0, 0);
    } else if (!dayMatches(cron, date)) {
      date.setDate(date.getDate() + 1);
      date.setHours(0, 0, 0, 0);
    } else if (!cron.hour.values.has(date.getHours())) {
      date.setHours(date.getHours() + 1, 0, 0, 0);
    } else if (!cron.minute.values.has(date.getMinutes())) {
      date.setMinutes(date.getMinutes() + 1, 0, 0);
    } else {
      runs.push(new Date(date));
      date.setMinutes(date.getMinutes() + 1, 0, 0);
    }
  }
  return runs;
}
