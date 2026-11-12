"use client";

import { useEffect, useState } from "react";

export type SceneRef = { id: string; label: string };

export default function Hud({ scenes }: { scenes: SceneRef[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = scenes
      .map((scene) => document.getElementById(scene.id))
      .filter((node) => node !== null);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = nodes.indexOf(entry.target as HTMLElement);
          if (i < 0) continue;
          setActive(i);
          const tone = (entry.target as HTMLElement).dataset.tone ?? "canvas";
          document.documentElement.dataset.tone = tone;
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.tone;
    };
  }, [scenes]);

  const total = String(scenes.length).padStart(2, "0");

  return (
    <div aria-hidden className="hud tone-sync">
      <span className="index">{String(active + 1).padStart(2, "0")}</span>
      <span className="h-px w-8 bg-line" />
      <span className="eyebrow whitespace-nowrap">{scenes[active]?.label}</span>
      <span className="index text-ink-faint">{total}</span>
    </div>
  );
}
