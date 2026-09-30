// cada subdomínio abre a sua página, sem mudar o endereço
const pages = { bnb: "/bnb", avaliacao: "/avaliacao" };

export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);

  // domínio raiz vai para o www
  if (url.hostname === "fielnegocios.com.br") {
    url.hostname = "www.fielnegocios.com.br";
    return Response.redirect(url, 301);
  }

  const page = pages[url.hostname.split(".")[0]];

  if (url.pathname === "/" && page) {
    url.pathname = page;
    return env.ASSETS.fetch(new Request(url, request));
  }

  return next();
}
