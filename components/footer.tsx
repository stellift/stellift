import { locales, localeNames, type Locale } from "@/lib/i18n/config";
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
    <footer className="pb-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-panel bg-navy px-8 py-12 shadow-panel">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <a href="#top" className="flex items-center gap-2.5">
                <span className="text-[21px] font-semibold text-white">
                  {dict.site.name}
                </span>
              </a>
              <p className="mt-4 max-w-[42ch] text-[14px] leading-[1.65] text-white/70">
                {dict.ui.footer.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {locales.map((code) => (
                  <a
                    key={code}
                    href={`/${code}`}
                    hrefLang={code}
                    aria-current={code === lang ? "true" : undefined}
                    className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-150 ${
                      code === lang
                        ? "border-white bg-white text-navy"
                        : "border-white/30 text-white/75 hover:border-white hover:text-white"
                    }`}
                  >
                    {localeNames[code]}
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label={dict.ui.footer.ariaLabel} className="md:col-span-3 md:col-start-7">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50">
                {dict.ui.footer.navigate}
              </h2>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                {dict.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-white/85 transition-colors duration-150 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:col-span-3">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50">
                {dict.ui.footer.contact}
              </h2>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                <li>
                  <a
                    href={`mailto:${dict.site.email}`}
                    className="text-white/85 transition-colors duration-150 hover:text-white"
                  >
                    {dict.site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={dict.site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 transition-colors duration-150 hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={dict.site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 transition-colors duration-150 hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 border-t border-white/15 pt-6 text-[13px] text-white/50">
            © {year} {dict.site.name} · {dict.site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
