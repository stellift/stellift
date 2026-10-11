import type { ReactNode } from "react";

export default function SectionHeading({
  id,
  title,
  children,
}: {
  id?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      <h2
        id={id}
        className="text-balance font-serif text-3xl leading-tight text-ink sm:text-[40px]"
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
