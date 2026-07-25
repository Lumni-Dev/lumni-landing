import type { Metadata } from "next";

import { LegalList, LegalSection, LegalShell } from "@/components/layout/legal-shell";
import { CompanyRepository } from "@/data/company.repository";

const UPDATED_AT = "25 de julho de 2026";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Lumni coleta, usa e protege os seus dados pessoais, incluindo o login com Google, GitHub e LinkedIn.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Política de Privacidade | Lumni",
    description:
      "Como a Lumni coleta, usa e protege os seus dados pessoais, incluindo o login com Google, GitHub e LinkedIn.",
    url: "/privacy",
    type: "article",
  },
};

export default function PrivacyPage() {
  const company = CompanyRepository.find();
  const email =
    CompanyRepository.findContactChannels().find((channel) => channel.kind === "email")?.value ??
    "contato@lumni.dev.br";

  return (
    <LegalShell
      title="Política de Privacidade"
      updatedAt={UPDATED_AT}
      intro={
        <>
          Esta Política explica como a {company.legalName} ({company.name}) trata os seus dados
          pessoais quando você usa o nosso site e os nossos produtos, em conformidade com a Lei
          Geral de Proteção de Dados (Lei nº 13.709/2018 &ndash; LGPD).
        </>
      }
    >
      <LegalSection heading="1. Quem é o controlador dos dados">
        <p>
          O controlador dos seus dados pessoais é a {company.legalName}, inscrita no CNPJ sob o nº{" "}
          {company.taxId}. Para qualquer assunto relacionado a privacidade e proteção de dados, fale
          conosco pelo e-mail{" "}
          <a
            href={`mailto:${email}`}
            className="text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            {email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="2. Quais dados coletamos">
        <p>Coletamos apenas o necessário para autenticar e prestar o serviço:</p>
        <LegalList
          items={[
            <>
              <strong className="text-ink-100">Dados de conta (login social).</strong> Quando você
              entra com Google, GitHub ou LinkedIn, recebemos do provedor os dados básicos que você
              autoriza: nome, endereço de e-mail (e se ele é verificado), foto de perfil e um
              identificador único da sua conta no provedor.
            </>,
            <>
              <strong className="text-ink-100">Conteúdo que você cria.</strong> Informações que você
              registra no aplicativo (por exemplo: anotações, instruções, agentes, agendamentos,
              alarmes, histórico de conversas e configurações).
            </>,
            <>
              <strong className="text-ink-100">Dados técnicos essenciais.</strong> Informações
              mínimas necessárias ao funcionamento e à segurança, como registros de acesso e
              identificadores de sessão.
            </>,
          ]}
        />
        <p>
          Não solicitamos nem armazenamos a sua senha dos provedores de login: a autenticação
          acontece no ambiente seguro de cada provedor.
        </p>
      </LegalSection>

      <LegalSection heading="3. Como e por que usamos os seus dados">
        <p>Usamos os seus dados para as seguintes finalidades:</p>
        <LegalList
          items={[
            "Autenticar o seu acesso e manter você conectado com segurança;",
            "Identificar e vincular a sua conta pelo e-mail verificado, para que você reencontre os seus dados ao entrar por qualquer provedor;",
            "Fornecer, manter e melhorar as funcionalidades do produto;",
            "Prevenir fraudes, abusos e garantir a segurança do serviço;",
            "Cumprir obrigações legais e regulatórias.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. Base legal do tratamento">
        <p>
          Tratamos os seus dados com fundamento nas hipóteses da LGPD, especialmente: a execução do
          contrato e de procedimentos preliminares a seu pedido (art. 7º, V); o seu consentimento ao
          usar o login social (art. 7º, I); o cumprimento de obrigação legal (art. 7º, II); e o
          legítimo interesse para segurança e prevenção a fraudes (art. 7º, IX).
        </p>
      </LegalSection>

      <LegalSection heading="5. Login com Google, GitHub e LinkedIn">
        <p>
          Ao escolher entrar com um provedor, você é levado à tela oficial dele e decide se autoriza
          o compartilhamento dos dados básicos do seu perfil. Recebemos apenas essas informações e{" "}
          <strong className="text-ink-100">não</strong> publicamos nada, não enviamos mensagens e
          não acessamos conteúdos além do perfil básico e do e-mail. Você pode revogar esse acesso a
          qualquer momento nas configurações de segurança do respectivo provedor.
        </p>
      </LegalSection>

      <LegalSection heading="6. Compartilhamento de dados">
        <p>
          Nós não vendemos os seus dados pessoais. Podemos compartilhá-los apenas com operadores que
          nos ajudam a prestar o serviço e que estão obrigados a protegê-los, como provedores de
          hospedagem e de banco de dados, e os provedores de identidade usados no login. Também
          podemos divulgar dados quando exigido por lei ou ordem de autoridade competente.
        </p>
      </LegalSection>

      <LegalSection heading="7. Armazenamento e segurança">
        <p>
          Adotamos medidas técnicas e organizacionais para proteger os seus dados contra acesso não
          autorizado, perda ou alteração. As credenciais sensíveis do sistema ficam restritas ao
          servidor e nunca são expostas ao aplicativo cliente, e as comunicações com nossos serviços
          são protegidas em trânsito.
        </p>
      </LegalSection>

      <LegalSection heading="8. Por quanto tempo guardamos">
        <p>
          Mantemos os seus dados enquanto a sua conta existir ou enquanto forem necessários para as
          finalidades desta Política. Encerrada a conta, os dados são eliminados ou anonimizados,
          salvo quando a lei exigir a sua guarda por período determinado.
        </p>
      </LegalSection>

      <LegalSection heading="9. Os seus direitos">
        <p>Nos termos do art. 18 da LGPD, você pode a qualquer momento solicitar:</p>
        <LegalList
          items={[
            "A confirmação da existência de tratamento e o acesso aos seus dados;",
            "A correção de dados incompletos, inexatos ou desatualizados;",
            "A anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desconformidade;",
            "A portabilidade dos seus dados;",
            "A eliminação dos dados tratados com base no consentimento;",
            "A informação sobre com quem compartilhamos os seus dados;",
            "A revogação do consentimento.",
          ]}
        />
        <p>
          Para exercer os seus direitos, escreva para{" "}
          <a
            href={`mailto:${email}`}
            className="text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            {email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="10. Cookies">
        <p>
          Usamos apenas os cookies e tecnologias equivalentes estritamente necessários ao
          funcionamento e à segurança do serviço. Não utilizamos cookies de publicidade de
          terceiros.
        </p>
      </LegalSection>

      <LegalSection heading="11. Crianças e adolescentes">
        <p>
          O serviço não é direcionado a menores de 18 anos e não coletamos intencionalmente dados de
          menores sem o consentimento dos responsáveis. Se identificarmos esse tipo de coleta,
          eliminaremos os dados.
        </p>
      </LegalSection>

      <LegalSection heading="12. Alterações desta Política">
        <p>
          Podemos atualizar esta Política periodicamente. Quando isso ocorrer, revisaremos a data de
          &ldquo;última atualização&rdquo; no topo desta página e, quando cabível, avisaremos por
          meios adequados.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contato">
        <p>
          Dúvidas, pedidos ou reclamações sobre privacidade podem ser enviados para{" "}
          <a
            href={`mailto:${email}`}
            className="text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            {email}
          </a>
          . Você também pode consultar os nossos{" "}
          <a
            href="/terms"
            className="text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            Termos de Uso
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
