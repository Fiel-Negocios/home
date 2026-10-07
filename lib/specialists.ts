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
