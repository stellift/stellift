"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/language-switcher";
import { ChevronIcon } from "@/components/icons";
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
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const raised = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 bg-paper ${
        raised ? "border-rule" : "border-rule"
      }`}
    >
      <div
        className="mx-auto flex h-16 max-w-[96rem] items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="text-[22px] font-extrabold uppercase tracking-[-0.03em] text-ink"
        >
          {dict.site.name}
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`whitespace-nowrap px-2 py-1 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors duration-100 ${
                active === item.href
                  ? "bg-ink text-white"
                  : "text-ink hover:bg-wash"
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
            className="hidden whitespace-nowrap bg-red px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-100 hover:bg-ink lg:inline-flex"
          >
            {dict.ui.header.cta}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.ui.header.closeMenu : dict.ui.header.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border-2 border-rule bg-paper text-ink transition-colors duration-100 hover:bg-ink hover:text-white lg:hidden"
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
          className="mx-auto max-w-6xl px-5 pb-4 sm:px-8 lg:hidden"
        >
          <div className="animate-panel-in border-2 border-rule bg-paper">
            <ul>
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.href ? "true" : undefined}
                    className={`flex items-center justify-between gap-3 border-b-2 border-rule px-4 py-3 text-[14px] font-bold uppercase tracking-[0.06em] transition-colors duration-100 ${
                      active === item.href
                        ? "bg-ink text-white"
                        : "text-ink hover:bg-wash"
                    }`}
                  >
                    {item.label}
                    <ChevronIcon className="h-3.5 w-3.5 shrink-0 text-ink-3" />
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <p className="px-4 pb-2 pt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-3">
                {dict.ui.header.switchLabel}
              </p>
              <ul>
                {locales.map((code) => (
                  <li key={code}>
                    <a
                      href={`/${code}`}
                      hrefLang={code}
                      aria-current={code === lang ? "true" : undefined}
                      className={`flex items-center justify-between gap-3 px-4 py-3 text-[14px] font-bold uppercase tracking-[0.06em] transition-colors duration-100 ${
                        code === lang
                          ? "bg-wash text-ink"
                          : "text-ink hover:bg-wash"
                      }`}
                    >
                      {localeNames[code]}
                      {code === lang ? (
                        <span aria-hidden className="h-2.5 w-2.5 shrink-0 bg-red" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center bg-red px-5 py-4 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-100 hover:bg-ink"
            >
              {dict.ui.header.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
