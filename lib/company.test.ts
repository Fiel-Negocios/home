import { expect, test } from "bun:test";
import { PHONE, WHATSAPP_NUMBER, yearsActive } from "./company";

test("o telefone exibido deriva do número do WhatsApp", () => {
  expect(PHONE.replace(/\D/g, "")).toBe(WHATSAPP_NUMBER);
  expect(PHONE).toBe("+55 88 99994-0004");
});

test("os anos de atuação acompanham a data", () => {
  expect(yearsActive(new Date("2026-10-07"))).toBe(21);
  expect(yearsActive(new Date("2027-01-01"))).toBe(22);
});
