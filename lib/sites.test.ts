import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolveHost, servedSites, services, sites } from "./sites";

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

test("todo site deste projeto tem uma página no app", () => {
  for (const site of servedSites) {
    expect(existsSync(`app${sites[site].route}/page.tsx`)).toBe(true);
  }
});

test("todo serviço tem os textos do cartão da home", () => {
  for (const site of services) {
    expect(sites[site].blurb).toBeTruthy();
    expect(sites[site].cta).toBeTruthy();
  }
});
