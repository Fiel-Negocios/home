import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolveHost, sites } from "./sites";

describe("resolveHost", () => {
  test("domínio raiz redireciona para o www", () => {
    expect(resolveHost("fielnegocios.com.br")).toEqual({
      redirect: "www.fielnegocios.com.br",
    });
  });

  test("subdomínio de serviço abre a sua página", () => {
    expect(resolveHost("bnb.fielnegocios.com.br")).toEqual({ route: "/bnb" });
    expect(resolveHost("avaliacao.fielnegocios.com.br")).toEqual({
      route: "/avaliacao",
    });
  });

  test("www e hosts desconhecidos seguem normalmente", () => {
    expect(resolveHost("www.fielnegocios.com.br")).toBeNull();
    expect(resolveHost("preview.pages.dev")).toBeNull();
  });
});

test("toda rota de site tem uma página no app", () => {
  expect(existsSync("app/page.tsx")).toBe(true);
  for (const { route } of Object.values(sites)) {
    if (route) expect(existsSync(`app${route}/page.tsx`)).toBe(true);
  }
});
