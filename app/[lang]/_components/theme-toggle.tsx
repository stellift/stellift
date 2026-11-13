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

function serverTheme(): Theme {
  return "dark";
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
  lightTheme,
  darkTheme,
  label,
}: {
  lightTheme: string;
  darkTheme: string;
  label: string;
}) {
  const theme = useSyncExternalStore<Theme>(subscribe, readTheme, serverTheme);

  function select(next: Theme, event: MouseEvent<HTMLButtonElement>) {
    if (next === theme) return;

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
    root.setAttribute("data-theme-animating", "");

    const transition = doc.startViewTransition(() => apply(next));
    transition.finished.finally(() => {
      root.removeAttribute("data-theme-animating");
    });
  }

  const options: ReadonlyArray<{ value: Theme; icon: typeof Sun; title: string }> = [
    { value: "light", icon: Sun, title: lightTheme },
    { value: "dark", icon: Moon, title: darkTheme },
  ];

  return (
    <div
      className="seg"
      role="group"
      aria-label={label}
      style={{ "--seg-i": theme === "dark" ? 1 : 0 } as React.CSSProperties}
    >
      <span aria-hidden className="seg-thumb" />
      {options.map(({ value, icon: Icon, title }) => (
        <button
          key={value}
          type="button"
          onClick={(event) => select(value, event)}
          aria-pressed={theme === value}
          aria-label={title}
          title={title}
          {...(theme === value ? { "data-on": "true" } : {})}
          className="seg-item"
        >
          <Icon className="size-3.5" aria-hidden />
        </button>
      ))}
    </div>
  );
}
