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
import CreciSize from "@/app/[lang]/landing-page-para-imobiliarias/creci-size";
import { realEstate } from "@/app/[lang]/landing-page-para-imobiliarias/content";

export async function generateMetadata(): Promise<Metadata> {
  if ((await lang()) !== landingLocale) return {};
  return landingMetadata(realEstate);
}

const launchMust = [
  {
    label: "Imobiliária",
    value: "Casa Alvorada Imóveis · CRECI-SP 00000-J",
    source: "Res. COFECI 1.065/07, art. 5º",
  },
  {
    label: "Incorporação",
    value: "Registrada sob o R.0 da matrícula nº 000.000 do 00º Oficial de Registro de Imóveis",
    source: "Lei 4.591/64, art. 32, §3º",
  },
  {
    label: "Imagens",
    value: "Perspectivas e plantas ilustrativas",
    source: "CDC, art. 37, §1º",
  },
  {
    label: "Autorização",
    value: "Contrato de mediação ou autorização escrita para anunciar",
    source: "Decreto 81.871/78, art. 5º",
  },
];

function CreciSection() {
  return (
    <section aria-labelledby="creci-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2 id="creci-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
          Confira o tamanho do seu CRECI
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          A Resolução COFECI 1.065/2007 fixa um tamanho mínimo para o CRECI em
          relação ao nome da imobiliária (art. 5º, b). Mexa nos tamanhos e veja se o
          seu anúncio passa.
        </p>
        <div className="mt-10">
          <CreciSize />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          A resolução fala em &ldquo;tamanho de impressão&rdquo; sem dizer como
          medir. Esta conta usa a altura da letra.
        </p>
      </div>
    </section>
  );
}

function LaunchMust() {
  return (
    <section aria-labelledby="launch-title" className="border-b border-line">
      <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="launch-title" className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            O rodapé de um lançamento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Num lançamento, estas quatro linhas não são detalhe. A lei dos
            corretores proíbe anunciar imóvel em condomínio sem o número do registro
            da incorporação (Lei 6.530/78, art. 20, V).
          </p>
        </div>
        <dl className="grid-ruled lg:col-span-7">
          {launchMust.map((row) => (
            <div key={row.label} className="cell grid gap-2 p-6 sm:grid-cols-[8rem_1fr]">
              <dt className="eyebrow pt-0.5">{row.label}</dt>
              <dd>
                <p className="text-sm leading-relaxed text-ink">{row.value}</p>
                <p className="mt-1 font-mono text-[11px] text-ink-faint">{row.source}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default async function RealEstateLanding() {
  if ((await lang()) !== landingLocale) notFound();
  const dict = await getDictionary("pt-BR");
  const mailto = mailtoFor(realEstate, dict.site.email);

  return (
    <>
      <LandingJsonLd niche={realEstate} />
      <Hero niche={realEstate} mailto={mailto} />
      <Questions niche={realEstate} />
      <Anatomy niche={realEstate} />
      <LaunchMust />
      <CreciSection />
      <Rules niche={realEstate} />
      <CheckYourPage niche={realEstate} email={dict.site.email} />
      <Seo niche={realEstate} />
      <Steps niche={realEstate} />
      <Bring niche={realEstate} />
      <Faq niche={realEstate} />
      <Cta niche={realEstate} mailto={mailto} email={dict.site.email} />
      <OtherLandings niche={realEstate} />
    </>
  );
}
