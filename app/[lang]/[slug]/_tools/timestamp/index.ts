export const slugs = {
  "pt-BR": "conversor-de-timestamp",
  en: "unix-timestamp-converter",
};

export function parseTimestamp(input: string) {
  const trimmed = input.trim();
  if (!/^-?\d+(\.\d+)?$/.test(trimmed)) return null;
  const value = Number(trimmed);
  const milliseconds = Math.abs(value) >= 1e11 ? value : value * 1000;
  const date = new Date(milliseconds);
  if (Number.isNaN(date.getTime())) return null;
  return { date, unit: Math.abs(value) >= 1e11 ? ("ms" as const) : ("s" as const) };
}

export function toLocalInput(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}
