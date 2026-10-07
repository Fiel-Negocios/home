import { leadMessage, whatsappLink } from "@/lib/contact";

/**
 * Lead do BNB: o formulário da página vira uma mensagem de WhatsApp com os
 * dados preenchidos. Este módulo define os campos e transforma o formulário
 * enviado no link a abrir.
 */

type BnbLeadName =
  | "nome"
  | "empresa"
  | "email"
  | "telefone"
  | "valor"
  | "projeto";

type BnbLeadField = {
  name: BnbLeadName;
  label: string;
  /** Rótulo do campo na mensagem. */
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

/** Link do WhatsApp com a mensagem do lead; campo ausente vira texto vazio. */
export function bnbLeadLink(form: FormData) {
  return whatsappLink(
    leadMessage(
      bnbLeadFields.map(({ name, message }) => [
        message,
        String(form.get(name) ?? ""),
      ]),
    ),
  );
}
