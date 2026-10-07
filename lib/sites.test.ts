import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import {
  pageMetadata,
  servedSites,
  siteForHost,
  sites,
  siteUrl,
} from "./sites";

test("todo site deste projeto tem uma página no app", () => {
  for (const site of servedSites) {
    expect(existsSync(`app${sites[site].route}/page.tsx`)).toBe(true);
  }
});

test("a página de um serviço recebe o título do site e o canônico do subdomínio", () => {
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

test("o host leva ao site servido; hosts de fora não levam a nenhum", () => {
  expect(siteForHost("bnb.fielnegocios.com.br")).toBe("bnb");
  expect(siteForHost("www.fielnegocios.com.br")).toBe("home");
  expect(siteForHost("imoveis.fielnegocios.com.br")).toBeUndefined();
  expect(siteForHost("bnb.preview.pages.dev")).toBeUndefined();
});
