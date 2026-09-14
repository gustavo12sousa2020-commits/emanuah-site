import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Emanuàh Group, referente ao uso do site e aos canais de contato.",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-10">
        <a
          href="/"
          className="mb-16 inline-flex text-[10px] tracking-[0.25em] text-white/40 transition hover:text-white"
        >
          ← VOLTAR AO SITE
        </a>

        <div className="mb-16">
          <p className="text-[10px] tracking-[0.35em] text-[#c8a96b]">
            EMANUÀH GROUP
          </p>

          <h1 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">
            Política de Privacidade
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
            Este documento explica, de forma transparente, como informações
            pessoais podem ser tratadas durante a utilização do site da
            Emanuàh Group e de seus canais de contato.
          </p>
        </div>

        <div className="space-y-14 text-sm leading-7 text-white/60">
          <section>
            <h2 className="font-serif text-2xl text-white">
              1. Quem somos
            </h2>

            <p className="mt-4">
              A Emanuàh Group atua com assessoria artística, gestão de
              talentos e produção de eventos.
            </p>

            <p className="mt-4">
              Esta Política de Privacidade se aplica ao site institucional da
              Emanuàh Group e descreve as práticas relacionadas às informações
              eventualmente fornecidas pelos visitantes por meio dos canais
              de contato disponibilizados no site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              2. Quais informações podem ser tratadas
            </h2>

            <p className="mt-4">
              O site não exige cadastro de usuários e não possui, atualmente,
              um sistema próprio de criação de contas.
            </p>

            <p className="mt-4">
              Quando você entra em contato com a Emanuàh Group por meio dos
              canais disponibilizados no site, poderá fornecer informações
              como nome, número de telefone, mensagem e outras informações
              que decidir compartilhar voluntariamente.
            </p>

            <p className="mt-4">
              A quantidade e o tipo de informações fornecidas dependem da
              finalidade e do conteúdo da conversa iniciada pelo próprio
              visitante.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              3. Para que utilizamos essas informações
            </h2>

            <p className="mt-4">
              As informações fornecidas poderão ser utilizadas para:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>responder solicitações e mensagens;</li>
              <li>realizar contatos relacionados a serviços;</li>
              <li>tratar solicitações relacionadas a artistas e eventos;</li>
              <li>prestar atendimento;</li>
              <li>manter a comunicação solicitada pelo visitante.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              4. Compartilhamento de informações
            </h2>

            <p className="mt-4">
              A Emanuàh Group não vende informações pessoais dos visitantes.
            </p>

            <p className="mt-4">
              Quando o visitante utiliza links para serviços externos, como
              WhatsApp ou Instagram, a interação passa a ocorrer também nos
              ambientes e sistemas desses respectivos serviços. O tratamento
              realizado por essas plataformas está sujeito às políticas e
              condições próprias de cada empresa.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              5. Cookies e tecnologias semelhantes
            </h2>

            <p className="mt-4">
              O site institucional não utiliza, neste momento, mecanismos
              próprios de cadastro, publicidade comportamental ou cookies
              não essenciais destinados à criação de perfis de usuários.
            </p>

            <p className="mt-4">
              Caso novas tecnologias de rastreamento, análise ou publicidade
              sejam implementadas futuramente, esta política poderá ser
              atualizada para refletir essas alterações.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              6. Segurança
            </h2>

            <p className="mt-4">
              A Emanuàh Group busca adotar medidas técnicas e organizacionais
              adequadas para proteger as informações tratadas por seus
              próprios meios contra acessos não autorizados, perda, alteração
              ou divulgação indevida.
            </p>

            <p className="mt-4">
              Apesar dos cuidados adotados, nenhum serviço conectado à
              internet pode garantir segurança absoluta contra todos os
              riscos existentes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              7. Direitos dos titulares
            </h2>

            <p className="mt-4">
              Nos termos da legislação aplicável, especialmente da Lei Geral
              de Proteção de Dados Pessoais (LGPD), o titular poderá exercer,
              conforme aplicável, direitos relacionados aos seus dados
              pessoais, incluindo acesso, correção, informação sobre o
              tratamento e outras solicitações previstas em lei.
            </p>

            <p className="mt-4">
              Solicitações relacionadas à privacidade podem ser encaminhadas
              pelos canais oficiais de contato da Emanuàh Group.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              8. Atualizações desta política
            </h2>

            <p className="mt-4">
              Esta Política de Privacidade poderá ser atualizada para refletir
              mudanças no site, nos serviços utilizados ou nas exigências
              legais aplicáveis.
            </p>

            <p className="mt-4 text-white/35">
              Última atualização: setembro de 2026.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}