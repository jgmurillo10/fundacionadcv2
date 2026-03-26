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
  title: {
    default: "Fundaci\u00f3n ADC \u2013 Ambiente, Desarrollo y Calidad",
    template: "%s | Fundaci\u00f3n ADC",
  },
  description:
    "Impulsamos proyectos que transforman el territorio hacia la sostenibilidad. Dise\u00f1amos e implementamos proyectos de sostenibilidad ambiental y social junto a comunidades, empresas e instituciones p\u00fablicas en Girardot, Colombia.",
  keywords: [
    "sostenibilidad",
    "medio ambiente",
    "educaci\u00f3n ambiental",
    "econom\u00eda circular",
    "Girardot",
    "Cundinamarca",
    "Colombia",
    "ODS",
    "fundaci\u00f3n",
    "aceite de cocina usado",
    "biocombustible",
    "reciclaje",
  ],
  authors: [{ name: "Fundaci\u00f3n ADC" }],
  metadataBase: new URL("https://www.fundacionadc.com"),
  openGraph: {
    title: "Fundaci\u00f3n ADC \u2013 Ambiente, Desarrollo y Calidad",
    description:
      "Impulsamos proyectos que transforman el territorio hacia la sostenibilidad en Girardot, Colombia.",
    url: "https://www.fundacionadc.com",
    siteName: "Fundaci\u00f3n ADC",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundaci\u00f3n ADC \u2013 Ambiente, Desarrollo y Calidad",
    description:
      "Impulsamos proyectos que transforman el territorio hacia la sostenibilidad en Girardot, Colombia.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
