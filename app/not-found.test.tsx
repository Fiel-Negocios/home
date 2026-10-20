import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { siteHref } from "@/lib/sites";
import NotFound from "./not-found";

test("a página 404 leva de volta ao início", () => {
  const html = renderToStaticMarkup(<NotFound />);
  expect(html).toContain("Página não encontrada");
  expect(html).toMatch(
    new RegExp(
      `<a [^>]*href="${siteHref("home")}"[^>]*>.*?Voltar para o início`,
    ),
  );
});
