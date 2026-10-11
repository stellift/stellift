import type { ReactNode } from "react";

export default function SectionHeading({
  id,
  title,
  lead,
  align = "left",
}: {
  id?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2
        id={id}
        className="text-balance font-display text-[2.25rem] font-normal leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]"
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
