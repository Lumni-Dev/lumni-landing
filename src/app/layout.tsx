import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.description,
  applicationName: company.name,
  keywords: [
    "desenvolvimento de sistemas",
    "desenvolvimento de aplicativos",
    "automação de processos",
    "consultoria em tecnologia",
    "cibersegurança",
    "squad de desenvolvimento",
  ],
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    siteName: company.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
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
        <div aria-hidden="true" className="grain" />
        {children}
      </body>
    </html>
  );
}
