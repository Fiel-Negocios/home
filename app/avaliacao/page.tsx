import Image from "next/image";
import { Callout } from "@/components/callout";
import { Cards } from "@/components/cards";
import { Checklist } from "@/components/checklist";
import { Faq } from "@/components/faq";
import { Intro } from "@/components/intro";
import { Section } from "@/components/section";
import { servicePage } from "@/components/service-page";
import { Team } from "@/components/team";
import avaliacaoHero from "@/public/img/avaliacao.webp";

const { metadata, Page, ContactButton } = servicePage("avaliacao");

export { metadata };

const propertyTypes = [
  "Galpões e imóveis corporativos",
  "Imóveis residenciais",
  "Imóveis comerciais",
  "Terrenos",
];

const steps = [
  {
    title: "Contato inicial",
    text: "Você entra em contato e entendemos a finalidade do laudo, o tipo de imóvel e os documentos necessários.",
  },
  {
    title: "Vistoria e análise técnica do imóvel",
    text: "Realizamos a vistoria e coletamos todas as informações físicas, documentais e de mercado necessárias para a avaliação.",
  },
  {
    title: "Tratamento de dados e metodologia de avaliação",
    text: "Aplicamos as metodologias previstas na NBR 14.653, com estudo comparativo de mercado e análise técnica.",
  },
  {
    title: "Emissão e entrega do laudo",
    text: "Você recebe o laudo técnico completo, com ART, pronto para utilização em bancos, processos judiciais ou negociações.",
  },
];

