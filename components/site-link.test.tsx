import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { SiteLink } from "./site-link";

const ARROW = "lucide-arrow-up-right";

test("link para um site externo leva ao endereço dele, com a seta, na mesma aba", () => {
  const html = renderToStaticMarkup(
    <SiteLink site="imoveis">Ver imóveis</SiteLink>,
  );
  expect(html).toContain('href="https://imoveis.fielnegocios.com.br/"');
  expect(html).toContain(ARROW);
  expect(html).not.toContain("target=");
});

test("link para um site deste projeto leva ao caminho, sem seta", () => {
  const html = renderToStaticMarkup(<SiteLink site="bnb">BNB</SiteLink>);
  expect(html).toContain('href="/bnb"');
  expect(html).not.toContain(ARROW);
});

test("quem chama escolhe onde a seta fica", () => {
  const html = renderToStaticMarkup(
    <SiteLink site="imoveis">
      {(mark) => (
        <>
          <em>Ver imóveis{mark}</em>
          <img alt="" />
        </>
      )}
    </SiteLink>,
  );
  expect(html).toMatch(new RegExp(`<em>Ver imóveis<svg[^>]*${ARROW}`));
});
