export const slugs = {
  "pt-BR": "calcular-dias-entre-datas",
  en: "days-between-dates",
};

const day = 86400000;

function parse(value: string) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const time = Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(time) ? null : time;
}

export function compareDates(from: string, to: string, includeLast: boolean) {
  const a = parse(from);
  const b = parse(to);
  if (a === null || b === null) return null;
  const [start, end] = a <= b ? [a, b] : [b, a];
  const last = includeLast ? end + day : end;
  const days = Math.round((last - start) / day);

  let business = 0;
  for (let time = start; time < last; time += day) {
    const weekday = new Date(time).getUTCDay();
    if (weekday !== 0 && weekday !== 6) business++;
  }

  const s = new Date(start);
  const e = new Date(last);
  let total =
    (e.getUTCFullYear() - s.getUTCFullYear()) * 12 + (e.getUTCMonth() - s.getUTCMonth());
  if (e.getUTCDate() < s.getUTCDate()) total--;
  const anchorYear = s.getUTCFullYear() + Math.floor((s.getUTCMonth() + total) / 12);
  const anchorMonth = (s.getUTCMonth() + total) % 12;
  const monthLength = new Date(Date.UTC(anchorYear, anchorMonth + 1, 0)).getUTCDate();
  const anchor = Date.UTC(anchorYear, anchorMonth, Math.min(s.getUTCDate(), monthLength));
  const years = Math.floor(total / 12);
  const months = total % 12;
  const rest = Math.round((last - anchor) / day);

  return { days, weeks: Math.floor(days / 7), weekRest: days % 7, business, years, months, rest };
}
