import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import Avaliacao from "./avaliacao/page";
import Bnb from "./bnb/page";

test.each([
  ["bnb", Bnb],
  ["avaliacao", Avaliacao],
])("todo link do menu de %s leva a uma seção da página", (_, Page) => {
  const html = renderToStaticMarkup(<Page />);
  const nav = html.match(/<nav[^>]*>(.*?)<\/nav>/)?.[1] ?? "";
  const targets = [...nav.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
  expect(targets.length).toBeGreaterThan(0);
  for (const id of targets) expect(html).toContain(`id="${id}"`);
});
