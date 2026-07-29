import type { Metadata } from "next";

import { LegalList, LegalSection, LegalShell } from "@/components/layout/legal-shell";
import { LegalRichText, type LegalVars } from "@/components/legal/legal-rich-text";
import { CompanyRepository } from "@/data/company.repository";
import { localePath, toLocaleCode } from "@/i18n/config";
import { getLegalDoc } from "@/i18n/dictionaries";
import { localeAlternates } from "@/i18n/metadata";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const locale = toLocaleCode((await params).locale);
  const doc = getLegalDoc(locale, "privacy");

  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: localeAlternates(locale, "/privacy"),
    openGraph: {
      title: `${doc.metaTitle} - Lumni`,
      description: doc.metaDescription,
      url: localePath(locale, "/privacy"),
      type: "article",
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const locale = toLocaleCode((await params).locale);
  const doc = getLegalDoc(locale, "privacy");
  const company = CompanyRepository.find(locale);
  const email =
    CompanyRepository.findContactChannels(locale).find((channel) => channel.kind === "email")
      ?.value ?? "contact@lumni.dev.br";

  const vars: LegalVars = {
    name: company.name,
    legalName: company.legalName,
    taxId: company.taxId,
    email,
  };

  return (
    <LegalShell
      locale={locale}
      title={doc.title}
      intro={<LegalRichText text={doc.intro} locale={locale} vars={vars} />}
    >
      {doc.sections.map((section) => (
        <LegalSection key={section.heading} heading={section.heading}>
          {section.body.map((block, blockIndex) =>
            "p" in block ? (
              <p key={blockIndex}>
                <LegalRichText text={block.p} locale={locale} vars={vars} />
              </p>
            ) : (
              <LegalList
                key={blockIndex}
                items={block.list.map((item, itemIndex) => (
                  <LegalRichText key={itemIndex} text={item} locale={locale} vars={vars} />
                ))}
              />
            ),
          )}
        </LegalSection>
      ))}
    </LegalShell>
  );
}
