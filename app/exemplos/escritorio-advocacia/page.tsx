import Link from "next/link";
import JsonLd from "@/app/[lang]/_components/json-ld";
import { lawFirmSchema } from "@/app/exemplos/escritorio-advocacia/schema";

const firm = {
  name: "Lemos Prado Advocacia",
  registry: "Sociedade registrada na OAB/SP sob o nº 00.000",
  address: "Avenida Exemplo, 1000, conjunto 81",
  district: "Jardim Paulista, São Paulo, SP",
  phone: "(11) 0000-0000",
  hours: "Segunda a sexta, das 9h às 18h",
  languages: "Português e inglês",
};

const lawyers = [
  {
    name: "Helena Lemos",
    oab: "OAB/SP 000.000",
    initials: "HL",
    titles: "Mestre em Direito Civil. Atua em inventários e planejamento sucessório.",
  },
  {
    name: "Rafael Prado",
    oab: "OAB/SP 000.000",
    initials: "RP",
    titles: "Pós-graduado em Direito de Família. Atua em divórcios e partilhas.",
  },
];

const areas = [
  {
    name: "Inventário e partilha",
    text:
      "Levantamento dos bens e das dívidas, cálculo do imposto de transmissão e " +
      "divisão entre os herdeiros, em cartório ou na Justiça, conforme o caso " +
      "permitir.",
  },
  {
    name: "Planejamento sucessório",
    text:
      "Organização do patrimônio em vida: doação com reserva de usufruto, " +
      "testamento e regras de convivência entre herdeiros que são sócios do " +
      "mesmo negócio.",
  },
  {
    name: "Testamento",
    text:
      "Redação e revisão de testamento público ou particular, com explicação " +
      "do que a lei permite dispor e do que fica reservado aos herdeiros " +
      "necessários.",
  },
  {
    name: "Divórcio e partilha de bens",
    text:
      "Divórcio consensual ou litigioso, com atenção ao regime de bens, à " +
      "guarda e à pensão quando há filhos.",
  },
];

const nav = [
  { href: "#areas", label: "Áreas" },
  { href: "#advogados", label: "Advogados" },
  { href: "#inventario", label: "Inventário em cartório" },
  { href: "#contato", label: "Contato" },
];

