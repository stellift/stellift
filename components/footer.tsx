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
    <footer className="border-t-2 border-rule bg-ink text-white">
      <div className="mx-auto max-w-[96rem] px-5 py-12 sm:px-8 sm:py-16">
        <div className="field gap-x-4 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <a
              href="#top"
              className="text-[22px] font-extrabold uppercase tracking-[-0.03em] text-white"
            >
              {dict.site.name}
            </a>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-[1.6] text-white/70">
              {dict.ui.footer.description}
            </p>

            <div className="mt-8 flex">
              {locales.map((code) => (
                <a
                  key={code}
                  href={`/${code}`}
                  hrefLang={code}
                  aria-current={code === lang ? "true" : undefined}
                  className={`border-2 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] transition-colors duration-100 ${
                    code === lang
                      ? "border-white bg-white text-ink"
                      : "border-white/40 text-white/70 hover:border-white hover:text-white"
                  }`}
                >
                  {localeNames[code]}
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label={dict.ui.footer.ariaLabel}
            className="col-span-6 lg:col-span-3 lg:col-start-7"
          >
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
              {dict.ui.footer.navigate}
            </h2>
            <ul className="mt-5">
              {dict.nav.map((item) => (
                <li key={item.href} className="border-b border-white/15">
                  <a
                    href={item.href}
                    className="block py-2.5 text-[14px] font-bold uppercase tracking-[0.04em] text-white/85 transition-colors duration-100 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
              {dict.ui.footer.contact}
            </h2>
            <ul className="mt-5">
              {[
                { label: dict.site.email, href: `mailto:${dict.site.email}`, ext: false },
                { label: "LinkedIn", href: dict.site.linkedin, ext: true },
                { label: "GitHub", href: dict.site.github, ext: true },
              ].map((item) => (
                <li key={item.href} className="border-b border-white/15">
                  <a
                    href={item.href}
                    {...(item.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block break-words py-2.5 text-[14px] font-bold uppercase tracking-[0.04em] text-white/85 transition-colors duration-100 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-[12px] uppercase tracking-[0.1em] text-white/50">
          © {year} {dict.site.name} · {dict.site.tagline}
        </p>
      </div>
    </footer>
  );
}
