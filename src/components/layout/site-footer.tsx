import { ChannelIcon } from "@/components/icons/channel-icon";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import type { Company } from "@/domain/models/company";
import type { ContactChannel } from "@/domain/models/contact-channel";
import type { Service } from "@/domain/models/service";
import { localePath, type LocaleCode } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface SiteFooterProps {
  locale: LocaleCode;
  company: Company;
  services: readonly Service[];
  channels: readonly ContactChannel[];
}

export function SiteFooter({ locale, company, services, channels }: SiteFooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="relative z-10">
      <Container>
        <div className="border-t border-ink-800 py-20">
          <div className="grid items-start gap-12 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">
            <div className="max-w-sm">
              <Logo companyName={company.name} className="h-10 w-auto" />
              <p className="mt-6 text-sm leading-relaxed text-pretty text-ink-400">{company.description}</p>
            </div>

            <nav aria-label={dict.footer.servicesHeading}>
              <h2 className="text-xs font-medium tracking-[0.2em] text-ink-500 uppercase">
                {dict.footer.servicesHeading}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <a
                      href={service.anchor}
                      className="text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={dict.footer.contactHeading}>
              <h2 className="text-xs font-medium tracking-[0.2em] text-ink-500 uppercase">
                {dict.footer.contactHeading}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {channels.map((channel) => (
                  <li key={channel.kind}>
                    <a
                      href={channel.href}
                      target={channel.target}
                      rel={channel.rel}
                      className="group inline-flex items-center gap-2.5 text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      <ChannelIcon
                        name={channel.kind}
                        className="h-4 w-4 shrink-0 text-ink-500 transition-colors group-hover:text-white"
                      />
                      <span dir="ltr">{channel.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs text-ink-400">{company.legalLine}</p>
              <p className="text-xs text-ink-500">{company.copyright(new Date().getFullYear())}</p>
            </div>
            <nav aria-label={dict.footer.ariaLegalNav} className="flex items-center gap-6">
              <a
                href={localePath(locale, "/privacy")}
                className="text-xs text-ink-500 transition-colors hover:text-white"
              >
                {dict.footer.privacy}
              </a>
              <a
                href={localePath(locale, "/terms")}
                className="text-xs text-ink-500 transition-colors hover:text-white"
              >
                {dict.footer.terms}
              </a>
              <a
                href="#inicio"
                className="text-xs text-ink-500 transition-colors hover:text-white"
              >
                {dict.footer.backToTop}
              </a>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