export default function LawFirmDemo() {
  return (
    <>
      <JsonLd data={lawFirmSchema} />
      <div className="bg-navy-deep text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 text-xs sm:px-8">
          <p>
            Página de exemplo feita pela stellift. Escritório, advogados e registros
            são fictícios.
          </p>
          <Link
            href="/pt-BR/landing-page-para-advogados"
            className="font-semibold underline underline-offset-4"
          >
            Quero uma página assim
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#inicio" className="flex items-baseline gap-2.5">
            <span className="font-serif text-2xl font-semibold tracking-tight text-navy">
              Lemos Prado
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.24em] text-ink-faint sm:inline">
              Advocacia
            </span>
          </a>
          <nav aria-label="Seções" className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-navy">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="border border-navy bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep"
          >
            Falar com o escritório
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="rise text-xs font-medium uppercase tracking-[0.24em] text-brass">
              Família e sucessões · São Paulo
            </p>
            <h1 className="rise rise-2 mt-6 font-serif text-[clamp(2.75rem,6.2vw,5rem)] font-semibold leading-[1] tracking-[-0.01em] text-ink">
              Inventário, partilha e planejamento sucessório.
            </h1>
            <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Atuamos em inventários judiciais e em cartório, testamentos, doações
              e divórcios com partilha de bens. A primeira conversa serve para
              entender o caso e dizer qual caminho a lei permite.
            </p>
            <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="border border-navy bg-navy px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep"
              >
                Agendar uma conversa
              </a>
              <a
                href="#areas"
                className="border border-ink/25 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-navy"
              >
                Ver áreas de atuação
              </a>
            </div>
          </div>

          <aside
            aria-label="Dados do escritório"
            className="rise rise-3 self-center border border-line bg-card p-7 sm:p-8 lg:col-span-5"
          >
            <p className="font-serif text-2xl font-semibold text-navy">{firm.name}</p>
            <p className="mt-1 text-sm text-ink-faint">{firm.registry}</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {lawyers.map((lawyer) => (
                <li key={lawyer.name} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="text-sm font-medium text-ink">{lawyer.name}</span>
                  <span className="text-sm text-ink-soft">{lawyer.oab}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                { label: "Atendimento", value: firm.hours },
                { label: "Idiomas", value: firm.languages },
                { label: "Endereço", value: `${firm.address}, ${firm.district}` },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-3">
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-faint">{row.label}</dt>
                  <dd className="text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section id="areas" className="border-t border-line bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              Áreas de atuação
            </h2>
            <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
              {areas.map((area) => (
                <li key={area.name} className="bg-card p-8 sm:p-10">
                  <h3 className="font-serif text-2xl font-semibold text-navy">{area.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{area.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="advogados" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              Advogados
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-2">
              {lawyers.map((lawyer) => (
                <li key={lawyer.name} className="flex gap-6">
                  <div
                    aria-hidden
                    className="grid size-24 shrink-0 place-items-center bg-paper-deep font-serif text-3xl font-semibold text-navy"
                  >
                    {lawyer.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-ink">{lawyer.name}</h3>
                    <p className="text-sm text-ink-faint">{lawyer.oab}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{lawyer.titles}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="inventario" className="border-t border-line bg-navy text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-paper/60">Para entender</p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight lg:text-5xl">
                Inventário em cartório: quando é possível
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-paper/85 lg:col-span-6 lg:col-start-7">
              <p>
                Pelo Código de Processo Civil, quando todos os herdeiros são capazes
                e estão de acordo, o inventário e a partilha podem ser feitos por
                escritura pública, no cartório (art. 610, §1º). Os herdeiros
                precisam estar assistidos por advogado (art. 610, §2º).
              </p>
              <p>
                O mesmo artigo manda para a Justiça os casos com testamento ou com
                herdeiro incapaz. Em 2024 o Conselho Nacional de Justiça abriu
                exceções para esses dois casos, com condições próprias, e as
                corregedorias de cada estado aplicam a regra de formas diferentes.
              </p>
              <p>
                Por isso a resposta depende de quem são os herdeiros, se há
                testamento e em que estado está o patrimônio.
              </p>
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-line bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl font-semibold leading-tight text-ink lg:text-5xl">Contato</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                Para marcar uma conversa, basta nome e telefone. Os detalhes do caso
                ficam para a conversa com o advogado.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="border border-navy bg-navy px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep"
                >
                  WhatsApp do escritório
                </a>
                <a
                  href="#contato"
                  className="border border-ink/25 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-navy"
                >
                  {firm.phone}
                </a>
              </div>
            </div>
            <address className="not-italic text-[15px] leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8">
              <p className="font-serif text-2xl font-semibold text-ink">{firm.name}</p>
              <p className="mt-3">
                {firm.address}
                <br />
                {firm.district}
              </p>
              <p className="mt-3">{firm.hours}</p>
              <p>Atendimento em {firm.languages.toLowerCase()}</p>
            </address>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 text-sm text-ink-soft sm:px-8 md:grid-cols-2">
          <div>
            <p className="font-serif text-xl font-semibold text-navy">{firm.name}</p>
            <p className="mt-2">{firm.registry}</p>
            <p>
              {lawyers.map((lawyer) => `${lawyer.name}, ${lawyer.oab}`).join(" · ")}
            </p>
          </div>
          <p className="text-xs text-ink-faint md:text-right">
            Exemplo da stellift. Nomes, endereço, telefone e registros não existem.
          </p>
        </div>
      </footer>

      <div className="sticky bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a
          href="#contato"
          className="block bg-navy py-3.5 text-center text-sm font-medium text-paper"
        >
          Falar com o escritório
        </a>
      </div>
    </>
  );
}
