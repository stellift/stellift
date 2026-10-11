import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { isLocale, locales, siteUrl } from "@/lib/i18n/config";
import { altLanguages, getDictionary } from "@/lib/i18n/server";

// Uma face só é todo o sistema tipográfico, variada por escala, peso e
// largura do jeito que um poema concreto varia um alfabeto.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: `${dict.site.name} · ${dict.site.tagline}`,
    description: dict.site.metaDescription,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: `/${lang}`,
      languages: altLanguages(),
    },
    openGraph: {
      title: `${dict.site.name} · ${dict.site.tagline}`,
      description: dict.site.metaDescription,
      type: "website",
      url: `/${lang}`,
      siteName: dict.site.name,
      locale: dict.ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) =>
        l === "pt-BR" ? "pt_BR" : "en_US",
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.site.name} · ${dict.site.tagline}`,
      description: dict.site.metaDescription,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={dict.htmlLang}
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <Header dict={dict} lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}