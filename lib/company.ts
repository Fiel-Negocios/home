/** Fatos da empresa: nome, tempo de atuação, atendimento e especialistas. */

export const BRAND = "Fiel Imóveis e Investimentos";

/** Ano de fundação; todo "X anos de atuação" dos textos deriva daqui. */
export const FOUNDED = 2005;

export function yearsActive(today = new Date()) {
  return today.getFullYear() - FOUNDED;
}

export const HOURS = "das 09h às 18h";

export const EMAIL = "faleconoscofiel@gmail.com";

/** Número do WhatsApp no formato internacional, só dígitos. */
export const WHATSAPP_NUMBER = "5588999940004";

/** O mesmo número, para exibição. */
export const PHONE = formatPhone(WHATSAPP_NUMBER);

function formatPhone(digits: string) {
  const parts = digits.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  if (!parts) throw new Error(`Número de WhatsApp inesperado: ${digits}`);
  const [, country, area, prefix, line] = parts;
  return `+${country} ${area} ${prefix}-${line}`;
}

export type Specialist = { name: string; roles: string[]; bio?: string };

export const specialists = {
  david: {
    name: "David Meneses",
    roles: [
      "Desenvolvedor Imobiliário · Engenheiro Civil",
      "Avaliador e Perito",
    ],
  },
  alexandre: {
    name: "Alexandre Chastinet",
    roles: ["Administrador · Gerente de Negócios", "Agente de Desenvolvimento"],
    bio: "Atuei por 18 anos no Banco do Nordeste, liderando operações de crédito e gestão empresarial, com resultados reconhecidos e premiações por desempenho. Hoje, aplico essa experiência para ajudar empresas a estruturarem financiamentos seguros, viáveis e com maior chance de aprovação.",
  },
  sandy: {
    name: "Sandy Pereira",
    roles: ["Engenheira Civil · Avaliadora e Perita Judicial"],
  },
  daniel: {
    name: "Daniel Gomes",
    roles: ["Advogado · Tecnólogo em Construção Civil", "Corretor de imóveis"],
  },
} as const satisfies Record<string, Specialist>;

export type SpecialistId = keyof typeof specialists;
