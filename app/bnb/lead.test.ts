import { expect, test } from "bun:test";
import { readBnbLead } from "./lead";

test("readBnbLead lê só os campos do formulário", () => {
  const form = new FormData();
  form.set("nome", "Ana");
  form.set("extra", "x");
  expect(readBnbLead(form)).toEqual({
    nome: "Ana",
    empresa: "",
    email: "",
    telefone: "",
    valor: "",
    projeto: "",
  });
});
