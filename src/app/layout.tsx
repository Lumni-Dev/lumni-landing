import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ContentGuard } from "@/components/system/content-guard";
import { CompanyRepository } from "@/data/company.repository";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const company = CompanyRepository.find();

const SITE_URL = "https://www.lumni.dev.br";
const PAGE_TITLE = `${company.name} - ${company.tagline}`;
const OG_IMAGE = "/images/logo-inverse.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.legalName,
  category: "technology",
  keywords: [
    "Lumni",
    "desenvolvimento de sistemas",
    "desenvolvimento de aplicativos",
    "engenharia de software",
    "software sob demanda",
    "automação de processos",
    "integração de sistemas",
    "RPA",
    "consultoria em tecnologia",
    "cibersegurança",
    "squad de desenvolvimento",
    "alocação de desenvolvedores",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: company.name,
    title: PAGE_TITLE,
    description: company.description,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 600,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: company.description,
    images: [OG_IMAGE],
  },
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
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-950 text-ink-100">
        <ContentGuard />
        <div aria-hidden="true" className="grain" />
        {children}
      </body>
    </html>
  );
}
