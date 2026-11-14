import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { getDictionary } from "@/lib/i18n/server";
import { landingLocale } from "@/app/[lang]/_landing/registry";
import { landingMetadata } from "@/app/[lang]/_landing/metadata";
import {
  Anatomy,
  Bring,
  CheckYourPage,
  Cta,
  Faq,
  Hero,
  LandingJsonLd,
  OtherLandings,
  Questions,
  Rules,
  Seo,
  Steps,
  mailtoFor,
} from "@/app/[lang]/_landing/sections";
import { dentists } from "@/app/[lang]/landing-page-para-dentistas/content";

export async function generateMetadata(): Promise<Metadata> {
  if ((await lang()) !== landingLocale) return {};
  return landingMetadata(dentists);
}

const swaps = [
  {
    out: "Avaliação gratuita",
    outSource: "art. 20, IX",
    in: "Primeira consulta com exame e plano de tratamento por escrito.",
  },
  {
    out: "Implante a partir de R$ 1.990",
    outSource: "art. 44, I",
    in: "Plano com as etapas e os custos entregue antes de começar.",
    inSource: "art. 19, parágrafo único",
  },
  {
    out: "Parcele em 12x no cartão",
    outSource: "art. 44, I",
    in: "Formas de pagamento combinadas no consultório, junto com o plano.",
  },
  {
    out: "Tratamento popular",
    outSource: "art. 44, VII",
    in: "Convênios e credenciamentos aceitos pela clínica.",
    inSource: "art. 43, §1º, IV",
  },
  {
    out: "Sorteio de clareamento",
    outSource: "art. 20, VIII",
    in: "Conteúdo sobre como funciona o clareamento e quem pode fazer.",
  },
];

function Swaps() {
  return (
    <section aria-labelledby="swaps-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2 id="swaps-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
          O que sai da página e o que entra no lugar
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Frases que o Código de Ética Odontológica proíbe, e o que a página diz em
          vez delas.
        </p>
        <ul className="grid-ruled mt-10">
          {swaps.map((swap) => (
            <li key={swap.out} className="cell grid gap-4 p-6 sm:grid-cols-2 sm:gap-8 sm:p-7">
              <p className="text-sm leading-relaxed text-ink-faint">
                <span className="line-through decoration-danger decoration-2">{swap.out}</span>{" "}
                <span className="font-mono text-[11px]">{swap.outSource}</span>
              </p>
              <p className="text-sm leading-relaxed text-ink">
                {swap.in}
                {swap.inSource ? (
                  <>
                    {" "}
                    <span className="font-mono text-[11px] text-ink-faint">{swap.inSource}</span>
                  </>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BeforeAfterConflict() {
  return (
    <section aria-labelledby="conflict-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2 id="conflict-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
          Antes e depois: as duas normas não dizem a mesma coisa
        </h2>
        <div className="grid-ruled mt-10 lg:grid-cols-2">
          <div className="cell p-7 sm:p-8">
            <h3 className="eyebrow">Código de Ética, 2012</h3>
            <p className="mt-5 font-serif text-xl leading-snug text-ink">
              Lista &ldquo;expressões ou imagens de antes e depois&rdquo; entre as
              infrações.
            </p>
            <p className="mt-3 font-mono text-[11px] text-ink-faint">art. 44, I e XII</p>
          </div>
          <div className="cell p-7 sm:p-8">
            <h3 className="eyebrow">Resolução CFO-196/2019</h3>
            <p className="mt-5 font-serif text-xl leading-snug text-ink">
              Autoriza imagens do diagnóstico e da conclusão do tratamento, feitas
              pelo dentista que executou, com termo de consentimento do paciente.
            </p>
            <p className="mt-3 font-mono text-[11px] text-ink-faint">art. 2º</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Continua proibido mostrar o procedimento em andamento (art. 3º), e toda
              imagem leva o nome e o CRO de quem fez (art. 4º).
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">
          A página não usa antes e depois por padrão. Se você quiser mostrar casos no
          formato da Resolução 196, a gente monta depois de você confirmar com a
          comissão de ética do seu CRO.
        </p>
      </div>
    </section>
  );
}

export default async function DentistsLanding() {
  if ((await lang()) !== landingLocale) notFound();
  const dict = await getDictionary("pt-BR");
  const mailto = mailtoFor(dentists, dict.site.email);

  return (
    <>
      <LandingJsonLd niche={dentists} />
      <Hero niche={dentists} mailto={mailto} />
      <Swaps />
      <Anatomy niche={dentists} />
      <Questions niche={dentists} />
      <Rules niche={dentists} />
      <BeforeAfterConflict />
      <CheckYourPage niche={dentists} email={dict.site.email} />
      <Seo niche={dentists} />
      <Steps niche={dentists} />
      <Bring niche={dentists} />
      <Faq niche={dentists} />
      <Cta niche={dentists} mailto={mailto} email={dict.site.email} />
      <OtherLandings niche={dentists} />
    </>
  );
}
