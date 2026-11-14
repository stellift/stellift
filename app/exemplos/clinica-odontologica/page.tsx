import Link from "next/link";
import JsonLd from "@/app/[lang]/_components/json-ld";
import { dentalSchema } from "@/app/exemplos/clinica-odontologica/schema";

const clinic = {
  name: "Ápice Odontologia",
  registry: "Inscrição no CRO-SP nº 0000",
  address: "Rua Exemplo, 250, Cambuí, Campinas, SP",
  phone: "(19) 0000-0000",
  hours: "Segunda a sexta, das 8h às 19h. Sábado, das 8h às 12h",
};

const team = [
  {
    name: "Dra. Marina Teles",
    initials: "MT",
    title: "Cirurgiã-Dentista",
    cro: "CRO-SP 00000",
    specialty: "Especialista em Implantodontia",
    role: "Responsável técnica",
  },
  {
    name: "Dr. Caio Bastos",
    initials: "CB",
    title: "Cirurgião-Dentista",
    cro: "CRO-SP 00000",
    specialty: "Especialista em Ortodontia",
    role: null,
  },
  {
    name: "Dra. Lúcia Freire",
    initials: "LF",
    title: "Cirurgiã-Dentista",
    cro: "CRO-SP 00000",
    specialty: "Clínica geral",
    role: null,
  },
];

const services = [
  {
    title: "Implantodontia",
    who: "Dra. Marina Teles",
    items: ["Implantes unitários e múltiplos", "Prótese sobre implante", "Enxerto ósseo"],
  },
  {
    title: "Ortodontia",
    who: "Dr. Caio Bastos",
    items: ["Aparelho fixo", "Alinhadores transparentes", "Ortodontia para adultos"],
  },
  {
    title: "Clínica geral",
    who: "Dra. Lúcia Freire",
    items: ["Limpeza e prevenção", "Restaurações", "Tratamento de sensibilidade"],
  },
];

const visit = [
  {
    title: "Conversa e exame",
    text: "O dentista ouve o que está incomodando, examina a boca e diz se precisa de radiografia ou tomografia.",
  },
  {
    title: "Plano por escrito",
    text: "Você recebe o plano de tratamento com as etapas e os custos antes de começar qualquer procedimento.",
  },
  {
    title: "Agenda das etapas",
    text: "As sessões são marcadas na recepção, com lembrete pelo WhatsApp na véspera.",
  },
];

const nav = [
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#primeira-consulta", label: "Primeira consulta" },
  { href: "#contato", label: "Contato" },
];

