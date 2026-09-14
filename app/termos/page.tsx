import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site institucional da Emanuàh Group.",
};

export default function TermosPage() {
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
            Termos de Uso
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
            Estes termos estabelecem as condições gerais para utilização do
            site institucional da Emanuàh Group.
          </p>
        </div>

        <div className="space-y-14 text-sm leading-7 text-white/60">
          <section>
            <h2 className="font-serif text-2xl text-white">
              1. Aceitação dos termos
            </h2>

            <p className="mt-4">
              Ao acessar e utilizar este site, o visitante declara estar de
              acordo com estes Termos de Uso e com a legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              2. Sobre o site
            </h2>

            <p className="mt-4">
              O site apresenta informações institucionais sobre a Emanuàh
              Group, seus serviços, artistas, projetos, eventos e formas
              oficiais de contato.
            </p>

            <p className="mt-4">
              As informações disponíveis no site têm finalidade institucional
              e informativa e não constituem, por si só, contrato de prestação
              de serviços.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              3. Conteúdo do site
            </h2>

            <p className="mt-4">
              Textos, elementos visuais, identidade gráfica, vídeos, imagens,
              marcas e demais materiais disponibilizados neste site podem estar
              protegidos pela legislação aplicável de propriedade intelectual.
            </p>

            <p className="mt-4">
              É proibida a reprodução, distribuição, modificação ou utilização
              comercial de conteúdos do site sem autorização quando essa
              autorização for necessária.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              4. Uso adequado
            </h2>

            <p className="mt-4">
              O visitante deve utilizar o site de maneira lícita e adequada,
              não podendo tentar comprometer seu funcionamento, obter acesso
              não autorizado a sistemas ou utilizar seus conteúdos para
              atividades ilegais.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              5. Links externos
            </h2>

            <p className="mt-4">
              O site pode disponibilizar links para serviços e plataformas
              externas, incluindo redes sociais e canais de comunicação.
            </p>

            <p className="mt-4">
              A Emanuàh Group não controla integralmente os conteúdos,
              políticas ou práticas de privacidade dessas plataformas. Ao
              acessá-las, o visitante estará sujeito aos respectivos termos
              e políticas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              6. Disponibilidade
            </h2>

            <p className="mt-4">
              A Emanuàh Group busca manter o site disponível e funcionando
              corretamente, mas não garante que o acesso será ininterrupto ou
              livre de erros em todos os momentos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              7. Alterações
            </h2>

            <p className="mt-4">
              Estes Termos de Uso podem ser modificados sempre que necessário
              para refletir alterações no site, nos serviços oferecidos ou na
              legislação aplicável.
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