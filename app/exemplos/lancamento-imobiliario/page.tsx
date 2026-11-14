import Link from "next/link";
import JsonLd from "@/app/[lang]/_components/json-ld";
import { launchSchema } from "@/app/exemplos/lancamento-imobiliario/schema";

const launch = {
  name: "Mirante Alto",
  address: "Rua Exemplo, 500, Alto de Pinheiros, São Paulo, SP",
  developer: "Incorporadora Exemplo S.A.",
  registry:
    "Incorporação registrada sob o R.0 da matrícula nº 000.000 do 00º Oficial de Registro de Imóveis de São Paulo",
  agency: "Casa Alvorada Imóveis",
  creci: "CRECI-SP 00000-J",
  phone: "(11) 0000-0000",
};

const specs = [
  { label: "Área privativa", value: "280 m²" },
  { label: "Suítes", value: "4" },
  { label: "Vagas", value: "4" },
  { label: "Unidades", value: "18, uma por andar" },
  { label: "Entrega prevista", value: "Dezembro de 2029" },
];

const nav = [
  { href: "#planta", label: "Planta" },
  { href: "#ficha", label: "Ficha técnica" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

function Facade() {
  const floors = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg viewBox="0 0 420 560" className="size-full" role="img" aria-label="Desenho da fachada do edifício">
      <rect x="0" y="0" width="420" height="560" fill="#2a2723" />
      <rect x="110" y="40" width="200" height="500" fill="#33302b" stroke="#5a544b" />
      {floors.map((floor) => (
        <g key={floor}>
          <rect x="118" y={56 + floor * 38} width="184" height="26" fill="#3d3832" />
          <line x1="110" x2="320" y1={84 + floor * 38} y2={84 + floor * 38} stroke="#b0623b" strokeWidth="2" />
          <line x1="164" x2="164" y1={56 + floor * 38} y2={82 + floor * 38} stroke="#5a544b" />
          <line x1="256" x2="256" y1={56 + floor * 38} y2={82 + floor * 38} stroke="#5a544b" />
        </g>
      ))}
      <rect x="150" y="510" width="120" height="30" fill="#1d1b18" />
      <line x1="0" x2="420" y1="540" y2="540" stroke="#5a544b" />
      <g fill="#3a4a3a">
        <circle cx="60" cy="510" r="34" />
        <circle cx="372" cy="500" r="40" />
      </g>
    </svg>
  );
}

function FloorPlan() {
  const room = "fill-none stroke-ink";
  return (
    <svg viewBox="0 0 600 380" className="w-full" role="img" aria-label="Planta da unidade tipo com 4 suítes">
      <g strokeWidth="3" className={room}>
        <rect x="10" y="10" width="580" height="360" />
        <line x1="250" y1="10" x2="250" y2="250" />
        <line x1="10" y1="250" x2="590" y2="250" />
        <line x1="130" y1="10" x2="130" y2="250" />
        <line x1="420" y1="10" x2="420" y2="250" />
        <line x1="420" y1="130" x2="590" y2="130" />
        <line x1="300" y1="250" x2="300" y2="370" />
      </g>
      <g strokeWidth="1.5" className="fill-none stroke-ink-faint" strokeDasharray="4 4">
        <rect x="20" y="300" width="270" height="60" />
      </g>
      <g className="fill-ink-soft" fontSize="13" fontFamily="inherit">
        <text x="30" y="40">Suíte 1</text>
        <text x="150" y="40">Suíte 2</text>
        <text x="270" y="40">Suíte master</text>
        <text x="440" y="40">Suíte 4</text>
        <text x="440" y="160">Cozinha</text>
        <text x="30" y="280">Living</text>
        <text x="30" y="330">Varanda gourmet</text>
        <text x="320" y="280">Jantar</text>
      </g>
    </svg>
  );
}

export default function LaunchDemo() {
  return (
    <>
      <JsonLd data={launchSchema} />
      <div className="border-b border-white/10 bg-coal text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 text-xs sm:px-8">
          <p className="text-paper/80">
            Página de exemplo feita pela stellift. Empreendimento, empresas e registros
            são fictícios.
          </p>
          <Link
            href="/pt-BR/landing-page-para-imobiliarias"
            className="font-semibold underline underline-offset-4"
          >
            Quero uma página assim
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-coal/95 text-paper backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#inicio" className="font-serif text-2xl tracking-tight">
            {launch.name}
          </a>
          <nav aria-label="Seções" className="hidden items-center gap-7 text-sm text-paper/70 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-paper">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="bg-clay px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Falar com um corretor
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="bg-coal text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
            <div className="self-center lg:col-span-7">
              <p className="rise text-xs uppercase tracking-[0.26em] text-clay">
                Lançamento · Alto de Pinheiros
              </p>
              <h1 className="rise rise-2 mt-6 font-serif text-[clamp(3rem,7vw,5.75rem)] leading-[0.98] tracking-[-0.01em]">
                Uma unidade por andar, <em className="text-clay">4 suítes</em> e 280 m².
              </h1>
              <p className="rise rise-3 mt-7 max-w-lg text-lg leading-relaxed text-paper/75">
                Dezoito apartamentos numa rua residencial, com varanda gourmet de
                frente para o verde da praça.
              </p>
              <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="bg-clay px-7 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
                >
                  Agendar visita ao decorado
                </a>
                <a
                  href="#planta"
                  className="border border-paper/30 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper"
                >
                  Ver a planta
                </a>
              </div>
            </div>
            <figure className="rise rise-3 lg:col-span-5">
              <div className="aspect-[3/4] overflow-hidden">
                <Facade />
              </div>
              <figcaption className="mt-3 text-xs text-paper/60">
                Desenho ilustrativo da fachada. O projeto aprovado está no memorial
                de incorporação.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="planta" className="border-t border-line bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.26em] text-clay">Planta</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-ink">Unidade tipo</h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                As medidas desta página saem do memorial descritivo. Num anúncio,
                o que está escrito vira parte da oferta, então nada aqui é
                arredondado para cima.
              </p>
            </div>
            <figure className="lg:col-span-8">
              <div className="border border-line bg-paper p-6">
                <FloorPlan />
              </div>
              <figcaption className="mt-3 text-xs text-ink-faint">
                Planta ilustrativa, sem escala. Móveis e acabamentos não fazem parte
                da unidade.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="ficha" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="font-serif text-5xl leading-tight text-ink">Ficha técnica</h2>
            <dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-paper p-7">
                  <dt className="text-xs uppercase tracking-[0.18em] text-ink-faint">{spec.label}</dt>
                  <dd className="mt-3 font-serif text-3xl text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
              Incorporação: {launch.developer}. {launch.registry}.
            </p>
          </div>
        </section>

        <section id="localizacao" className="border-t border-line bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.26em] text-clay">Localização</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-ink">Alto de Pinheiros</h2>
              <address className="mt-6 not-italic text-base leading-relaxed text-ink-soft">
                {launch.address}
              </address>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Decorado no próprio terreno, aberto de terça a domingo, das 10h às
                18h, com hora marcada.
              </p>
            </div>
            <div
              aria-hidden
              className="relative min-h-72 overflow-hidden border border-line bg-paper-deep lg:col-span-6 lg:col-start-7"
            >
              <svg viewBox="0 0 600 400" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
                <rect x="330" y="150" width="150" height="110" fill="#c9d3c0" />
                <g stroke="#cfc6b6" strokeWidth="14" fill="none" strokeLinecap="round">
                  <path d="M-20 140 L620 120" />
                  <path d="M-20 280 L620 300" />
                  <path d="M300 -20 L310 420" />
                </g>
                <circle cx="300" cy="205" r="30" fill="#b0623b" opacity="0.18" />
                <circle cx="300" cy="205" r="10" fill="#b0623b" />
              </svg>
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-line bg-coal text-paper">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <h2 className="font-serif text-5xl leading-tight">Agendar visita</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/75">
              Um corretor responde no mesmo dia, com tabela de valores, condições de
              pagamento e horário de visita ao decorado.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#contato" className="bg-clay px-7 py-3.5 text-sm font-medium text-paper">
                Chamar no WhatsApp
              </a>
              <a href="#contato" className="border border-paper/30 px-7 py-3.5 text-sm font-medium text-paper">
                Ligar: {launch.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 text-sm text-ink-soft sm:px-8 md:grid-cols-2">
          <div>
            <p className="text-xl text-ink">
              <span className="font-serif">{launch.agency}</span>{" "}
              <span className="font-serif text-[0.85em]">{launch.creci}</span>
            </p>
            <p className="mt-3">Incorporação: {launch.developer}</p>
            <p>{launch.registry}.</p>
          </div>
          <p className="text-xs text-ink-faint md:text-right">
            Imagens e plantas ilustrativas. Exemplo da stellift: nomes, endereço,
            telefone e registros não existem.
          </p>
        </div>
      </footer>

      <div className="sticky bottom-0 z-30 border-t border-white/10 bg-coal/95 p-3 backdrop-blur md:hidden">
        <a href="#contato" className="block bg-clay py-3.5 text-center text-sm font-medium text-paper">
          Falar com um corretor
        </a>
      </div>
    </>
  );
}