export default function DentalDemo() {
  return (
    <>
      <JsonLd data={dentalSchema} />
      <div className="bg-teal-deep text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 text-xs sm:px-8">
          <p>Página de exemplo feita pela stellift. Clínica, dentistas e registros são fictícios.</p>
          <Link href="/pt-BR/landing-page-para-dentistas" className="font-semibold underline underline-offset-4">
            Quero uma página assim
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span aria-hidden className="grid size-8 place-items-center rounded-full bg-teal font-serif text-sm text-paper">
              Á
            </span>
            <span className="font-serif text-xl font-semibold text-ink">Ápice</span>
            <span className="hidden text-[11px] uppercase tracking-[0.2em] text-ink-faint sm:inline">Odontologia</span>
          </a>
          <nav aria-label="Seções" className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-teal">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-teal-deep"
          >
            Marcar consulta
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="rise text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Implantodontia, ortodontia e clínica geral · Campinas
            </p>
            <h1 className="rise rise-2 mt-6 font-serif text-[clamp(2.6rem,5.8vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-ink">
              Implantes e aparelho com o especialista de cada área.
            </h1>
            <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Cada tratamento é feito pelo dentista com especialidade registrada no
              CRO naquela área. O plano, com etapas e custos, vem por escrito antes
              de começar.
            </p>
            <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-teal-deep"
              >
                Marcar consulta
              </a>
              <a
                href="#equipe"
                className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
              >
                Conhecer a equipe
              </a>
            </div>
          </div>

          <aside
            aria-label="Equipe e registros"
            className="rise rise-3 self-center rounded-[1.5rem] border border-line bg-card p-7 shadow-[0_24px_48px_-32px_rgba(19,32,28,0.45)] sm:p-8 lg:col-span-5"
          >
            <p className="font-serif text-xl font-semibold text-ink">{clinic.name}</p>
            <p className="text-sm text-ink-faint">{clinic.registry}</p>
            <ul className="mt-6 space-y-4">
              {team.map((member) => (
                <li key={member.name} className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-soft font-serif text-sm font-semibold text-teal-deep"
                  >
                    {member.initials}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-ink">
                      {member.name} <span className="font-normal text-ink-faint">· {member.title}</span>
                    </p>
                    <p className="text-ink-soft">
                      {member.cro} · {member.specialty}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-4 text-sm text-ink-soft">
              Responsável técnica: {team[0].name}, {team[0].cro}
            </p>
          </aside>
        </section>

        <section id="tratamentos" className="border-t border-line bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-ink lg:text-5xl">Tratamentos</h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <li key={service.title} className="rounded-[1.5rem] border border-line bg-paper p-8">
                  <h3 className="font-serif text-2xl font-semibold text-teal-deep">{service.title}</h3>
                  <p className="mt-1 text-sm text-ink-faint">Com {service.who}</p>
                  <ul className="mt-6 space-y-2.5 text-[15px] text-ink-soft">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="equipe" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-ink lg:text-5xl">Equipe</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              Cada especialidade anunciada nesta página tem um especialista
              inscrito no CRO na equipe da clínica.
            </p>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line md:grid-cols-3">
              {team.map((member) => (
                <li key={member.name} className="bg-card p-8">
                  <span
                    aria-hidden
                    className="grid size-16 place-items-center rounded-full bg-teal-soft font-serif text-xl font-semibold text-teal-deep"
                  >
                    {member.initials}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{member.title} · {member.cro}</p>
                  <p className="mt-3 text-sm font-semibold text-teal-deep">{member.specialty}</p>
                  {member.role ? <p className="mt-1 text-sm text-ink-faint">{member.role}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="primeira-consulta" className="border-t border-line bg-teal-deep text-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight lg:text-5xl">
              Como é a primeira consulta
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {visit.map((step, index) => (
                <li key={step.title} className="border-t border-paper/25 pt-6">
                  <span className="font-serif text-sm italic text-paper/60">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-paper/80">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contato" className="border-t border-line bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl font-semibold leading-tight text-ink lg:text-5xl">Marcar consulta</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                A recepção responde no horário de atendimento. Para marcar, basta
                nome e telefone.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contato" className="rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-paper">
                  Chamar no WhatsApp
                </a>
                <a href="#contato" className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink">
                  Ligar: {clinic.phone}
                </a>
              </div>
            </div>
            <address className="not-italic text-[15px] leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8">
              <p className="font-serif text-2xl font-semibold text-ink">{clinic.name}</p>
              <p className="mt-3">{clinic.address}</p>
              <p className="mt-3">{clinic.hours}</p>
              <p className="mt-3">Convênios aceitos: lista atualizada na recepção.</p>
            </address>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 text-sm text-ink-soft sm:px-8 md:grid-cols-2">
          <div>
            <p className="font-serif text-xl font-semibold text-ink">{clinic.name}</p>
            <p className="mt-2">{clinic.registry}</p>
            <p>
              Responsável técnica: {team[0].name}, Cirurgiã-Dentista, {team[0].cro}
            </p>
          </div>
          <p className="text-xs text-ink-faint md:text-right">
            Exemplo da stellift. Nomes, endereço, telefone e registros não existem.
          </p>
        </div>
      </footer>

      <div className="sticky bottom-0 z-30 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href="#contato" className="block rounded-full bg-teal py-3.5 text-center text-sm font-semibold text-paper">
          Marcar consulta
        </a>
      </div>
    </>
  );
}
