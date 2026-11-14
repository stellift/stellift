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
import { lawyers } from "@/app/[lang]/landing-page-para-advogados/content";

export async function generateMetadata(): Promise<Metadata> {
  if ((await lang()) !== landingLocale) return {};
  return landingMetadata(lawyers);
}

const channels = [
  {
    channel: "Anúncio no Google por palavra-chave",
    allowed: true,
    condition: "Quando responde a uma busca que a própria pessoa começou.",
    source: "Prov. 205, Anexo Único",
  },
  {
    channel: "Impulsionar post no Instagram",
    allowed: true,
    condition: "Se o post não for oferta de serviço jurídico.",
    source: "Prov. 205, Anexo Único",
  },
  {
    channel: "Chatbot no site",
    allowed: true,
    condition: "Para primeiras dúvidas, sem tirar o atendimento pessoal do advogado.",
    source: "Prov. 205, Anexo Único",
  },
  {
    channel: "Grupo de WhatsApp",
    allowed: true,
    condition: "Só com pessoas determinadas, das relações do advogado ou do escritório.",
    source: "Prov. 205, Anexo Único",
  },
  {
    channel: "Lives e vídeos no YouTube",
    allowed: true,
    condition: "Com conteúdo dentro do Código de Ética e do provimento.",
    source: "Prov. 205, Anexo Único",
  },
  {
    channel: "Anúncio ostensivo em plataforma de vídeo",
    allowed: false,
    condition: "Proibido.",
    source: "Prov. 205, Anexo Único",
  },
  {
    channel: "Outdoor e painel luminoso",
    allowed: false,
    condition: "Proibido.",
    source: "CED, art. 40, II",
  },
  {
    channel: "Rádio, cinema e televisão",
    allowed: false,
    condition: "Proibido como meio de publicidade.",
    source: "CED, art. 40, I",
  },
];

function ActivePassive() {
  return (
    <section aria-labelledby="active-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2 id="active-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
          Publicidade ativa e passiva
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          O provimento separa os dois tipos, e várias proibições valem só para a
          ativa, como falar da estrutura do escritório (art. 6º).
        </p>
        <div className="grid-ruled mt-10 lg:grid-cols-2">
          <div className="cell p-7 sm:p-8">
            <h3 className="eyebrow">Ativa · art. 2º, VI</h3>
            <p className="mt-5 font-serif text-xl leading-snug text-ink">
              Divulgação capaz de atingir número indeterminado de pessoas, mesmo que
              elas não tenham buscado informações sobre o anunciante.
            </p>
          </div>
          <div className="cell p-7 sm:p-8">
            <h3 className="eyebrow">Passiva · art. 2º, VII</h3>
            <p className="mt-5 font-serif text-xl leading-snug text-ink">
              Divulgação capaz de atingir somente público certo, que tenha buscado
              informações sobre o anunciante ou os temas anunciados.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">
          A landing page é feita para receber quem já procurou o assunto no Google.
          Mesmo assim, ela segue as regras mais rígidas, as da publicidade ativa,
          porque o mesmo endereço pode ser compartilhado em qualquer lugar.
        </p>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <section aria-labelledby="channels-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2 id="channels-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
          Por onde a página pode ser divulgada
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line-strong">
                <th scope="col" className="eyebrow py-3 pr-6 font-normal">Canal</th>
                <th scope="col" className="eyebrow py-3 pr-6 font-normal">Pode?</th>
                <th scope="col" className="eyebrow py-3 pr-6 font-normal">Condição</th>
                <th scope="col" className="eyebrow py-3 font-normal">Norma</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((row) => (
                <tr key={row.channel} className="border-b border-line">
                  <th scope="row" className="py-4 pr-6 font-medium text-ink">{row.channel}</th>
                  <td className={`py-4 pr-6 font-mono text-xs ${row.allowed ? "text-accent" : "text-danger"}`}>
                    {row.allowed ? "Pode" : "Não"}
                  </td>
                  <td className="py-4 pr-6 leading-relaxed text-ink-muted">{row.condition}</td>
                  <td className="py-4 font-mono text-[11px] text-ink-faint">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default async function LawyersLanding() {
  if ((await lang()) !== landingLocale) notFound();
  const dict = await getDictionary("pt-BR");
  const mailto = mailtoFor(lawyers, dict.site.email);

  return (
    <>
      <LandingJsonLd niche={lawyers} />
      <Hero niche={lawyers} mailto={mailto} />
      <Questions niche={lawyers} />
      <ActivePassive />
      <Anatomy niche={lawyers} />
      <Rules niche={lawyers} />
      <Channels />
      <CheckYourPage niche={lawyers} email={dict.site.email} />
      <Seo niche={lawyers} />
      <Steps niche={lawyers} />
      <Bring niche={lawyers} />
      <Faq niche={lawyers} />
      <Cta niche={lawyers} mailto={mailto} email={dict.site.email} />
      <OtherLandings niche={lawyers} />
    </>
  );
}
