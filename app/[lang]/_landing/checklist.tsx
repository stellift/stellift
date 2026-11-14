"use client";

import { useState } from "react";

type Item = { id: string; text: string; source: string };

export default function Checklist({
  items,
  email,
  subject,
}: {
  items: Item[];
  email: string;
  subject: string;
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const done = items.filter((item) => checked[item.id]).length;
  const missing = items.filter((item) => !checked[item.id]);
  const body =
    "Conferi minha página no checklist da stellift. Faltaram estes itens:\n\n" +
    missing.map((item) => `- ${item.text}`).join("\n") +
    "\n\nEndereço da minha página atual: ";
  const mailto =
    `mailto:${email}?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  return (
    <div className="grid-ruled lg:grid-cols-12">
      <fieldset className="cell p-0 lg:col-span-8">
        <legend className="sr-only">Itens da página atual</legend>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="border-b border-line last:border-b-0">
              <label className="flex cursor-pointer items-start gap-4 px-6 py-4 transition-colors hover:bg-surface sm:px-7">
                <input
                  type="checkbox"
                  checked={Boolean(checked[item.id])}
                  onChange={(event) =>
                    setChecked((prev) => ({ ...prev, [item.id]: event.target.checked }))
                  }
                  className="mt-1 size-4 shrink-0 accent-(--color-accent)"
                />
                <span className="text-sm leading-relaxed text-ink">
                  {item.text}{" "}
                  <span className="font-mono text-[11px] text-ink-faint">{item.source}</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <div className="cell flex flex-col justify-between gap-8 p-7 lg:col-span-4">
        <div aria-live="polite">
          <p className="font-serif text-5xl tabular-nums leading-none text-ink">
            {done}
            <span className="text-ink-faint">/{items.length}</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {done === items.length
              ? "Tudo em ordem nestes pontos. Se a página ainda não traz pacientes, o problema é outro, e a gente pode olhar junto."
              : done === 0
                ? "Marque o que a sua página atual já faz."
                : `Faltam ${missing.length}. O e-mail abaixo já vai com a lista do que faltou.`}
          </p>
        </div>
        <a href={mailto} className="btn btn-outline">
          {done === items.length ? "Conversar sobre a página" : "Pedir ajuste da página"}
        </a>
      </div>
    </div>
  );
}
