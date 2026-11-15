export const slugs = {
  "pt-BR": "gerador-de-utm",
  en: "utm-builder",
};

export const utmKeys = ["source", "medium", "campaign", "term", "content"] as const;

export type UtmKey = (typeof utmKeys)[number];

export function buildUtm(base: string, values: Record<UtmKey, string>, lowercase: boolean) {
  let url: URL;
  try {
    url = new URL(/^[a-z][a-z0-9+.-]*:/i.test(base.trim()) ? base.trim() : `https://${base.trim()}`);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(url.protocol) || !url.hostname.includes(".")) return null;
  for (const key of utmKeys) {
    const raw = values[key].trim();
    const value = lowercase ? raw.toLowerCase() : raw;
    if (value) url.searchParams.set(`utm_${key}`, value);
    else url.searchParams.delete(`utm_${key}`);
  }
  return url.toString();
}
