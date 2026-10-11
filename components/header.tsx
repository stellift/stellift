"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/language-switcher";
import { ChevronRight } from "lucide-react";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = dict.nav.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);
    if (!sections.length) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = ids.find((id) => visible.has(id));
        setActive(current ? `#${current}` : "");
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [dict.nav]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 64rem)");
    const onDesktop = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onDesktop);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header
      className={"sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md"}
    >
      <div
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-serif text-2xl text-ink"
        >
          {dict.site.name}
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`whitespace-nowrap text-sm transition-colors ${
                active === item.href ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LanguageSwitcher lang={lang} label={dict.ui.header.switchLabel} />
          </div>

          <a
            href="#contact"
            className="btn btn-primary hidden px-5 py-2 text-sm lg:inline-flex"
          >
            {dict.ui.header.cta}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.ui.header.closeMenu : dict.ui.header.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-md border border-line bg-surface text-ink transition-colors hover:bg-surface-muted lg:hidden"
          >
            <span aria-hidden className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute left-0 h-[2px] w-full bg-current transition-all duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[2px] w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full bg-current transition-all duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={dict.ui.header.menu}
          className="mx-auto w-full max-w-6xl px-6 pb-4 lg:hidden"
        >
          <div className="panel animate-panel-in overflow-hidden">
            <ul>
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.href ? "true" : undefined}
                    className={`flex items-center justify-between gap-3 border-b border-line px-4 py-3 text-sm transition-colors ${
                      active === item.href
                        ? "bg-surface-muted text-ink"
                        : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <ChevronRight className="size-4 shrink-0 text-ink-muted" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <p className="field-label px-4 pb-2 pt-4 uppercase">
                {dict.ui.header.switchLabel}
              </p>
              <ul>
                {locales.map((code) => (
                  <li key={code}>
                    <a
                      href={`/${code}`}
                      hrefLang={code}
                      aria-current={code === lang ? "true" : undefined}
                      className={`flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors ${
                        code === lang
                          ? "bg-surface-muted text-ink"
                          : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                      }`}
                    >
                      {localeNames[code]}
                      {code === lang ? (
                        <span aria-hidden className="size-2 shrink-0 rounded-full bg-accent" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary m-3 flex"
            >
              {dict.ui.header.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
