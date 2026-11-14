import Image from "next/image";
import JsonLd from "@/app/[lang]/_components/json-ld";
import Star from "@/app/[lang]/_components/star";
import { siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import { doctorsPath } from "@/app/[lang]/[slug]/_pages/doctors/metadata";
import Checklist from "@/app/[lang]/[slug]/_pages/doctors/checklist";
import { clinicSchema } from "@/app/exemplos/clinica-dermatologia/schema";
import {
  anatomy,
  bring,
  checklist,
  demoPath,
  faq,
  lead,
  mailSubject,
  metaDescription,
  privacy,
  questions,
  rules,
  seo,
  sources,
  steps,
  title,
} from "@/app/[lang]/[slug]/_pages/doctors/data";

export default async function Doctors() {
  const dict = await getDictionary("pt-BR");
  const url = `${siteUrl}${doctorsPath()}`;
  const mailto = `mailto:${dict.site.email}?subject=${encodeURIComponent(mailSubject)}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: title,
              serviceType: "Criação de landing page",
              description: metaDescription,
              url,
              provider: { "@id": `${siteUrl}/#organization` },
              areaServed: { "@type": "Country", name: "Brasil" },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Médicos e clínicas médicas",
              },
              inLanguage: "pt-BR",
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "stellift", item: `${siteUrl}/pt-BR` },
                { "@type": "ListItem", position: 2, name: title, item: url },
              ],
            },
          ],
        }}
      />

      <section className="border-b border-line">
        <div className="shell grid gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="mt-10 flex items-center gap-4">
              <span className="eyebrow">Para médicos e clínicas</span>
              <span aria-hidden className="h-px flex-1 bg-line" />
              <Star className="size-2.5 shrink-0 text-line-strong" />
            </div>
            <h1 className="mt-7 text-balance font-serif text-[2.5rem] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[3.5rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
              {lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={mailto} className="btn btn-primary">
                Conversar sobre a sua página
              </a>
              <a href={demoPath} className="btn btn-outline">
                Ver uma página de exemplo
              </a>
            </div>
          </div>

          <a
            href={demoPath}
            className="group block border border-line bg-surface lg:col-span-6"
            aria-label="Abrir a página de exemplo de uma clínica de dermatologia"
          >
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span aria-hidden className="size-2 rounded-full bg-line-strong" />
              <span aria-hidden className="size-2 rounded-full bg-line-strong" />
              <span aria-hidden className="size-2 rounded-full bg-line-strong" />
              <span className="ml-3 truncate font-mono text-[11px] text-ink-faint">
                exemplo · clínica de dermatologia
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/shots/exemplo-clinica.webp"
                alt="Topo da página de exemplo: nome da médica, CRM, RQE, valor da consulta e botão de agendar"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </a>
        </div>
      </section>

      <section aria-labelledby="questions-title" className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          <h2 id="questions-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            O que o paciente quer saber antes de marcar
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            São quatro perguntas, e a página responde todas logo no começo.
          </p>
          <ul className="grid-ruled mt-10 sm:grid-cols-2">
            {questions.map((item, index) => (
              <li key={item.title} className="cell p-7 sm:p-8">
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-xl leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="anatomy-title" className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          <h2 id="anatomy-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            O que tem em cada parte do exemplo
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <a
              href={demoPath}
              className="relative block aspect-[16/10] overflow-hidden border border-line lg:col-span-8"
              aria-label="Abrir a página de exemplo"
            >
              <Image
                src="/shots/exemplo-clinica.webp"
                alt="Topo da página de exemplo com marcações numeradas"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              {anatomy.map((item, index) => (
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
              {anatomy.map((item, index) => (
                <li key={item.text} className="flex gap-4">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-accent font-mono text-[11px] text-accent">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-ink">
                    {item.text}
                    {item.source ? (
                      <>
                        {" "}
                        <span className="font-mono text-[11px] text-ink-faint">{item.source}</span>
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="rules-title" className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          <h2 id="rules-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Dentro da Resolução CFM 2.336/2023
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            É a norma de publicidade médica em vigor desde março de 2024. Cada item
            abaixo leva o artigo de onde saiu.
          </p>
          <div className="grid-ruled mt-10 lg:grid-cols-2">
            {[
              { heading: "A página traz", items: rules.includes },
              { heading: "A página evita", items: rules.avoids },
            ].map((column) => (
              <div key={column.heading} className="cell p-7 sm:p-8">
                <h3 className="eyebrow">{column.heading}</h3>
                <ul className="mt-6 space-y-5">
                  {column.items.map((item) => (
                    <li key={item.text} className="flex gap-4">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-line-strong" />
                      <p className="text-sm leading-relaxed text-ink">
                        {item.text}{" "}
                        <span className="font-mono text-[11px] text-ink-faint">{item.source}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">{rules.note}</p>
        </div>
      </section>

      <section aria-labelledby="check-title" className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          <h2 id="check-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Confira a página que você tem hoje
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            Abra o seu site ou o seu link da bio ao lado e marque o que ele já faz.
            Nada do que você marcar sai do seu navegador.
          </p>
          <div className="mt-10">
            <Checklist items={checklist} email={dict.site.email} />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-faint">
            O checklist cobre só uma parte da resolução e não substitui consulta à
            Codame do seu CRM.
          </p>
        </div>
      </section>

      <section aria-labelledby="seo-title" className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          <h2 id="seo-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Feita para aparecer na busca da sua cidade
          </h2>
          <ul className="grid-ruled mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {seo.map((item) => (
              <li key={item.title} className="cell p-7">
                <h3 className="font-serif text-lg leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-xl text-ink">O código que o Google lê</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Este é o trecho de dados estruturados que está na página de exemplo.
                Ele diz que ali existe uma clínica de dermatologia, com endereço,
                horário, telefone e uma médica com CRM e RQE.
              </p>
            </div>
            <pre className="max-h-96 overflow-auto border border-line bg-surface p-5 font-mono text-[12px] leading-relaxed text-ink-muted lg:col-span-8">
              <code>{JSON.stringify(clinicSchema, null, 2)}</code>
            </pre>
          </div>
          <div className="mt-10 max-w-3xl border-l-2 border-accent pl-6">
            <h3 className="font-serif text-xl text-ink">{privacy.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{privacy.text}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="steps-title" className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          <h2 id="steps-title" className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Como funciona
          </h2>
          <ol className="grid-ruled mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="cell p-7">
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-xl leading-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="bring-title" className="border-b border-line">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="bring-title" className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
              O que separar para a primeira conversa
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Não precisa ter tudo. O que faltar vira item da proposta.
            </p>
          </div>
          <ul className="grid-ruled lg:col-span-8">
            {bring.map((item, index) => (
              <li key={item} className="cell flex gap-5 px-6 py-4">
                <span className="index shrink-0">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed text-ink">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="border-b border-line">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
          <h2 id="faq-title" className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:col-span-4">
            Perguntas frequentes
          </h2>
          <div className="lg:col-span-8">
            {faq.map((item) => (
              <details key={item.question} className="group border-b border-line py-5 first:border-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-ink [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span aria-hidden className="font-mono text-sm text-ink-faint transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">{item.answer}</p>
              </details>
            ))}
            <p className="mt-8 text-xs leading-relaxed text-ink-faint">
              Fontes:{" "}
              {sources.map((source, index) => (
                <span key={source.href}>
                  {index > 0 ? " · " : null}
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="link">
                    {source.label}
                  </a>
                </span>
              ))}
              . Este texto não é orientação jurídica.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="shell flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
              Conte como é o seu consultório
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              Especialidade, cidade e o que você atende. A resposta vem com uma
              proposta de estrutura para a página e o orçamento.
            </p>
          </div>
          <a href={mailto} className="btn btn-primary">
            Escrever para {dict.site.email}
          </a>
        </div>
      </section>
    </>
  );
}
