import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Frame from "@/app/[lang]/_components/frame";
import Footer from "@/app/[lang]/_components/footer";
import Intro from "@/app/[lang]/_components/intro";
import { isLocale, locales, siteUrl } from "@/lib/i18n/config";
import { altLanguages, getDictionary } from "@/lib/i18n/server";

const bootScript = `(function(){var r=document.documentElement;try{r.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch(e){}try{if(sessionStorage.getItem("seen"))r.dataset.intro="skip";else sessionStorage.setItem("seen","1")}catch(e){}})()`;

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    title: dict.site.metaTitle,
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
      title: dict.site.metaTitle,
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
      title: dict.site.metaTitle,
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
      className={`${instrumentSans.variable} ${fraunces.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Intro dict={dict} />
        <a href="#main" className="skip-link">
          {dict.ui.a11y.skipToContent}
        </a>
        <Frame dict={dict} lang={lang} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
