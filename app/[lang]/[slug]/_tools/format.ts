export function formatDuration(
  totalMinutes: number,
  unitNames: { day: string; hour: string; minute: string; second: string },
) {
  if (totalMinutes <= 0) return `0 ${unitNames.minute}`;
  const totalSeconds = Math.round(totalMinutes * 60);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts: string[] = [];
  if (days) parts.push(`${days} ${unitNames.day}`);
  if (hours) parts.push(`${hours} ${unitNames.hour}`);
  if (minutes) parts.push(`${minutes} ${unitNames.minute}`);
  if (!days && !hours && seconds) parts.push(`${seconds} ${unitNames.second}`);
  return parts.slice(0, 2).join(" ") || `0 ${unitNames.minute}`;
}

export function formatMoney(value: number, locale: string, currency: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export function formatNumber(value: number, locale: string, digits = 1) {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}