export default function Avaliacao() {
  return (
    <Page
      image={
        <Image
          className="aspect-square w-[clamp(7rem,16vw,11rem)] rounded-(--radius) object-cover"
          src={avaliacaoHero}
          alt=""
        />
      }
      title="Avaliação imobiliária com validade jurídica e bancária"
      text="Elaboramos laudos técnicos de avaliação de imóveis conforme a NBR 14.653 para processos judiciais, financiamentos, inventários, desapropriações e garantias."
    >
      <Section
        anchor="o_que_e"
        title="Quando um laudo de avaliação é necessário?"
        intro="A ausência de um laudo técnico pode gerar:"
      >
        <Checklist
          items={[
            "Impugnações em processos judiciais.",
            "Problemas em inventários e partilhas.",
            "Recusa de financiamento ou garantias bancárias.",
            "Questionamentos fiscais e tributários.",
          ]}
        />
        <Intro>
          Se você precisa comprovar e formalizar o valor de um imóvel, não basta
          uma estimativa de mercado. Você precisa de um laudo técnico com
          validade jurídica e bancária. Emitimos laudos conforme a NBR 14.653
          com responsabilidade técnica (ART).
        </Intro>
        <ContactButton className="mt-8">
          Solicitar orçamento do laudo
        </ContactButton>
      </Section>

      <Section
        title="Quem precisa de um laudo de avaliação?"
        intro="Atendemos pessoas e empresas que precisam comprovar formalmente o valor de um imóvel."
      >
        <Checklist
          items={[
            "Processos judiciais e perícias.",
            "Inventários, partilhas e divórcios.",
            "Financiamentos e garantias bancárias.",
            "Desapropriações e revisões de indenização.",
            "Negociações imobiliárias que exigem comprovação técnica de valor.",
            "Avaliação de patrimônio imobiliário de empresas.",
            "Empresas e investidores adquirindo ou vendendo imóveis.",
          ]}
        />
      </Section>

      <Section title="Quais tipos de imóveis avaliamos?">
        <ul className="mt-8 mb-6 grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-4">
          {propertyTypes.map((type) => (
            <li key={type}>
              <div className="placeholder mb-3 aspect-4/3">Imagem</div>
              <strong className="text-[1.1rem] font-bold">{type}</strong>
            </li>
          ))}
        </ul>
        <Intro>
          Todas as avaliações seguem a ABNT NBR 14.653 e as atribuições
          profissionais da engenharia previstas na Lei 5.194/66 e na Resolução
          CONFEA nº 345/90.
        </Intro>
      </Section>

      <Section
        title="Como funciona o processo de avaliação?"
        intro="Seguimos um processo técnico estruturado, do primeiro contato à entrega do laudo."
      >
        <ol className="mt-8 mb-6 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-6">
          {steps.map(({ title, text }, i) => (
            <li key={title} className="border-t-3 border-gold pt-4">
              <span className="mb-2 block text-[2rem] font-extrabold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <strong className="text-[1.1rem] leading-[1.3] font-bold">
                {title}
              </strong>
              <p className="mt-2 leading-[1.55] text-muted">{text}</p>
            </li>
          ))}
        </ol>
        <Intro>
          Prazo médio de entrega: informado no atendimento inicial, conforme o
          tipo de imóvel e finalidade do laudo.
        </Intro>
      </Section>

      <Callout
        eyebrow="Credibilidade técnica"
        text="Laudos elaborados por engenheiro habilitado e associado ao IBAPE, com responsabilidade técnica (ART), conforme a NBR 14.653."
      >
        <ContactButton className="mt-6">Solicitar avaliação</ContactButton>
      </Callout>

      <Section
        anchor="beneficios"
        title="Segurança jurídica e financeira nas decisões"
        intro="O que você ganha com o laudo?"
      >
        <Cards
          items={[
            { title: "Redução de riscos em processos e negociações" },
            { title: "Valor tecnicamente comprovado e defensável" },
            { title: "Proteção do seu patrimônio" },
          ]}
        />
        <p className="mt-8 text-xl font-extrabold text-navy">
          O laudo de avaliação não é custo. É proteção patrimonial.
        </p>
      </Section>

      <Section
        eyebrow="Especialistas"
        title="Fale com um especialista agora"
        intro="Atendemos todo o Ceará, com possibilidade de atuação em outros estados mediante análise."
      >
        <Team members={["david", "sandy", "daniel"]} />
        <ContactButton className="mt-8">Chamar no WhatsApp</ContactButton>
      </Section>

      <Section anchor="duvidas" title="Perguntas frequentes">
        <Faq
          items={[
            {
              q: "O que é um laudo de avaliação imobiliária?",
              a: "É um documento técnico elaborado por engenheiro habilitado que determina o valor de mercado de um imóvel com base em normas técnicas, análise de mercado e metodologias reconhecidas.",
            },
            {
              q: "O laudo tem validade jurídica?",
              a: "Sim. O laudo é elaborado conforme a NBR 14.653, com responsabilidade técnica (ART), podendo ser utilizado em processos judiciais, inventários, financiamentos e negociações formais.",
            },
            {
              q: "Qual a diferença entre laudo e opinião (parecer) de preço?",
              a: "A opinião de preço é uma estimativa comercial. O laudo é um documento técnico, com metodologia, fundamentação e responsabilidade profissional.",
            },
            {
              q: "O banco aceita o laudo?",
              a: "Sim. O laudo pode ser utilizado em diversas situações de financiamento e garantias bancárias, conforme a finalidade da avaliação.",
            },
            {
              q: "Em quais situações preciso de um laudo?",
              a: (
                <>
                  <p>Os casos mais comuns são:</p>
                  <Checklist
                    items={[
                      "Inventários e partilhas.",
                      "Processos judiciais.",
                      "Desapropriações.",
                      "Garantias bancárias.",
                      "Compra e venda de maior complexidade.",
                      "Avaliação patrimonial de empresas.",
                    ]}
                  />
                </>
              ),
            },
            {
              q: "É necessário visitar o imóvel?",
              a: "Na maioria dos casos, sim. A vistoria faz parte do processo de avaliação e garante maior precisão e confiabilidade do laudo.",
            },
            {
              q: "Quanto tempo leva para entregar o laudo?",
              a: "O prazo varia conforme o tipo de imóvel, a finalidade da avaliação e a complexidade do trabalho. O prazo é informado no atendimento inicial.",
            },
            {
              q: "Quanto custa um laudo de avaliação?",
              a: "O valor depende do tipo de imóvel, localização, finalidade e complexidade da análise. Após o primeiro contato, enviamos um orçamento personalizado.",
            },
            {
              q: "O laudo serve para inventário e partilha?",
              a: "Sim. A avaliação é frequentemente utilizada para definir valores em processos de inventário, divórcio e partilha de bens.",
            },
            {
              q: "Como solicitar o laudo?",
              a: "Basta entrar em contato pelo WhatsApp. Nossa equipe irá entender sua necessidade e orientar os próximos passos.",
            },
          ]}
        />
      </Section>
    </Page>
  );
}
