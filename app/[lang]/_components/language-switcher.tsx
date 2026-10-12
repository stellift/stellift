"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher({
  lang,
  label,
}: {
  lang: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={`${label}: ${localeNames[lang]}`}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-surface-muted"
      >
        <Globe className="size-4 text-ink-muted" aria-hidden />
        {lang.slice(0, 2).toUpperCase()}
        <ChevronDown
          aria-hidden
          className={`size-3.5 text-ink-muted transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <ul
          id="language-menu"
          aria-label={label}
          className="panel animate-panel-in absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden"
        >
          {locales.map((code) => (
            <li key={code}>
              <a
                href={`/${code}`}
                hrefLang={code}
                aria-current={code === lang ? "true" : undefined}
                className={`flex items-center justify-between gap-3 border-b border-line px-3 py-2.5 text-sm transition-colors last:border-b-0 ${
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
      ) : null}
    </div>
  );
}
