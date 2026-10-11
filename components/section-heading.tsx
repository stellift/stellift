import type { ReactNode } from "react";

/** Gramática do pi.venda: rótulo com quadrado azul, serifa, lead apagado. */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      <p className="section-label">{eyebrow}</p>
      <h2
        id={id}
        className="mt-5 text-balance font-serif text-3xl leading-tight text-ink sm:text-[40px]"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted">
          {children}
        </p>
      ) : null}
    </header>
  );
}
