import { ROOT_DOMAIN, siteForHost, sites, siteUrl } from "../lib/sites";

type Context = {
  request: Request;
  next: () => Response | Promise<Response>;
  env: {
    ASSETS: { fetch: (request: Request) => Response | Promise<Response> };
  };
};

/**
 * Roteamento por host: o domínio raiz vai para o www e a raiz de cada
 * subdomínio de serviço abre a sua página, sem mudar o endereço. Arquivos
 * dentro do subdomínio e hosts de fora do domínio seguem normalmente.
 */
export async function onRequest({ request, next, env }: Context) {
  const url = new URL(request.url);

  if (url.hostname === ROOT_DOMAIN) {
    url.hostname = new URL(siteUrl("home")).hostname;
    return Response.redirect(url, 301);
  }

  const site = siteForHost(url.hostname);
  const route = site && sites[site].route;
  // a home já é a raiz: não precisa de reescrita
  if (route && route !== "/" && url.pathname === "/") {
    url.pathname = route;
    return env.ASSETS.fetch(new Request(url, request));
  }

  return next();
}
