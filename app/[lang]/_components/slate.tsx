import type { ReactNode } from "react";

export default function Slate({
  index,
  label,
  title,
  id,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  id?: string;
  children?: ReactNode;
}) {
  return (
    <header className="reveal">
      <div className="slate">
        <span className="index">{index}</span>
        <span className="eyebrow">{label}</span>
        <span aria-hidden className="h-px flex-1 bg-line" />
      </div>

      <h2
        id={id}
        className="reveal-line mt-10 max-w-[16ch] font-serif text-[clamp(2.25rem,5.6vw,5.5rem)] leading-[0.98] tracking-[-0.03em] text-ink"
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
