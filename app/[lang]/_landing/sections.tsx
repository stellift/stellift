import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/app/[lang]/_components/json-ld";
import Star from "@/app/[lang]/_components/star";
import { siteUrl } from "@/lib/i18n/config";
import Checklist from "@/app/[lang]/_landing/checklist";
import { landingPath, landings } from "@/app/[lang]/_landing/registry";
import type { Niche } from "@/app/[lang]/_landing/types";

export function mailtoFor(niche: Niche, email: string) {
  return `mailto:${email}?subject=${encodeURIComponent(niche.mailSubject)}`;
}

export function LandingJsonLd({ niche }: { niche: Niche }) {
  const url = `${siteUrl}${landingPath(niche)}`;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: niche.title,
            serviceType: "Criação de landing page",
            description: niche.metaDescription,
            url,
            provider: { "@id": `${siteUrl}/#organization` },
            areaServed: { "@type": "Country", name: "Brasil" },
            audience: {
              "@type": "BusinessAudience",
              audienceType: niche.audience,
            },
            inLanguage: "pt-BR",
          },
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: niche.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "stellift",
                item: `${siteUrl}/pt-BR`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: niche.title,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  );
}

export function Hero({ niche, mailto }: { niche: Niche; mailto: string }) {
  return (
    <section className="border-b border-line">
      <div className="shell grid gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="mt-10 flex items-center gap-4">
            <span className="eyebrow">{niche.eyebrow}</span>
            <span aria-hidden className="h-px flex-1 bg-line" />
            <Star className="size-2.5 shrink-0 text-line-strong" />
          </div>
          <h1 className="mt-7 text-balance font-serif text-[2.5rem] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[3.5rem]">
            {niche.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
            {niche.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={mailto} className="btn btn-primary">
              Conversar sobre a sua página
            </a>
            <a href={niche.demo.path} className="btn btn-outline">
              Ver uma página de exemplo
            </a>
          </div>
        </div>

        <a
          href={niche.demo.path}
          className="group block border border-line bg-surface lg:col-span-6"
          aria-label="Abrir a página de exemplo"
        >
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span aria-hidden className="size-2 rounded-full bg-line-strong" />
            <span aria-hidden className="size-2 rounded-full bg-line-strong" />
            <span aria-hidden className="size-2 rounded-full bg-line-strong" />
            <span className="ml-3 truncate font-mono text-[11px] text-ink-faint">
              {niche.demo.label}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={niche.demo.image}
              alt={niche.demo.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export function Questions({ niche }: { niche: Niche }) {
  return (
    <section aria-labelledby="questions-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2
          id="questions-title"
          className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          {niche.questions.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          {niche.questions.lead}
        </p>
        <ul className="grid-ruled mt-10 sm:grid-cols-2">
          {niche.questions.items.map((item, index) => (
            <li key={item.title} className="cell p-7 sm:p-8">
              <span className="index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-xl leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Anatomy({ niche }: { niche: Niche }) {
  return (
    <section aria-labelledby="anatomy-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2
          id="anatomy-title"
          className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          O que tem em cada parte do exemplo
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <a
            href={niche.demo.path}
            className="relative block aspect-[16/10] overflow-hidden border border-line lg:col-span-8"
            aria-label="Abrir a página de exemplo"
          >
            <Image
              src={niche.demo.image}
              alt="Topo da página de exemplo com marcações numeradas"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
            {niche.anatomy.map((item, index) => (
              <span
                key={item.text}
                aria-hidden
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                className="absolute grid size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent font-mono text-[11px] font-medium text-canvas ring-4 ring-accent/25 sm:size-7"
              >
                {index + 1}
              </span>
            ))}
          </a>
          <ol className="space-y-5 lg:col-span-4">
            {niche.anatomy.map((item, index) => (
              <li key={item.text} className="flex gap-4">
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-accent font-mono text-[11px] text-accent">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-ink">
                  {item.text}
                  {item.source ? (
                    <>
                      {" "}
                      <span className="font-mono text-[11px] text-ink-faint">
                        {item.source}
                      </span>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Rules({ niche }: { niche: Niche }) {
  return (
    <section aria-labelledby="rules-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2
          id="rules-title"
          className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          {niche.rules.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          {niche.rules.lead}
        </p>
        <div className="grid-ruled mt-10 lg:grid-cols-2">
          {[
            { heading: "A página traz", items: niche.rules.includes },
            { heading: "A página evita", items: niche.rules.avoids },
          ].map((column) => (
            <div key={column.heading} className="cell p-7 sm:p-8">
              <h3 className="eyebrow">{column.heading}</h3>
              <ul className="mt-6 space-y-5">
                {column.items.map((item) => (
                  <li key={item.text} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-2 h-px w-4 shrink-0 bg-line-strong"
                    />
                    <p className="text-sm leading-relaxed text-ink">
                      {item.text}{" "}
                      <span className="font-mono text-[11px] text-ink-faint">
                        {item.source}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">
          {niche.rules.note}
        </p>
      </div>
    </section>
  );
}

export function CheckYourPage({
  niche,
  email,
}: {
  niche: Niche;
  email: string;
}) {
  return (
    <section aria-labelledby="check-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2
          id="check-title"
          className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          Confira a página que você tem hoje
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          {niche.checklist.lead}
        </p>
        <div className="mt-10">
          <Checklist
            items={niche.checklist.items}
            email={email}
            subject={`Ajustar minha página atual (${niche.card.name})`}
          />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          {niche.checklist.disclaimer}
        </p>
      </div>
    </section>
  );
}

export function Seo({ niche }: { niche: Niche }) {
  return (
    <section aria-labelledby="seo-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2
          id="seo-title"
          className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          Feita para aparecer na busca da sua cidade
        </h2>
        <ul className="grid-ruled mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {niche.seo.map((item) => (
            <li key={item.title} className="cell p-7">
              <h3 className="font-serif text-lg leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-xl text-ink">
              O código que o Google lê
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {niche.demo.schemaText}
            </p>
          </div>
          <pre className="max-h-96 overflow-auto border border-line bg-surface p-5 font-mono text-[12px] leading-relaxed text-ink-muted lg:col-span-8">
            <code>{JSON.stringify(niche.demo.schema, null, 2)}</code>
          </pre>
        </div>
        {niche.privacy ? (
          <div className="mt-10 max-w-3xl border-l-2 border-accent pl-6">
            <h3 className="font-serif text-xl text-ink">
              {niche.privacy.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {niche.privacy.text}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Steps({ niche }: { niche: Niche }) {
  return (
    <section aria-labelledby="steps-title" className="border-b border-line">
      <div className="shell py-16 sm:py-20">
        <h2
          id="steps-title"
          className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl"
        >
          Como funciona
        </h2>
        <ol className="grid-ruled mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {niche.steps.map((step, index) => (
            <li key={step.title} className="cell p-7">
              <span className="index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-xl leading-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Bring({ niche }: { niche: Niche }) {
  return (
    <section aria-labelledby="bring-title" className="border-b border-line">
      <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2
            id="bring-title"
            className="font-serif text-3xl leading-tight text-ink sm:text-4xl"
          >
            O que separar para a primeira conversa
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Não precisa ter tudo. O que faltar vira item da proposta.
          </p>
        </div>
        <ul className="grid-ruled lg:col-span-8">
          {niche.bring.map((item, index) => (
            <li key={item} className="cell flex gap-5 px-6 py-4">
              <span className="index shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-ink">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq({ niche }: { niche: Niche }) {
  return (
    <section aria-labelledby="faq-title" className="border-b border-line">
      <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
        <h2
          id="faq-title"
          className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:col-span-4"
        >
          Perguntas frequentes
        </h2>
        <div className="lg:col-span-8">
          {niche.faq.map((item) => (
            <details
              key={item.question}
              className="group border-b border-line py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="font-mono text-sm text-ink-faint transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {item.answer}
              </p>
            </details>
          ))}
          <p className="mt-8 text-xs leading-relaxed text-ink-faint">
            Fontes:{" "}
            {niche.sources.map((source, index) => (
              <span key={source.href}>
                {index > 0 ? " · " : null}
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {source.label}
                </a>
              </span>
            ))}
            . Este texto não é orientação jurídica.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Cta({
  niche,
  mailto,
  email,
}: {
  niche: Niche;
  mailto: string;
  email: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="shell flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {niche.cta.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            {niche.cta.text}
          </p>
        </div>
        <a href={mailto} className="btn btn-primary">
          Escrever para {email}
        </a>
      </div>
    </section>
  );
}

export function OtherLandings({ niche }: { niche: Niche }) {
  const others = landings.filter((other) => other.id !== niche.id);
  return (
    <section aria-labelledby="others-title" className="border-b border-line">
      <div className="shell py-16">
        <h2
          id="others-title"
          className="font-serif text-2xl leading-tight text-ink"
        >
          Outras áreas
        </h2>
        <ul className="grid-ruled mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <li key={other.id} className="cell cell-link group">
              <span aria-hidden className="cell-mark" />
              <Link href={landingPath(other)} className="block h-full p-7">
                <h3 className="font-serif text-xl leading-tight text-ink">
                  {other.card.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {other.card.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
