import { locales, type Locale } from "@/lib/i18n/config";

export default function LangSwitch({
  lang,
  label,
}: {
  lang: Locale;
  label: string;
}) {
  const active = locales.indexOf(lang);

  return (
    <div
      className="seg"
      role="group"
      aria-label={label}
      style={{ "--seg-i": active } as React.CSSProperties}
    >
      <span aria-hidden className="seg-thumb" />
      {locales.map((code) => (
        <a
          key={code}
          href={`/${code}`}
          hrefLang={code}
          aria-current={code === lang ? "true" : undefined}
          {...(code === lang ? { "data-on": "true" } : {})}
          className="seg-item"
        >
          {code.slice(0, 2).toUpperCase()}
        </a>
      ))}
    </div>
  );
}
