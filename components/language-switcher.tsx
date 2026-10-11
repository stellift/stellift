"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronIcon, GlobeIcon } from "@/components/icons";
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
        className="flex items-center gap-1.5 border-2 border-rule px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-ink transition-colors duration-100 hover:bg-ink hover:text-white"
      >
        <GlobeIcon className="h-4 w-4 text-ink-2" />
        {lang.slice(0, 2).toUpperCase()}
        <ChevronIcon
          direction={open ? "up" : "down"}
          className="h-3 w-3 text-ink-3"
        />
      </button>

      {open ? (
        <ul
          id="language-menu"
          aria-label={label}
          className="animate-panel-in absolute right-0 top-full z-50 mt-2 w-44 border-2 border-rule bg-paper"
        >
          {locales.map((code) => (
            <li key={code}>
              <a
                href={`/${code}`}
                hrefLang={code}
                aria-current={code === lang ? "true" : undefined}
                className={`flex items-center justify-between gap-3 border-b-2 border-rule px-3 py-2.5 text-[12px] font-bold uppercase tracking-[0.06em] last:border-b-0 transition-colors duration-100 ${
                  code === lang ? "bg-ink text-white" : "text-ink hover:bg-wash"
                }`}
              >
                {localeNames[code]}
                {code === lang ? (
                  <span aria-hidden className="h-2 w-2 shrink-0 bg-red" />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
