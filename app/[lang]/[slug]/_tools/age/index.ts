import { compareDates } from "@/app/[lang]/[slug]/_tools/dates";

export const slugs = {
  "pt-BR": "calculadora-de-idade",
  en: "age-calculator",
};

function isLeap(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function iso(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function age(birth: string, today: string) {
  const b = birth.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const t = today.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!b || !t || birth > today) return null;
  const span = compareDates(birth, today, false);
  if (!span) return null;
  const [month, day] = [Number(b[2]), Number(b[3])];
  const birthdayIn = (year: number) =>
    month === 2 && day === 29 && !isLeap(year) ? iso(year, 2, 28) : iso(year, month, day);
  let year = Number(t[1]);
  if (birthdayIn(year) < today) year++;
  const next = birthdayIn(year);
  const until = compareDates(today, next, false)?.days ?? 0;
  const weekday = new Date(`${birth}T12:00:00Z`).getUTCDay();
  return {
    years: span.years,
    months: span.months,
    days: span.rest,
    totalDays: span.days,
    totalWeeks: Math.floor(span.days / 7),
    nextBirthday: next,
    untilBirthday: until,
    turning: year - Number(b[1]),
    weekday,
  };
}
