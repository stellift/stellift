import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import * as list from "@/lib/lists/startup-accelerators";
import type { Dictionary } from "@/lib/i18n/types";

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="font-serif text-2xl text-ink">
              {dict.site.name}
            </a>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-ink-muted">
              {dict.ui.footer.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {locales.map((code) => (
                <a
                  key={code}
                  href={`/${code}`}
                  hrefLang={code}
                  aria-current={code === lang ? "true" : undefined}
                  className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    code === lang
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
                  }`}
                >
                  {localeNames[code]}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={dict.ui.footer.ariaLabel} className="md:col-span-3 md:col-start-7">
            <h2 className="field-label uppercase">{dict.ui.footer.navigate}</h2>
            <ul className="mt-4 space-y-2.5">
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {lang === list.locale ? (
                <li>
                  <a
                    href={`/${list.locale}/${list.slug}`}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {list.title}
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="field-label uppercase">{dict.ui.footer.contact}</h2>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: dict.site.email, href: `mailto:${dict.site.email}`, ext: false },
                { label: "LinkedIn", href: dict.site.linkedin, ext: true },
                { label: "GitHub", href: dict.site.github, ext: true },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    {...(item.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="break-words text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-sm text-ink-muted">
          © {year} {dict.site.name} · {dict.site.tagline}
        </p>
      </div>
    </footer>
  );
}
