import type { ReactNode } from "react";

/**
 * Cabeçalho de setor. O código não é numeração decorativa de seção: numa
 * planta o código é como a região é endereçada, e é por ele que a legenda do
 * hero aponta para cá.
 */
export default function SectionHeading({
  id,
  title,
  code,
}: {
  id?: string;
  title: ReactNode;
  code: string;
}) {
  return (
    <div className="border-b-2 border-rule pb-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue">
        setor {code}
      </p>
      <h2
        id={id}
        className="mt-2 font-sans text-[2.25rem] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-ink sm:text-[3.25rem] lg:text-[4.25rem]"
      >
        {title}
      </h2>
    </div>
  );
}
