"use client";

import { useSyncExternalStore } from "react";
import type { MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function noTheme(): Theme | null {
  return null;
}

function apply(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    return;
  }
}

export default function ThemeToggle({
  toLightTheme,
  toDarkTheme,
}: {
  toLightTheme: string;
  toDarkTheme: string;
}) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, noTheme);

  function onClick(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === "light" ? "dark" : "light";
    const doc = document as ViewTransitionDocument;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof doc.startViewTransition !== "function") {
      apply(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const root = document.documentElement;
    root.style.setProperty("--theme-x", `${x}px`);
    root.style.setProperty("--theme-y", `${y}px`);
    root.style.setProperty(
      "--theme-radius",
      `${Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))}px`,
    );
    root.dataset.themeAnimating = "";

    const transition = doc.startViewTransition(() => apply(next));
    transition.finished.finally(() => {
      delete root.dataset.themeAnimating;
    });
  }

  const dark = theme !== "light";
  const Icon = dark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dark ? toLightTheme : toDarkTheme}
      className="flex size-9 items-center justify-center rounded-md border border-line bg-surface text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
    >
      <Icon className={`size-4 ${theme ? "" : "opacity-0"}`} aria-hidden />
    </button>
  );
}
