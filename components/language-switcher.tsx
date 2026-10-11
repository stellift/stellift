"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronIcon, GlobeIcon } from "@/components/icons";
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
        className="flex items-center gap-1.5 rounded-full border border-line py-2 pl-3 pr-2.5 text-[13px] font-semibold text-ink transition-colors duration-150 hover:bg-surface"
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
          className="animate-panel-in absolute right-0 top-full z-50 mt-2 w-44 rounded-[16px] border border-line bg-paper p-1.5 shadow-panel"
        >
          {locales.map((code) => (
            <li key={code}>
              <a
                href={`/${code}`}
                hrefLang={code}
                aria-current={code === lang ? "true" : undefined}
                className={`flex items-center justify-between gap-3 rounded-[11px] px-3 py-2 text-[14px] transition-colors duration-150 ${
                  code === lang
                    ? "bg-surface font-semibold text-ink"
                    : "text-ink-2 hover:bg-surface hover:text-ink"
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
      ) : null}
    </div>
  );
}
