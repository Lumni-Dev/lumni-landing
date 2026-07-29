import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";

import { ContentGuard } from "@/components/system/content-guard";
import { CompanyRepository } from "@/data/company.repository";
import {
  getLocaleDefinition,
  LOCALES,
  localePath,
  SITE_URL,
  toLocaleCode,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localeAlternates, ogAlternateLocales } from "@/i18n/metadata";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

interface LocaleParams {
  params: Promise<{ locale: string }>;
}

/** Só os idiomas de generateStaticParams existem; o resto vira 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale: locale.code }));
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocaleCode((await params).locale);
  const dict = getDictionary(locale);
  const company = CompanyRepository.find(locale);
  const definition = getLocaleDefinition(locale);
  const pageTitle = `${company.name} - ${company.tagline}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: pageTitle,
      template: `%s - ${company.name}`,
    },
    description: company.description,
    applicationName: company.name,
    authors: [{ name: company.name, url: SITE_URL }],
    creator: company.name,
    publisher: company.legalName,
    category: "technology",
    keywords: dict.meta.keywords,
    alternates: localeAlternates(locale, "/"),
    openGraph: {
      type: "website",
      locale: definition.ogLocale,
      alternateLocale: ogAlternateLocales(locale),
      url: localePath(locale, "/"),
      siteName: company.name,
      title: pageTitle,
      description: company.description,
      // A imagem é gerada por src/app/[locale]/opengraph-image.tsx (og:image automático).
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: company.description,
      // Sem twitter-image dedicada: o X usa o og:image gerado como fallback.
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
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LocaleParams) {
  const locale = toLocaleCode((await params).locale);
  const definition = getLocaleDefinition(locale);

  return (
    <html
      lang={definition.htmlLang}
      dir={definition.dir}
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-950 text-ink-100">
        <ContentGuard />
        <div aria-hidden="true" className="grain" />
        {children}
      </body>
    </html>
  );
}
