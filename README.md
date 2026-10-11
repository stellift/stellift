# stellift

Landing page da **stellift**, boutique de software. Next.js 16, bilíngue
(pt-BR / en), estática.

[![License: MIT](https://img.shields.io/badge/License-MIT-0b1f4d.svg)](LICENSE)

## Stack

- [Next.js 16](https://nextjs.org) — App Router, Turbopack
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — tokens em `app/globals.css`
- [pnpm](https://pnpm.io)

## Rodando

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000 — você é redirecionado para `/pt-BR` ou `/en`
conforme o `Accept-Language`.

| Script       | O que faz                   |
| ------------ | --------------------------- |
| `pnpm dev`   | Servidor de desenvolvimento |
| `pnpm build` | Build de produção           |
| `pnpm start` | Serve o build de produção   |
| `pnpm lint`  | ESLint                      |

## Estrutura

```
app/
  [lang]/layout.tsx   Layout por idioma: fontes, metadados, header e footer
  [lang]/page.tsx     Página única + JSON-LD da organização
  globals.css         Tokens, sombras, foco, scrollbar, reduced-motion
  sitemap.ts          Sitemap com alternates hreflang
  robots.ts
  icon.svg
components/
  header.tsx            Navegação sticky com scrollspy e menu mobile
  language-switcher.tsx Dropdown de idioma
  hero.tsx
  services.tsx + card.tsx + plates.tsx
  clients.tsx           Grade no desktop, carrossel abaixo de lg
  portfolio.tsx
  about.tsx
  contact.tsx + contact-form.tsx
  section-heading.tsx, icons.tsx, brand-logos.tsx, footer.tsx
lib/i18n/
  config.ts   Locales, nomes, URL do site
  types.ts    Formato do dicionário
  pt-BR.ts    Conteúdo em português
  en.ts       Conteúdo em inglês
  server.ts   Carregamento do dicionário
proxy.ts      Detecta o idioma e redireciona a raiz
```

Todo o texto do site vive em `lib/i18n/pt-BR.ts` e `lib/i18n/en.ts`. Os dois
são tipados pelo mesmo `Dictionary`, então um idioma não sai do ar sem o
compilador reclamar.

## Idiomas

`proxy.ts` roda na borda, lê o `Accept-Language` e redireciona `/` para o
locale correspondente. Cada idioma é pré-renderizado em build
(`generateStaticParams`), com `alternates.languages` nos metadados e no
sitemap.

Para adicionar um idioma: inclua o código em `locales` e `localeNames`
(`lib/i18n/config.ts`), crie o dicionário ao lado de `pt-BR.ts` e registre-o
em `server.ts`. O `Dictionary` aponta o que falta.

## Design

Tokens em `@theme` no `app/globals.css`:

| Token     | Valor     | Uso                                |
| --------- | --------- | ---------------------------------- |
| `canvas`  | `#ffffff` | fundo da página                    |
| `paper`   | `#ffffff` | cards e painéis                    |
| `surface` | `#f2f4f7` | hover, campos e placas             |
| `ink`     | `#0b1a33` | texto principal                    |
| `ink-2`   | `#4a5568` | texto secundário                   |
| `ink-3`   | `#8a94a3` | legendas                           |
| `line`    | `#e4e6ea` | filetes e bordas                   |
| `link`    | `#1f5bd8` | acento: rótulos, títulos de card   |
| `navy`    | `#0b1f4d` | CTA e rodapé                       |

Tipografia: **Newsreader** (display) e **Inter Tight** (interface), via
`next/font`. Sem fotografia — as placas dos cards de serviço são SVG
autorados em `components/plates.tsx`.

## Formulário de contato

Monta a mensagem e abre o cliente de e-mail do visitante: nada é enviado sem
ele ver antes. Para receber no backend, troque a ação por um `POST` para um
endpoint (Formspree, Resend, etc.).

## SEO

- `canonical` e `hreflang` (`pt-BR`, `en`, `x-default`) no `<head>` e no
  sitemap.
- Imagem Open Graph 1200×630 gerada em build por idioma, em
  `app/[lang]/opengraph-image.tsx`, com as fontes da marca.
- JSON-LD em `@graph`: `Organization`, `WebSite` e `WebPage` ligados por
  `@id`.
- `meta description` própria (`site.metaDescription`), separada do subtítulo
  do hero — os dois têm trabalhos diferentes.

O seletor de idioma do header não aparece no HTML servido (só é renderizado
quando aberto). Isso não é problema de indexação: o sinal canônico de idioma
alternativo é o `hreflang`, e o rodapé tem links sempre renderizados para
cada idioma.

## Deploy

Build estático padrão do Next.js — roda em qualquer plataforma que suporte
Next 16. Na [Vercel](https://vercel.com), importe o repositório e aceite os
padrões.

### Endereço do site

`siteUrl` (`lib/i18n/config.ts`) alimenta canonical, `hreflang`, sitemap e
`robots.txt`, e resolve nesta ordem:

1. `NEXT_PUBLIC_SITE_URL`, se definida.
2. `VERCEL_PROJECT_PRODUCTION_URL` — o domínio de produção do projeto, que a
   Vercel injeta sozinha e que passa a ser o domínio próprio assim que você
   liga um.
3. `http://localhost:3000` em desenvolvimento.

Apontar isto para um domínio que não responde faz a página pedir para não ser
indexada em favor de um endereço inexistente. Em outra hospedagem, defina
`NEXT_PUBLIC_SITE_URL`.

## Licença

Código sob [MIT](LICENSE).

As logomarcas de terceiros em `components/brand-logos.tsx` e `public/logos/`
são marcas de seus respectivos proprietários e **não** estão cobertas pela
licença. Se você reaproveitar este projeto, troque-as pelas suas.

As fontes em `assets/` (Newsreader e Inter Tight, usadas para gerar a imagem
Open Graph) são distribuídas sob a
[SIL Open Font License 1.1](https://openfontlicense.org).
