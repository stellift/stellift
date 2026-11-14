import Link from "next/link";
import JsonLd from "@/app/[lang]/_components/json-ld";
import { clinicSchema } from "@/app/exemplos/clinica-dermatologia/schema";

const doctor = {
  name: "Dra. Lívia Andrade",
  title: "MÉDICA",
  crm: "CRM-SP 000000",
  specialty: "Dermatologia",
  rqe: "RQE 00000",
};

const clinic = {
  name: "Clínica Vértice",
  registry: "Cadastro CRM-SP 000000",
  address: "Rua Exemplo, 100, sala 42",
  district: "Pinheiros, São Paulo, SP",
  phone: "(11) 0000-0000",
  hours: "Segunda a sexta, das 8h às 18h",
  price: "R$ 450",
};

const nav = [
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#medica", label: "A médica" },
  { href: "#valores", label: "Valores" },
  { href: "#como-chegar", label: "Como chegar" },
];

const treatments = [
  {
    name: "Consulta dermatológica",
    text:
      "Avaliação da pele, do cabelo e das unhas. Serve para uma queixa " +
      "específica ou para uma revisão geral, quando faz tempo que você não " +
      "passa no dermatologista.",
  },
  {
    name: "Pintas e manchas",
    text:
      "Exame das pintas com dermatoscópio, um aparelho de aumento que " +
      "mostra estruturas que o olho não vê. Ajuda a decidir o que só precisa " +
      "ser acompanhado e o que precisa de biópsia.",
  },
  {
    name: "Acne na vida adulta",
    text:
      "A acne que aparece ou volta depois dos 25 anos costuma ter causas " +
      "diferentes da acne da adolescência. O tratamento depende da causa, e " +
      "por isso começa por ela.",
  },
  {
    name: "Queda de cabelo",
    text:
      "Queda pode vir de estresse, de alteração hormonal, de falta de " +
      "nutrientes ou de causa genética. A consulta inclui exame do couro " +
      "cabeludo e, quando precisa, pedido de exames de sangue.",
  },
];

const firstVisit = [
  {
    step: "Antes",
    text:
      "Traga exames recentes e a lista dos remédios e cosméticos que você " +
      "usa. Se a queixa for uma mancha que muda, uma foto antiga ajuda.",
  },
  {
    step: "Durante",
    text:
      "A consulta dura cerca de 40 minutos. Tem conversa, exame da pele e, " +
      "no fim, a explicação do que foi visto e do que vem a seguir.",
  },
  {
    step: "Depois",
    text:
      "Você sai com a orientação por escrito. Dúvidas sobre a receita podem " +
      "ser tiradas pelo WhatsApp da clínica em até 15 dias.",
  },
];

const abcde = [
  { letter: "A", name: "Assimetria", text: "Uma metade da pinta não é igual à outra." },
  { letter: "B", name: "Bordas", text: "Contorno irregular, borrado ou serrilhado." },
  { letter: "C", name: "Cor", text: "Mais de uma cor na mesma pinta, ou tons misturados." },
  { letter: "D", name: "Diâmetro", text: "Maior que 6 mm, mais ou menos o tamanho de uma borracha de lápis." },
  { letter: "E", name: "Evolução", text: "Mudou de tamanho, forma ou cor, ou começou a coçar ou sangrar." },
];

const facts = [
  { label: "Responsável", value: `${doctor.name} · ${doctor.title}` },
  { label: "Registro", value: `${doctor.crm} · ${doctor.specialty} · ${doctor.rqe}` },
  { label: "Consulta particular", value: clinic.price },
  { label: "Atendimento", value: clinic.hours },
];

