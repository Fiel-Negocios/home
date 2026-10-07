import { expect, test } from "bun:test";
import { servedSites, sites, siteUrl } from "@/lib/sites";
import { GET as llms } from "./llms.txt/route";
import robots from "./robots";
import sitemap from "./sitemap";

test("sitemap lista só os sites servidos por este projeto", () => {
  expect(sitemap().map((entry) => entry.url)).toEqual(servedSites.map(siteUrl));
  expect(sitemap().map((entry) => entry.url)).not.toContain(siteUrl("imoveis"));
});

test("robots aponta para o sitemap do www", () => {
  expect(robots().sitemap).toBe("https://www.fielnegocios.com.br/sitemap.xml");
});

test("llms.txt descreve todos os sites, inclusive os externos", async () => {
  const text = await llms().text();
  for (const site of Object.values(sites)) {
    expect(text).toContain(site.description);
  }
  expect(text).toContain(siteUrl("imoveis"));
});
