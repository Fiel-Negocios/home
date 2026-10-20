import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import Avaliacao from "@/app/avaliacao/page";
import Bnb from "@/app/bnb/page";
import NotFound from "@/app/not-found";
import Home from "@/app/page";
import { Footer } from "./footer";

const pages = { Home, Bnb, Avaliacao, NotFound, Footer };

function externalLinks(html: string) {
  return [...html.matchAll(/<a [^>]*target="_blank"[^>]*>.*?<\/a>/g)].map(
    (m) => m[0],
  );
}

// A seta entra à mão em cada link externo; este teste pega o que for esquecido.
// O botão flutuante é só um ícone e fica de fora.
for (const [name, Page] of Object.entries(pages)) {
  test(`${name}: todo link que abre fora do site tem a seta`, () => {
    const links = externalLinks(renderToStaticMarkup(<Page />)).filter(
      (a) => !a.includes("aria-label="),
    );
    expect(links.length).toBeGreaterThan(0);
    for (const a of links) expect(a).toContain("lucide-arrow-up-right");
  });
}
