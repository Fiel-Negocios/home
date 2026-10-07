import { expect, test } from "bun:test";
import robots from "./robots";
import sitemap from "./sitemap";

test("sitemap lista os sites deste projeto, sem o de imóveis", () => {
  expect(sitemap().map((entry) => entry.url)).toEqual([
    "https://www.fielnegocios.com.br/",
    "https://bnb.fielnegocios.com.br/",
    "https://avaliacao.fielnegocios.com.br/",
  ]);
});

test("robots aponta para o sitemap do www", () => {
  expect(robots().sitemap).toBe("https://www.fielnegocios.com.br/sitemap.xml");
});
