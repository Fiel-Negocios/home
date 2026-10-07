import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Callout } from "./callout";
import { Section } from "./section";
import { ServicePage, servicePage } from "./service-page";

function navTargets(html: string) {
  const nav = html.match(/<nav[^>]*>(.*?)<\/nav>/)?.[1] ?? "";
  return [...nav.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
}

function page(children: React.ReactNode) {
  return renderToStaticMarkup(
    <ServicePage service="bnb" image={null} title="T" text="t">
      {children}
    </ServicePage>,
  );
}

test("o menu lista as seções ancoradas da página, na ordem em que aparecem", () => {
  const html = page(
    <>
      <Section anchor="duvidas" title="Dúvidas" />
      <Section title="Sem âncora" />
      <Callout text="Fora de uma seção" />
      <Section anchor="o_que_e" title="O que é" />
    </>,
  );
  expect(navTargets(html)).toEqual(["duvidas", "o_que_e"]);
  for (const id of navTargets(html)) expect(html).toContain(`id="${id}"`);
});

test("sem seções ancoradas, não há menu", () => {
  expect(page(<Section title="Só isso" />)).not.toContain("<nav");
});

test("servicePage liga o serviço aos metadados e ao botão de contato", () => {
  const { metadata, ContactButton } = servicePage("avaliacao");
  expect(metadata.title).toBe("Avaliação de Imóveis");
  const html = renderToStaticMarkup(<ContactButton>x</ContactButton>);
  expect(decodeURIComponent(html)).toContain("Avaliação de Imóveis");
});
