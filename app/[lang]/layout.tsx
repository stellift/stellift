import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/app/[lang]/_components/header";
import Footer from "@/app/[lang]/_components/footer";
import { isLocale, locales, siteUrl } from "@/lib/i18n/config";
import { altLanguages, getDictionary } from "@/lib/i18n/server";

const themeScript = `(function(){try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="dark"?"dark":"light"}catch(e){}})()`;

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
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
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Header dict={dict} lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
