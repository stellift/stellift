export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const localeNames: Record<Locale, string> = {
  "pt-BR": "Português",
  en: "English",
};

/**
 * Alimenta canonical, hreflang, sitemap e robots.
 *
 * Em produção a Vercel expõe o domínio de produção do projeto — o domínio
 * próprio quando há um, senão o `.vercel.app`. Defina `NEXT_PUBLIC_SITE_URL`
 * para forçar outro valor. Apontar isto para um domínio que não responde faz
 * a página pedir para não ser indexada em favor de um endereço inexistente.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizedPath(locale: Locale, hash = "") {
  return `/${locale}${hash}`;
}