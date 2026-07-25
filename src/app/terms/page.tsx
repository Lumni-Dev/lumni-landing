import type { Metadata } from "next";

import { LegalList, LegalSection, LegalShell } from "@/components/layout/legal-shell";
import { CompanyRepository } from "@/data/company.repository";

const UPDATED_AT = "25 de julho de 2026";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "As regras para o uso do site e dos produtos da Lumni, incluindo o acesso por login social.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Termos de Uso | Lumni",
    description:
      "As regras para o uso do site e dos produtos da Lumni, incluindo o acesso por login social.",
    url: "/terms",
    type: "article",
  },
};

export default function TermsPage() {
  const company = CompanyRepository.find();
  const email =
    CompanyRepository.findContactChannels().find((channel) => channel.kind === "email")?.value ??
    "contato@lumni.dev.br";

  return (
    <LegalShell
      title="Termos de Uso"
      updatedAt={UPDATED_AT}
      intro={
        <>
          Estes Termos regem o uso do site e dos produtos oferecidos pela {company.legalName} (
          {company.name}). Ao acessar ou usar os nossos serviços, você concorda com estes Termos.
        </>
      }
    >
      <LegalSection heading="1. Aceitação dos Termos">
        <p>
          Ao criar uma conta, fazer login ou utilizar qualquer funcionalidade dos nossos serviços,
          você declara ter lido, compreendido e aceitado estes Termos e a nossa{" "}
          <a
            href="/privacy"
            className="text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            Política de Privacidade
          </a>
          . Se você não concordar, não utilize os serviços.
        </p>
      </LegalSection>

      <LegalSection heading="2. Descrição do serviço">
        <p>
          A {company.name} desenvolve sistemas e disponibiliza produtos de software, incluindo
          aplicativos com assistente inteligente. Os recursos podem evoluir, ser adicionados ou
          descontinuados ao longo do tempo.
        </p>
      </LegalSection>

      <LegalSection heading="3. Conta e acesso">
        <p>
          O acesso pode ser feito por login social (Google, GitHub ou LinkedIn). Você é responsável
          por manter a segurança da conta usada para autenticar e por toda atividade realizada por
          meio dela. Avise-nos imediatamente em caso de uso não autorizado.
        </p>
      </LegalSection>

      <LegalSection heading="4. Uso aceitável">
        <p>Ao usar os serviços, você concorda em não:</p>
        <LegalList
          items={[
            "Violar leis, direitos de terceiros ou estes Termos;",
            "Tentar acessar áreas, contas ou dados sem autorização;",
            "Interferir, sobrecarregar ou comprometer a segurança e a integridade do serviço;",
            "Usar o serviço para distribuir conteúdo ilícito, malicioso ou enganoso;",
            "Realizar engenharia reversa, copiar ou explorar o serviço além do permitido em lei.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Propriedade intelectual">
        <p>
          O site, a marca, o software e os materiais disponibilizados pertencem à {company.legalName}{" "}
          ou aos seus licenciadores e são protegidos por lei. Estes Termos não transferem a você
          nenhum direito de propriedade intelectual, exceto a licença limitada de uso do serviço.
        </p>
      </LegalSection>

      <LegalSection heading="6. Conteúdo do usuário">
        <p>
          Você mantém os direitos sobre o conteúdo que cria no serviço. Para operar as
          funcionalidades (como armazenar, sincronizar e exibir os seus dados a você), você nos
          concede uma licença limitada e estritamente necessária a essa finalidade. Você é
          responsável pelo conteúdo que insere e declara ter os direitos para tanto.
        </p>
      </LegalSection>

      <LegalSection heading="7. Isenções e limitação de responsabilidade">
        <p>
          O serviço é fornecido &ldquo;no estado em que se encontra&rdquo;, sem garantias de que
          será ininterrupto ou livre de erros. Na máxima extensão permitida pela lei, a{" "}
          {company.name} não se responsabiliza por danos indiretos, incidentais ou lucros cessantes
          decorrentes do uso ou da impossibilidade de uso do serviço.
        </p>
      </LegalSection>

      <LegalSection heading="8. Suspensão e encerramento">
        <p>
          Podemos suspender ou encerrar o acesso em caso de violação destes Termos ou de risco à
          segurança do serviço. Você pode encerrar o uso a qualquer momento. Encerrada a conta, o
          tratamento dos seus dados segue a nossa Política de Privacidade.
        </p>
      </LegalSection>

      <LegalSection heading="9. Alterações">
        <p>
          Podemos atualizar estes Termos periodicamente. A data de &ldquo;última atualização&rdquo;
          no topo indica a versão vigente. O uso continuado após mudanças significa a aceitação dos
          Termos revisados.
        </p>
      </LegalSection>

      <LegalSection heading="10. Legislação aplicável e foro">
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
          do domicílio do usuário para dirimir eventuais controvérsias, quando aplicável a
          legislação consumerista.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contato">
        <p>
          Em caso de dúvidas sobre estes Termos, fale conosco pelo e-mail{" "}
          <a
            href={`mailto:${email}`}
            className="text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            {email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
