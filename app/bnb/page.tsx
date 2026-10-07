import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Callout } from "@/components/callout";
import { Cards } from "@/components/cards";
import { Checklist } from "@/components/checklist";
import { Faq } from "@/components/faq";
import { Section } from "@/components/section";
import { ServicePage } from "@/components/service-page";
import { Team } from "@/components/team";
import { WhatsAppButton } from "@/components/whatsapp";
import { yearsActive } from "@/lib/company";
import { sites, siteUrl } from "@/lib/sites";
import { LeadForm } from "./lead-form";

export const metadata: Metadata = {
  title: sites.bnb.title,
  alternates: { canonical: siteUrl("bnb") },
};

export default function Bnb() {
  return (
    <ServicePage
      site="bnb"
      image={
        <img
          className="h-auto w-[clamp(4.5rem,10vw,7rem)]"
          src="/svg/bnb.svg"
          alt=""
        />
      }
      title="Invista no seu negócio com o Financiamento do Banco do Nordeste"
      text="Faça o cadastro e nós lhe guiamos pelo processo de crédito."
      action={<Button href="#analise">Verificar enquadramento</Button>}
    >
      <Section
        anchor="o_que_e"
        title="Consultoria experiente para facilitar sua aprovação"
        intro="Acesse os juros menores do mercado e aproveite condições exclusivas para empresas do Nordeste. A Consultoria em Financiamento BNB é ideal para empresas e empreendedores que precisam de capital para investir, mas encontram barreiras no processo de solicitação de crédito."
      >
        <h3 className="mt-10 text-xl font-bold">O que a consultoria inclui?</h3>
        <Cards
          items={[
            {
              title: "Análise de viabilidade do negócio",
              text: "Avaliamos se o projeto atende aos critérios do banco e tem potencial de aprovação.",
            },
            {
              title: "Preparação e revisão de toda a documentação",
              text: "Organizamos e revisamos todos os documentos exigidos para evitar pendências.",
            },
            {
              title: "Plano de negócios e plano SEAP",
              text: "Estruturamos o projeto de forma técnica e convincente, conforme os padrões do BNB.",
            },
            {
              title: "Acompanhamento até a liberação do crédito",
              text: "Seguimos ao lado do cliente em cada fase, até a liberação do recurso.",
            },
          ]}
        />
      </Section>

      <Section title="Por que escolher nossa consultoria">
        <Checklist
          items={[
            "Clareza para seguir cada etapa com segurança e previsibilidade.",
            "Fortaleça sua proposta entregando exatamente o que o banco exige.",
            "Entenda quais linhas de crédito são mais adequadas ao seu negócio.",
            `${yearsActive()} anos de experiência em análise e projetos, com histórico sólido de resultados.`,
          ]}
        />
      </Section>

      <Section anchor="beneficios" title="Benefícios do Financiamento BNB">
        <Cards
          items={[
            {
              title: "Linhas específicas para inovação e expansão empresarial",
            },
            { title: "Menores taxas de juros" },
            { title: "Prazos com carência" },
            {
              title: "Crédito disponível mesmo para empresas sem faturamento",
            },
          ]}
        />
      </Section>

      <Callout
        className="text-center"
        text="Solicitar um financiamento sem assessoria pode se tornar um processo demorado."
      >
        <WhatsAppButton service="bnb" className="mt-6">
          Falar com um especialista
        </WhatsAppButton>
      </Callout>

      <Section eyebrow="Especialistas" title="Quem cuida do seu projeto">
        <Team members={["david", "alexandre", "daniel"]} />
      </Section>

      <Section anchor="duvidas" title="Perguntas frequentes">
        <Faq
          items={[
            {
              q: "O que é o Financiamento BNB?",
              a: "O Financiamento do Banco do Nordeste (BNB) é uma linha de crédito voltada para o crescimento de empresas e empreendedores, com taxas de juros reduzidas, prazo estendido e carência para início do pagamento.",
            },
            {
              q: "Quem pode solicitar o Financiamento BNB?",
              a: "Empresas e empreendedores de diversos setores podem solicitar, desde que apresentem um projeto viável e documentação adequada.",
            },
            {
              q: "Qual é o valor mínimo e máximo de financiamento?",
              a: "O valor mínimo é de R$ 100 mil, e o máximo não é fixo, pois depende do porte da empresa e do tipo de projeto.",
            },
            {
              q: "Quanto tempo leva para o crédito ser aprovado e liberado?",
              a: "O processo costuma levar de 2 a 3 meses, variando conforme o porte do empreendimento.",
            },
            {
              q: "Quais tipos de financiamento a consultoria atende?",
              a: "Atendemos projetos nas linhas empresarial e de inovação.",
            },
            {
              q: "O que está incluso na consultoria?",
              a: "A consultoria abrange análise de viabilidade, preparo e revisão de documentação, elaboração do plano de negócios e SEAP, e acompanhamento integral até a liberação do recurso.",
            },
            {
              q: "Por que contratar uma consultoria é melhor do que fazer o processo sozinho?",
              a: "Tentar o financiamento sem orientação pode resultar em burocracia excessiva, demora e até recusa do crédito.",
            },
            {
              q: "A consultoria garante a aprovação do financiamento?",
              a: `Não existe garantia formal de aprovação, pois ela depende da análise do BNB, mas nossos ${yearsActive()} anos de experiência e alta taxa de aprovação mostram a eficácia do nosso trabalho.`,
            },
            {
              q: "A consultoria tem custo?",
              a: "Sim, a consultoria é um serviço especializado. O investimento varia conforme a complexidade do projeto.",
            },
            {
              q: "Como posso começar o processo?",
              a: "Basta preencher o formulário abaixo ou falar com um especialista pelo WhatsApp.",
            },
          ]}
        />
      </Section>

      <Section
        id="analise"
        className="text-center [&>h2]:mx-auto [&>p]:mx-auto"
        eyebrow="Análise gratuita"
        title="Solicite uma análise gratuita agora mesmo"
        intro="Preencha os dados e enviaremos sua solicitação pelo WhatsApp."
      >
        <LeadForm />
      </Section>
    </ServicePage>
  );
}
