import type { ReactNode } from "react";

/**
 * O título de seção é um campo: a palavra ocupa a largura, não paira sobre
 * ela. A marca é um bloco vermelho, não um número — numerar seções é um
 * padrão da categoria que a sequência aqui não justifica.
 */
export default function SectionHeading({
  id,
  title,
}: {
  id?: string;
  title: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 border-b-2 border-rule pb-4 sm:gap-6">
      <span aria-hidden className="mt-3 h-4 w-4 shrink-0 bg-red sm:mt-5 sm:h-6 sm:w-6" />
      <h2
        id={id}
        className="font-sans text-[2.5rem] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-ink sm:text-[4rem] lg:text-[5.5rem]"
      >
        {title}
      </h2>
    </div>
  );
}
