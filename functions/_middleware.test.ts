import { expect, mock, test } from "bun:test";
import { onRequest } from "./_middleware";

function run(href: string) {
  const next = mock(() => new Response("next"));
  return { response: onRequest({ request: new Request(href), next }), next };
}

test("domínio raiz redireciona para o www mantendo o caminho", async () => {
  const response = await run("https://fielnegocios.com.br/bnb?x=1").response;
  expect(response.status).toBe(301);
  expect(response.headers.get("location")).toBe(
    "https://www.fielnegocios.com.br/bnb?x=1",
  );
});

test("www e outros hosts seguem normalmente", async () => {
  for (const href of [
    "https://www.fielnegocios.com.br/bnb",
    "https://outrodominio.com.br/",
    "https://imoveis.fielnegocios.com.br/",
  ]) {
    expect(await (await run(href).response).text()).toBe("next");
  }
});