export default function ClinicDemo() {
  return (
    <>
      <JsonLd data={clinicSchema} />
      <div className="bg-pine-deep text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 text-xs sm:px-8">
          <p>
            Página de exemplo feita pela stellift. Clínica, médica e registros são
            fictícios.
          </p>
          <Link
            href="/pt-BR/landing-page-para-medicos"
            className="font-semibold underline underline-offset-4"
          >
            Quero uma página assim
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#inicio" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl tracking-tight text-pine-deep">Vértice</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-ink-faint sm:inline">
              Dermatologia
            </span>
          </a>
          <nav aria-label="Seções" className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-pine-deep">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#agendar"
            className="rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-pine-deep"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="rise text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Consultório em Pinheiros, São Paulo
            </p>
            <h1 className="rise rise-2 mt-6 font-serif text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-ink">
              Dermatologia com tempo para{" "}
              <em className="text-pine">explicar</em> o que está acontecendo com a sua pele.
            </h1>
            <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Consultas de 40 minutos, com exame completo e orientação por escrito.
              Atendimento particular, com nota fiscal e relatório para pedir
              reembolso ao seu plano.
            </p>
            <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
              <a
                href="#agendar"
                className="rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-pine-deep"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href="#tratamentos"
                className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
              >
                Ver tratamentos
              </a>
            </div>
          </div>

          <aside
            aria-label="Informações da consulta"
            className="rise rise-3 self-center rounded-[1.75rem] border border-line bg-card p-7 shadow-[0_1px_0_rgba(28,35,32,0.04),0_24px_48px_-28px_rgba(28,35,32,0.35)] sm:p-8 lg:col-span-5"
          >
            <div className="flex items-center gap-4">
              <div
                aria-hidden
                className="grid size-14 shrink-0 place-items-center rounded-full bg-pine-soft font-serif text-xl text-pine-deep"
              >
                LA
              </div>
              <div>
                <p className="font-serif text-xl text-ink">{doctor.name}</p>
                <p className="text-sm text-ink-faint">{doctor.specialty}</p>
              </div>
            </div>
            <dl className="mt-7 divide-y divide-line border-t border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-faint">{fact.label}</dt>
                  <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              {clinic.address}, {clinic.district}
            </p>
          </aside>
        </section>

        <section id="tratamentos" className="border-t border-line bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid gap-6 lg:grid-cols-12">
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.01em] text-ink lg:col-span-5 lg:text-5xl">
                O que é atendido aqui
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-3">
                Dermatologia clínica: diagnóstico e tratamento de doenças da pele,
                do cabelo e das unhas. Procedimentos estéticos não são feitos neste
                consultório.
              </p>
            </div>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2">
              {treatments.map((treatment, index) => (
                <li key={treatment.name} className="bg-card p-8 sm:p-10">
                  <span className="font-serif text-sm italic text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-ink">{treatment.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{treatment.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="abcde-title" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Para ler em casa</p>
              <h2 id="abcde-title" className="mt-5 font-serif text-4xl leading-tight text-ink lg:text-5xl">
                Quando uma pinta merece avaliação
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                Dermatologistas usam a regra do ABCDE para ensinar o que observar.
                Ter um desses sinais não quer dizer que a pinta seja um câncer.
                Quer dizer que vale mostrar para um dermatologista.
              </p>
            </div>
            <ol className="grid gap-px self-start overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {abcde.map((item) => (
                <li key={item.letter} className="flex gap-5 bg-paper p-6 last:sm:col-span-2">
                  <span aria-hidden className="font-serif text-5xl leading-none text-pine">
                    {item.letter}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.name}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="medica" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <div
                aria-hidden
                className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-pine-soft"
              >
                <div className="absolute inset-x-10 bottom-0 top-16 rounded-t-full bg-pine/15" />
                <div className="absolute left-1/2 top-[22%] size-28 -translate-x-1/2 rounded-full bg-pine/20" />
                <p className="absolute inset-x-0 bottom-6 text-center text-xs uppercase tracking-[0.2em] text-pine-deep/70">
                  Foto da médica
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">A médica</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink lg:text-5xl">
                {doctor.name}
              </h2>
              <p className="mt-2 text-sm text-ink-faint">
                {doctor.title} · {doctor.crm} · {doctor.specialty} · {doctor.rqe}
              </p>
              <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Formada em Medicina, com residência em Dermatologia e título de
                  especialista registrado no Conselho Regional de Medicina de São
                  Paulo.
                </p>
                <p>
                  Atende só em consultório, com agenda espaçada para que cada consulta
                  tenha o tempo de exame e de conversa que ela pede.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-pine-deep text-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight lg:text-5xl">
              Como é a primeira consulta
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {firstVisit.map((item) => (
                <li key={item.step} className="border-t border-paper/25 pt-6">
                  <h3 className="font-serif text-2xl italic">{item.step}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-paper/80">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="valores" className="border-t border-line bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Valores</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink lg:text-5xl">
                Consulta particular
              </h2>
              <p className="mt-6 font-serif text-6xl tracking-tight text-pine">{clinic.price}</p>
              <p className="mt-3 text-sm text-ink-faint">Retorno em até 30 dias incluído.</p>
            </div>
            <dl className="grid gap-px self-center overflow-hidden rounded-[1.5rem] border border-line bg-line lg:col-span-6 lg:col-start-7">
              {[
                { label: "Pagamento", value: "Pix, cartão de débito ou crédito em até 3 vezes." },
                {
                  label: "Reembolso",
                  value:
                    "Emitimos nota fiscal e relatório médico para você pedir o " +
                    "reembolso ao seu plano, conforme as regras dele.",
                },
                {
                  label: "Procedimentos",
                  value:
                    "Quando um procedimento é indicado, o valor é informado e " +
                    "combinado com você antes de ser feito.",
                },
              ].map((row) => (
                <div key={row.label} className="bg-card p-7">
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-faint">{row.label}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="como-chegar" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Como chegar</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink lg:text-5xl">
                {clinic.district.split(",")[0]}
              </h2>
              <address className="mt-6 not-italic text-base leading-relaxed text-ink-soft">
                {clinic.address}
                <br />
                {clinic.district}
              </address>
              <ul className="mt-7 space-y-3 text-[15px] text-ink-soft">
                <li>Estacionamento conveniado no prédio.</li>
                <li>Entrada sem degraus e elevador até a sala.</li>
                <li>{clinic.hours}.</li>
              </ul>
            </div>
            <div
              aria-hidden
              className="relative min-h-72 overflow-hidden rounded-[1.75rem] border border-line bg-paper-deep lg:col-span-6 lg:col-start-7"
            >
              <svg viewBox="0 0 600 400" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
                <g stroke="#cfc5b5" strokeWidth="14" fill="none" strokeLinecap="round">
                  <path d="M-20 120 L620 60" />
                  <path d="M-20 300 L620 250" />
                  <path d="M150 -20 L210 420" />
                  <path d="M420 -20 L380 420" />
                </g>
                <g stroke="#e3dacb" strokeWidth="6" fill="none">
                  <path d="M-20 200 L620 160" />
                  <path d="M300 -20 L300 420" />
                </g>
                <circle cx="300" cy="182" r="34" fill="#2d4a3e" opacity="0.14" />
                <circle cx="300" cy="182" r="11" fill="#2d4a3e" />
              </svg>
              <p className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.2em] text-ink-faint">
                Mapa
              </p>
            </div>
          </div>
        </section>

        <section id="agendar" className="border-t border-line bg-card">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <h2 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">Agendar consulta</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              A secretária responde no horário de atendimento. Para marcar, basta
              nome e telefone. O motivo da consulta você conta para a médica.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#agendar"
                className="rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-pine-deep"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="#agendar"
                className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
              >
                Ligar: {clinic.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm text-ink-soft sm:px-8 md:grid-cols-2">
          <div>
            <p className="font-serif text-xl text-pine-deep">{clinic.name}</p>
            <p className="mt-2">{clinic.registry}</p>
            <p>
              Diretora técnica: {doctor.name}, {doctor.title}, {doctor.crm},{" "}
              {doctor.specialty}, {doctor.rqe}
            </p>
          </div>
          <div className="md:text-right">
            <p>
              {clinic.address}, {clinic.district}
            </p>
            <p>{clinic.phone}</p>
            <p className="mt-4 text-xs text-ink-faint">
              Exemplo da stellift. Nomes, endereço, telefone e registros não existem.
            </p>
          </div>
        </div>
      </footer>

      <div className="sticky bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a
          href="#agendar"
          className="block rounded-full bg-pine py-3.5 text-center text-sm font-semibold text-paper"
        >
          Agendar consulta
        </a>
      </div>
    </>
  );
}
