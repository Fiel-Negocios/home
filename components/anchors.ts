export const anchors = {
  o_que_e: "O que é?",
  beneficios: "Benefícios",
  duvidas: "Dúvidas",
} as const;

export type Anchor = keyof typeof anchors;
