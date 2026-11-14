"use client";

import { useId, useState } from "react";

export default function CreciSize() {
  const id = useId();
  const [name, setName] = useState("Casa Alvorada Imóveis");
  const [creci, setCreci] = useState("CRECI 00000-J");
  const [size, setSize] = useState(40);
  const [creciSize, setCreciSize] = useState(8);

  const minimum = Math.ceil(size * 0.25);
  const ok = creciSize >= minimum;

  return (
    <div className="grid-ruled lg:grid-cols-12">
      <form className="cell space-y-6 p-7 lg:col-span-5" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label htmlFor={`${id}-name`} className="field-label mb-2.5">
            Nome da imobiliária
          </label>
          <input
            id={`${id}-name`}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input text-[16px]"
          />
        </div>
        <div>
          <label htmlFor={`${id}-creci`} className="field-label mb-2.5">
            Registro
          </label>
          <input
            id={`${id}-creci`}
            value={creci}
            onChange={(event) => setCreci(event.target.value)}
            className="input text-[16px]"
          />
        </div>
        <div>
          <label htmlFor={`${id}-size`} className="field-label mb-2.5">
            Altura da letra do nome: {size} px
          </label>
          <input
            id={`${id}-size`}
            type="range"
            min={16}
            max={96}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
            className="w-full accent-(--color-accent)"
          />
        </div>
        <div>
          <label htmlFor={`${id}-creci-size`} className="field-label mb-2.5">
            Altura da letra do CRECI: {creciSize} px
          </label>
          <input
            id={`${id}-creci-size`}
            type="range"
            min={4}
            max={48}
            value={creciSize}
            onChange={(event) => setCreciSize(Number(event.target.value))}
            className="w-full accent-(--color-accent)"
          />
        </div>
      </form>

      <div className="cell flex flex-col justify-between gap-8 p-7 lg:col-span-7">
        <div className="overflow-hidden border border-line bg-surface p-6">
          <p className="break-words font-serif leading-none text-ink" style={{ fontSize: `${size}px` }}>
            {name}
          </p>
          <p className="mt-3 font-mono leading-none text-ink-muted" style={{ fontSize: `${creciSize}px` }}>
            {creci}
          </p>
        </div>
        <div aria-live="polite">
          <p className={`font-serif text-2xl ${ok ? "text-ink" : "text-danger"}`}>
            {ok
              ? "O CRECI está dentro do mínimo."
              : `O CRECI precisa de pelo menos ${minimum} px.`}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            A sigla CRECI, o número e a letra J não podem ter tamanho menor que 25% do
            nome da imobiliária. Para um nome em {size} px, o mínimo é {minimum} px.
          </p>
        </div>
      </div>
    </div>
  );
}
