import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { servedSites, services } from "@/lib/sites";
import { Team } from "./team";

function items(html: string) {
  return [...html.matchAll(/<li[^>]*>.*?<\/li>/g)].map((m) => m[0]);
}

test("a equipe de um serviço traz os especialistas dele, cada um com foto e nome", () => {
  const lis = items(renderToStaticMarkup(<Team service="bnb" />));
  const names = ["David Meneses", "Alexandre Chastinet", "Daniel Gomes"];
  expect(lis.length).toBe(names.length);
  lis.forEach((li, i) => {
    expect(li).toMatch(new RegExp(`<img [^>]*alt="${names[i]}"`));
    expect(li).toContain(names[i]);
  });
});

test("todo serviço com página neste projeto tem equipe", () => {
  for (const service of services.filter((s) => servedSites.includes(s))) {
    expect(
      items(renderToStaticMarkup(<Team service={service} />)).length,
    ).toBeGreaterThan(0);
  }
});

test("firstOnMobile põe só aquele especialista na frente no celular", () => {
  const first = items(
    renderToStaticMarkup(<Team service="bnb" firstOnMobile="alexandre" />),
  ).filter((li) => li.includes("max-sm:order-first"));
  expect(first.length).toBe(1);
  expect(first[0]).toContain("Alexandre Chastinet");
});

test("sem firstOnMobile, ninguém muda de ordem", () => {
  expect(renderToStaticMarkup(<Team service="avaliacao" />)).not.toContain(
    "order-first",
  );
});
