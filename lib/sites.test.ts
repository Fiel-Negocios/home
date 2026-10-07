import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import {
  pageMetadata,
  servedSites,
  services,
  siteHref,
  siteUrl,
} from "./sites";

test("todo site deste projeto tem uma página no app", () => {
  for (const site of servedSites) {
    expect(existsSync(`app${siteHref(site)}/page.tsx`)).toBe(true);
  }
});

test("a página de um serviço recebe o título do site e o canônico do seu caminho", () => {
  expect(pageMetadata("bnb")).toEqual({
    title: "Consultoria BNB",
    alternates: { canonical: siteUrl("bnb") },
  });
});

test("a home ignora o template de título do layout", () => {
  expect(pageMetadata("home").title).toEqual({
    absolute: "Home | Fiel Imóveis e Investimentos",
  });
});

test("sites servidos ficam em caminhos do www; o externo mantém o seu endereço", () => {
  expect(siteUrl("home")).toBe("https://www.fielnegocios.com.br/");
  expect(siteUrl("bnb")).toBe("https://www.fielnegocios.com.br/bnb");
  expect(siteUrl("imoveis")).toBe("https://imoveis.fielnegocios.com.br/");
});

test("links levam ao caminho das páginas deste projeto e ao endereço do externo", () => {
  expect(siteHref("bnb")).toBe("/bnb");
  expect(siteHref("imoveis")).toBe("https://imoveis.fielnegocios.com.br/");
});

test("serviços são os sites com cartão na home, na ordem do registro", () => {
  expect(services).toEqual(["imoveis", "bnb", "avaliacao"]);
});
