"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import LangSwitch from "@/app/[lang]/_components/lang-switch";
import ThemeToggle from "@/app/[lang]/_components/theme-toggle";
import LogoMark from "@/app/[lang]/_components/logo-mark";
import { type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function Frame({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const home = `/${lang}`;
  const pathname = usePathname();
  const chapters = pathname.replace(/\/$/, "") === home ? dict.nav : [];
  const count = chapters.length;

  useEffect(() => {
    const nodes = dict.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((node) => node !== null);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = nodes.indexOf(entry.target as HTMLElement);
          if (i < 0) continue;
          setActive(i);
          document.documentElement.dataset.tone =
            (entry.target as HTMLElement).dataset.tone ?? "canvas";
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.tone;
    };
  }, [dict.nav]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = active >= 0 ? chapters[active] : null;

  return (
    <>
      <div aria-hidden className="frame-edge tone-sync" />

      <div className="chrome chrome-top tone-sync">
        <a
          href={`${home}#top`}
          onClick={() => setOpen(false)}
          aria-label={dict.site.name}
          className="flex items-center"
        >
          <LogoMark variant="mono" className="size-6 shrink-0 text-accent" />
        </a>

        <div className="flex items-center gap-2">
          {count ? (
            <>
              <span className="index hidden text-ink-faint sm:block">
                {`${String(Math.max(active + 1, 1)).padStart(2, "0")} / ${String(count).padStart(2, "0")}`}
              </span>
              <span aria-hidden className="hidden h-4 w-px bg-line sm:block" />
            </>
          ) : null}
          <ThemeToggle
            lightTheme={dict.ui.header.lightTheme}
            darkTheme={dict.ui.header.darkTheme}
            label={dict.ui.header.themeLabel}
          />
          <LangSwitch lang={lang} label={dict.ui.header.switchLabel} />
        </div>
      </div>

      <nav
        aria-label={dict.ui.footer.ariaLabel}
        className="chrome chrome-bottom tone-sync"
      >
        {chapters.length ? (
          <div className="hidden min-w-0 flex-1 items-stretch gap-3 lg:flex">
            {chapters.map((item, i) => (
              <a
                key={item.href}
                href={`${home}${item.href}`}
                className="chapter-link group"
                {...(i === active ? { "data-active": "true" } : {})}
              >
                <span className="chapter-label">
                  {String(i + 1).padStart(2, "0")} {item.label}
                </span>
                <span
                  aria-hidden
                  className="chapter"
                  {...(i === active ? { "aria-current": "true" } : {})}
                />
              </a>
            ))}
          </div>
        ) : (
          <a
            href={home}
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {dict.tools.backLabel}
          </a>
        )}

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          className="eyebrow flex items-center gap-2.5 text-ink lg:hidden"
        >
          {current ? `${String(active + 1).padStart(2, "0")} ${current.label}` : dict.ui.header.menu}
          <span aria-hidden className="flex flex-col gap-[3px]">
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
          </span>
        </button>

        <a
          href={`${home}#contact`}
          className="btn btn-primary btn-sm hidden shrink-0 lg:inline-flex"
        >
          {dict.ui.header.cta}
        </a>
      </nav>

      {open ? (
        <div className="menu-sheet tone-sync animate-panel-in lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={dict.ui.header.closeMenu}
            className="absolute right-5 top-5 flex size-10 items-center justify-center border border-line text-ink"
          >
            <X className="size-4" aria-hidden />
          </button>

          <ul>
            {dict.nav.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={`${home}${item.href}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-3xl leading-tight text-ink">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3">
            <LangSwitch lang={lang} label={dict.ui.header.switchLabel} />
          </div>

          <a
            href={`${home}#contact`}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 flex"
          >
            {dict.ui.header.cta}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      ) : null}
    </>
  );
}
