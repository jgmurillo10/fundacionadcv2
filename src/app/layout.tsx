import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fundación ADC – Ambiente, Desarrollo y Calidad",
  description:
    "Impulsamos proyectos que transforman el territorio hacia la sostenibilidad. Diseñamos e implementamos proyectos de sostenibilidad ambiental y social junto a comunidades, empresas e instituciones públicas.",
  keywords: [
    "sostenibilidad",
    "medio ambiente",
    "educación ambiental",
    "economía circular",
    "Girardot",
    "Colombia",
    "ODS",
    "fundación",
    "aceite de cocina usado",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
