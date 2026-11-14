import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./demo.css";
import { siteUrl } from "@/lib/i18n/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Exemplo de landing page para lançamento imobiliário | stellift",
  description:
    "Página de exemplo feita pela stellift para mostrar como fica uma landing " +
    "page de lançamento imobiliário. Empreendimento, empresas e registros são fictícios.",
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1d1b18",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
