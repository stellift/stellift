# stellift

Landing page for stellift, a software boutique. Next.js 16, bilingual
(pt-BR and en), static.

[![License: MIT](https://img.shields.io/badge/License-MIT-0b1f4d.svg)](LICENSE)

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. You are redirected to `/pt-BR` or `/en` based on
your `Accept-Language` header.

| Script       | What it does      |
| ------------ | ----------------- |
| `pnpm dev`   | Development server |
| `pnpm build` | Production build   |
| `pnpm start` | Serve the build    |
| `pnpm lint`  | ESLint             |

## Content

All copy lives in `lib/i18n/pt-BR.ts` and `lib/i18n/en.ts`. Both are typed by
the same `Dictionary`, so a missing translation fails the build.

To add a language:

1. Add the code to `locales` and `localeNames` in `lib/i18n/config.ts`.
2. Create the dictionary next to `pt-BR.ts`.
3. Register it in `lib/i18n/server.ts`.

## Site URL

`siteUrl` in `lib/i18n/config.ts` feeds the canonical tag, hreflang, sitemap
and robots. It resolves in this order:

1. `NEXT_PUBLIC_SITE_URL`
2. `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel sets to your custom domain
   once you attach one
3. `http://localhost:3000`

Pointing this at a domain that does not answer tells search engines to index
an address that is not there.

## Contact form

Builds the message and opens the visitor's email client. Nothing is sent
without them seeing it first. To receive submissions on a backend, replace
the action with a `POST` to an endpoint.

## License

[MIT](LICENSE).

Third party logos in `components/brand-logos.tsx`, `public/logos/` and
`lib/tech.ts` are trademarks of their owners and are not covered by the
license. The technology icon paths in `lib/tech.ts` come from
[Simple Icons](https://simpleicons.org) (CC0) and are used to identify each
stack. The stellift
mark in `public/logos/stellift.png`, `app/icon.png` and `app/apple-icon.png`
is ours and is not covered either. Replace them with your own if you reuse
this project. Fonts in `assets/` are under the
[SIL Open Font License 1.1](https://openfontlicense.org).
