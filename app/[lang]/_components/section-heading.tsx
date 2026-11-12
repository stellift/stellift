import type { ReactNode } from "react";
import Star from "@/app/[lang]/_components/star";

export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="reveal">
      <div className="flex items-center gap-4">
        <span className="index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
        <span aria-hidden className="h-px flex-1 bg-line" />
        <Star className="size-2.5 shrink-0 text-line-strong" />
      </div>

      <h2
        id={id}
        className="reveal-line mt-8 max-w-3xl font-serif text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] tracking-[-0.025em] text-ink"
      >
        <span>{title}</span>
      </h2>

      {children ? (
        <p className="reveal mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-muted">
          {children}
        </p>
      ) : null}
    </header>
  );
}
