import { expect, test } from "bun:test";
import { whatsappLink } from "./contact";

test("whatsappLink codifica a mensagem", () => {
  const url = new URL(whatsappLink("Olá & até\nlogo"));
  expect(url.searchParams.get("phone")).toBe("5588999940004");
  expect(url.searchParams.get("text")).toBe("Olá & até\nlogo");
});
