import { expect, test } from "bun:test";
import { WHATSAPP_NUMBER } from "@/lib/company";
import { bnbLeadLink } from "./lead";

test("o formulário enviado vira um link do WhatsApp com cada campo numa linha", () => {
  const form = new FormData();
  form.set("nome", "Ana");
  form.set("empresa", "Ana & Cia");
  form.set("email", "ana@exemplo.com");
  form.set("telefone", "88 9 9999-0000");
  form.set("valor", "R$ 500 mil");
  form.set("projeto", "Ampliar o galpão");
  form.set("extra", "ignorado");

  const url = new URL(bnbLeadLink(form));
  expect(url.searchParams.get("phone")).toBe(WHATSAPP_NUMBER);
  expect(url.searchParams.get("text")).toBe(
    [
      "Vim do site, quero uma análise para o Financiamento BNB.",
      "Nome: Ana",
      "Empresa: Ana & Cia",
      "E-mail: ana@exemplo.com",
      "Telefone: 88 9 9999-0000",
      "Investimento estimado: R$ 500 mil",
      "Projeto: Ampliar o galpão",
    ].join("\n"),
  );
});

test("campo ausente vira texto vazio, não 'null'", () => {
  const text = new URL(bnbLeadLink(new FormData())).searchParams.get("text");
  expect(text).toContain("Nome: \n");
  expect(text).not.toContain("null");
});
