import type { ReactNode } from "react";
import { ChevronIcon } from "@/components/icons";
export default function Card({
  category,
  title,
  text,
  href,
  action = "Falar sobre isso",
  plate,
  children,
}: {
  category: string;
  title: string;
  text: string;
  href: string;
  action?: string;
  plate?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper shadow-card">
      {plate ? (
        <div className="border-b border-line bg-surface px-7 py-6 text-navy">
          {plate}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
        <p>
          <span className="inline-flex rounded-full bg-link/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
            {category}
          </span>
        </p>

        <h3 className="mt-4 font-display text-[1.5rem] font-medium leading-[1.2] tracking-[-0.01em] text-link">
          <a href={href} className="transition-colors duration-150 hover:text-navy">
            {title}
          </a>
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-ink-2">
          {text}
        </p>

        {children}

        <p className="mt-6">
          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors duration-150 hover:text-link"
          >
            {action}
            <ChevronIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </article>
  );
}