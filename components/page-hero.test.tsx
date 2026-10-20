import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import Avaliacao from "@/app/avaliacao/page";
import Bnb from "@/app/bnb/page";
import NotFound from "@/app/not-found";
import Home from "@/app/page";

const pages = { Home, Bnb, Avaliacao, NotFound };

for (const [name, Page] of Object.entries(pages)) {
  test(`${name} abre com o hero, que dá nome à página`, () => {
    const html = renderToStaticMarkup(<Page />);
    expect(html.match(/<h1[ >]/g)?.length).toBe(1);
    expect(html).toMatch(
      /<section [^>]*aria-labelledby="page_title"[^>]*>.*<h1 [^>]*id="page_title"/,
    );
  });
}
