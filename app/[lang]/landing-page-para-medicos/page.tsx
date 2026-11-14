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
import { doctors } from "@/app/[lang]/landing-page-para-medicos/content";

export async function generateMetadata(): Promise<Metadata> {
  if ((await lang()) !== landingLocale) return {};
  return landingMetadata(doctors);
}

const results = [
  { label: "Evolução satisfatória", tone: "bg-accent/20" },
  { label: "Evolução insatisfatória", tone: "bg-ink-faint/25" },
  { label: "Complicação descrita", tone: "bg-danger/20" },
];

const beforeAfterRules = [
  {
    text:
      "Texto educativo junto da imagem, com as indicações do tratamento, o que " +
      "influencia o resultado e as complicações descritas na literatura.",
    source: "art. 14, II, a",
  },
  {
    text:
      "Um conjunto de imagens, com evoluções satisfatórias, insatisfatórias e " +
      "complicações, e não só o melhor caso.",
    source: "art. 14, II, b",
  },
  {
    text:
      "Quando fizer sentido, evolução em biotipos e idades diferentes, e em " +
      "prazos diferentes depois do procedimento.",
    source: "art. 14, II, c",
  },
  {
    text: "Nenhuma imagem que identifique o paciente.",
    source: "art. 14, II, e",
  },
  {
    text: "Nenhuma edição, manipulação ou melhoria na foto.",
    source: "art. 14, II, f",
  },
  {
    text:
      "Autorização do paciente para usar a imagem, e anonimato mesmo com a " +
      "autorização.",
    source: "art. 14, II, i",
  },
];

function BeforeAfterFormat() {
  return (
    <section aria-labelledby="before-after-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2
          id="before-after-title"
          className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          Antes e depois, no formato que o art. 14 pede
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          A resolução passou a permitir mostrar resultado, com seis condições. Este
          é o bloco que a página usa quando você quer mostrar um procedimento.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div aria-hidden className="border border-line bg-surface p-5 lg:col-span-6">
            <div className="grid grid-cols-3 gap-3">
              {results.map((result) => (
                <div key={result.label}>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className={`aspect-[3/4] ${result.tone}`} />
                    <div className={`aspect-[3/4] ${result.tone}`} />
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-2 border-t border-line pt-4">
              <div className="h-2 w-11/12 bg-line" />
              <div className="h-2 w-10/12 bg-line" />
              <div className="h-2 w-8/12 bg-line" />
              <p className="pt-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                Texto educativo: indicações, fatores e complicações
              </p>
            </div>
          </div>
          <ul className="space-y-5 lg:col-span-6">
            {beforeAfterRules.map((rule) => (
              <li key={rule.text} className="flex gap-4">
                <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-line-strong" />
                <p className="text-sm leading-relaxed text-ink">
                  {rule.text}{" "}
                  <span className="font-mono text-[11px] text-ink-faint">{rule.source}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default async function DoctorsLanding() {
  if ((await lang()) !== landingLocale) notFound();
  const dict = await getDictionary("pt-BR");
  const mailto = mailtoFor(doctors, dict.site.email);

  return (
    <>
      <LandingJsonLd niche={doctors} />
      <Hero niche={doctors} mailto={mailto} />
      <Questions niche={doctors} />
      <Anatomy niche={doctors} />
      <Rules niche={doctors} />
      <BeforeAfterFormat />
      <CheckYourPage niche={doctors} email={dict.site.email} />
      <Seo niche={doctors} />
      <Steps niche={doctors} />
      <Bring niche={doctors} />
      <Faq niche={doctors} />
      <Cta niche={doctors} mailto={mailto} email={dict.site.email} />
      <OtherLandings niche={doctors} />
    </>
  );
}
