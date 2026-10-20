import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { type SpecialistId, specialists } from "@/lib/company";
import { Team } from "./team";

function items(html: string) {
  return [...html.matchAll(/<li[^>]*>.*?<\/li>/g)].map((m) => m[0]);
}

test("cada especialista aparece com a foto e o nome, na ordem pedida", () => {
  const ids: SpecialistId[] = ["daniel", "sandy", "alexandre"];
  const lis = items(renderToStaticMarkup(<Team members={ids} />));
  expect(lis.length).toBe(ids.length);
  lis.forEach((li, i) => {
    const { name } = specialists[ids[i]];
    expect(li).toMatch(new RegExp(`<img [^>]*alt="${name}"`));
    expect(li).toContain(name);
  });
});

test("mobileFirst põe só aquele especialista na frente no celular", () => {
  const html = renderToStaticMarkup(
    <Team members={["david", "alexandre", "daniel"]} mobileFirst="alexandre" />,
  );
  const first = items(html).filter((li) => li.includes("max-sm:order-first"));
  expect(first.length).toBe(1);
  expect(first[0]).toContain(specialists.alexandre.name);
});

test("sem mobileFirst, ninguém muda de ordem", () => {
  const html = renderToStaticMarkup(<Team members={["david", "daniel"]} />);
  expect(html).not.toContain("order-first");
});
