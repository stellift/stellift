import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./demo.css";
import { siteUrl } from "@/lib/i18n/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Exemplo de landing page para clínica de dermatologia | stellift",
  description:
    "Página de exemplo feita pela stellift para mostrar como fica uma landing " +
    "page de clínica médica. Clínica, médica e registros são fictícios.",
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f2ec",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
