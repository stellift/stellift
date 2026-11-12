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
    <header>
      <div className="flex items-center gap-4">
        <span className="index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
        <span aria-hidden className="h-px flex-1 bg-line" />
        <Star className="size-2.5 shrink-0 text-line-strong" />
      </div>

      <h2
        id={id}
        className="mt-7 max-w-3xl text-balance font-serif text-[2rem] leading-[1.08] text-ink sm:text-5xl"
      >
        {title}
      </h2>

      {children ? (
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-muted">
          {children}
        </p>
      ) : null}
    </header>
  );
}
