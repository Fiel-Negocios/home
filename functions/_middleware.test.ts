import { expect, mock, test } from "bun:test";
import { onRequest } from "./_middleware";

function run(href: string) {
  const request = new Request(href);
  const next = mock(() => new Response("next"));
  const assets = mock(
    (req: Request) => new Response(new URL(req.url).pathname),
  );
  const response = onRequest({
    request,
    next,
    env: { ASSETS: { fetch: assets } },
  });
  return { response, next, assets };
}

test("domínio raiz redireciona para o www mantendo o caminho", async () => {
  const response = await run("https://fielnegocios.com.br/bnb?x=1").response;
  expect(response.status).toBe(301);
  expect(response.headers.get("location")).toBe(
    "https://www.fielnegocios.com.br/bnb?x=1",
  );
});

test("raiz de um subdomínio de serviço serve a sua página", async () => {
  const { response, assets, next } = run("https://bnb.fielnegocios.com.br/");
  expect(await (await response).text()).toBe("/bnb");
  expect(assets).toHaveBeenCalledTimes(1);
  expect(next).not.toHaveBeenCalled();
});

test("arquivos dentro de um subdomínio de serviço não são reescritos", async () => {
  const { response, assets } = run(
    "https://bnb.fielnegocios.com.br/img/consultoria_bnb.webp",
  );
  expect(await (await response).text()).toBe("next");
  expect(assets).not.toHaveBeenCalled();
});

test("www e hosts desconhecidos seguem normalmente", async () => {
  for (const href of [
    "https://www.fielnegocios.com.br/",
    "https://preview.pages.dev/",
  ]) {
    expect(await (await run(href).response).text()).toBe("next");
  }
});
