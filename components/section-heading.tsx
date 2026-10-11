import type { ReactNode } from "react";
export default function SectionHeading({
  id,
  label,
  title,
  lead,
  align = "left",
}: {
  id?: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-link">
        {label}
      </p>
      <h2
        id={id}
        className="mt-3 text-balance font-display text-[2rem] font-normal leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.5rem]"
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-pretty text-[17px] leading-[1.65] text-ink-2 ${
            centered ? "mx-auto" : ""
          } max-w-[58ch]`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}