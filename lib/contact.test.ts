import { expect, test } from "bun:test";
import { WHATSAPP_NUMBER } from "./company";
import { whatsappLink } from "./contact";

test("whatsappLink aponta para o número da empresa e codifica a mensagem", () => {
  const url = new URL(whatsappLink("Olá & até\nlogo"));
  expect(url.searchParams.get("phone")).toBe(WHATSAPP_NUMBER);
  expect(url.searchParams.get("text")).toBe("Olá & até\nlogo");
});
