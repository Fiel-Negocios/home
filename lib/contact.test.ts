import { expect, test } from "bun:test";
import { WHATSAPP_NUMBER } from "./company";
import { contactMessage, whatsappLink } from "./contact";

function message(link: string) {
  return new URL(link).searchParams.get("text");
}

test("whatsappLink aponta para o número da empresa e codifica a mensagem", () => {
  const url = new URL(whatsappLink("Olá & até\nlogo"));
  expect(url.searchParams.get("phone")).toBe(WHATSAPP_NUMBER);
  expect(url.searchParams.get("text")).toBe("Olá & até\nlogo");
});

test("sem mensagem, o link abre com a mensagem padrão", () => {
  expect(message(whatsappLink())).toBe(contactMessage());
});

test("numa página de serviço, a mensagem cita o serviço", () => {
  expect(contactMessage("bnb")).toContain("Consultoria BNB");
  expect(contactMessage("avaliacao")).toContain("Avaliação de Imóveis");
  expect(contactMessage()).not.toBe(contactMessage("bnb"));
});
