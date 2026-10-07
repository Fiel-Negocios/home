type BnbLeadName =
  | "nome"
  | "empresa"
  | "email"
  | "telefone"
  | "valor"
  | "projeto";

export type BnbLead = Record<BnbLeadName, string>;

type BnbLeadField = {
  name: BnbLeadName;
  label: string;
  message: string;
  type?: "email" | "tel";
  autoComplete?: string;
  multiline?: boolean;
  wide?: boolean;
};

export const bnbLeadFields: readonly BnbLeadField[] = [
  { name: "nome", label: "Nome", message: "Nome", autoComplete: "name" },
  {
    name: "empresa",
    label: "Nome da empresa",
    message: "Empresa",
    autoComplete: "organization",
  },
  {
    name: "email",
    label: "E-mail",
    message: "E-mail",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "telefone",
    label: "Telefone/WhatsApp",
    message: "Telefone",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "valor",
    label: "Valor estimado do investimento",
    message: "Investimento estimado",
    wide: true,
  },
  {
    name: "projeto",
    label: "Descreva brevemente seu projeto",
    message: "Projeto",
    multiline: true,
    wide: true,
  },
];

// campo ausente vira texto vazio
export function readBnbLead(form: FormData): BnbLead {
  return Object.fromEntries(
    bnbLeadFields.map(({ name }) => [name, String(form.get(name) ?? "")]),
  ) as BnbLead;
}

export function bnbLeadMessage(lead: BnbLead) {
  return [
    "Vim do site, quero uma análise para o Financiamento BNB.",
    ...bnbLeadFields.map((f) => `${f.message}: ${lead[f.name]}`),
  ].join("\n");
}
