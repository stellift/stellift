import type { Metadata, Viewport } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./demo.css";
import { siteUrl } from "@/lib/i18n/config";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Exemplo de landing page para clínica odontológica | stellift",
  description:
    "Página de exemplo feita pela stellift para mostrar como fica uma landing " +
    "page de clínica odontológica. Clínica, dentistas e registros são fictícios.",
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f9f8",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
