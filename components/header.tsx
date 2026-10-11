"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/language-switcher";
import { CheckIcon, ChevronIcon } from "@/components/icons";
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
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
        raised
          ? "border-line bg-canvas shadow-[0_10px_30px_-24px_rgb(11_26_51/0.55)] backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/80"
          : "border-transparent bg-canvas"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 transition-[height] duration-200 sm:px-8 ${
          scrolled ? "h-16" : "h-[4.5rem]"
        }`}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="text-[21px] font-semibold tracking-[-0.01em] text-ink"
        >
          {dict.site.name}
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`relative whitespace-nowrap text-[15px] transition-colors duration-150 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-navy after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100 ${
                active === item.href
                  ? "text-ink after:scale-x-100"
                  : "text-ink-2 after:scale-x-0"
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
            className="hidden whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-[14px] font-semibold text-white shadow-card transition duration-150 hover:-translate-y-px hover:bg-ink lg:inline-flex"
          >
            {dict.ui.header.cta}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.ui.header.closeMenu : dict.ui.header.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-card transition-colors duration-150 hover:bg-surface lg:hidden"
          >
            <span aria-hidden className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-200 ${
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
          <div className="animate-panel-in rounded-card border border-line bg-paper p-2 shadow-panel">
            <ul>
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.href ? "true" : undefined}
                    className={`flex items-center justify-between gap-3 rounded-[14px] px-4 py-3 text-[15px] transition-colors duration-150 ${
                      active === item.href
                        ? "bg-surface font-semibold text-ink"
                        : "text-ink hover:bg-surface"
                    }`}
                  >
                    {item.label}
                    <ChevronIcon className="h-3.5 w-3.5 shrink-0 text-ink-3" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-2 border-t border-line pt-2">
              <p className="px-4 pb-1 pt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-3">
                {dict.ui.header.switchLabel}
              </p>
              <ul>
                {locales.map((code) => (
                  <li key={code}>
                    <a
                      href={`/${code}`}
                      hrefLang={code}
                      aria-current={code === lang ? "true" : undefined}
                      className={`flex items-center justify-between gap-3 rounded-[14px] px-4 py-3 text-[15px] transition-colors duration-150 ${
                        code === lang
                          ? "bg-surface font-semibold text-ink"
                          : "text-ink hover:bg-surface"
                      }`}
                    >
                      {localeNames[code]}
                      {code === lang ? (
                        <CheckIcon className="h-3.5 w-3.5 shrink-0 text-link" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center rounded-full bg-navy px-5 py-3 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-ink"
            >
              {dict.ui.header.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
