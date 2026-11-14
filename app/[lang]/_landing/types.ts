export type Cited = { text: string; source: string };

export type Niche = {
  id: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  eyebrow: string;
  audience: string;
  lead: string;
  mailSubject: string;
  card: { name: string; summary: string };
  demo: {
    path: string;
    label: string;
    image: string;
    ogImage: string;
    imageAlt: string;
    schema: object;
    schemaText: string;
  };
  questions: { title: string; lead: string; items: { title: string; text: string }[] };
  anatomy: { x: number; y: number; text: string; source: string | null }[];
  rules: { title: string; lead: string; includes: Cited[]; avoids: Cited[]; note: string };
  checklist: { lead: string; items: (Cited & { id: string })[]; disclaimer: string };
  seo: { title: string; text: string }[];
  privacy: { title: string; text: string } | null;
  steps: { title: string; text: string }[];
  bring: string[];
  faq: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
  cta: { title: string; text: string };
};
