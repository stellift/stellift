import Star from "@/app/[lang]/_components/star";
import Wordmark from "@/app/[lang]/_components/wordmark";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import * as list from "@/app/[lang]/[slug]/_lists/accelerators/data";
import { blogPath } from "@/app/[lang]/blog/_content/posts";
import type { Dictionary } from "@/lib/i18n/types";

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const year = new Date().getFullYear();
  const home = `/${lang}`;

  return (
    <footer className="border-t border-line">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href={`${home}#top`} className="inline-block">
              <Wordmark name={dict.site.name} size="lg" />
            </a>

            <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-ink-muted">
              {dict.ui.footer.description}
            </p>

            <div className="mt-7 inline-flex border border-line">
              {locales.map((code) => (
                <a
                  key={code}
                  href={`/${code}`}
                  hrefLang={code}
                  aria-current={code === lang ? "true" : undefined}
                  className={`border-r border-line px-3.5 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] transition-colors last:border-r-0 ${
                    code === lang
                      ? "bg-ink text-canvas"
                      : "text-ink-muted hover:bg-surface hover:text-ink"
                  }`}
                >
                  {localeNames[code]}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={dict.ui.footer.ariaLabel} className="md:col-span-3 md:col-start-7">
            <h2 className="eyebrow">{dict.ui.footer.navigate}</h2>
            <ul className="mt-5 space-y-3">
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={`${home}${item.href}`}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={blogPath(lang)}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {dict.blog.navLabel}
                </a>
              </li>
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
            <h2 className="eyebrow">{dict.ui.footer.contact}</h2>
            <ul className="mt-5 space-y-3">
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

        <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-6">
          <p className="text-xs text-ink-faint">
            © {year} {dict.site.name}
          </p>
          <span aria-hidden className="h-px flex-1 bg-line-soft" />
          <p className="eyebrow">{dict.site.tagline}</p>
          <Star className="size-2.5 shrink-0 text-accent" />
        </div>
      </div>
    </footer>
  );
}
