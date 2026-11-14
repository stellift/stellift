import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./demo.css";
import { siteUrl } from "@/lib/i18n/config";

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Exemplo de landing page para escritório de advocacia | stellift",
  description:
    "Página de exemplo feita pela stellift para mostrar como fica uma landing " +
    "page de escritório de advocacia. Escritório, advogados e registros são fictícios.",
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${workSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
