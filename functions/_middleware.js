import { resolveHost } from "../lib/sites";

// cada subdomínio abre a sua página, sem mudar o endereço
export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);
  const target = resolveHost(url.hostname);

  if (target && "redirect" in target) {
    url.hostname = target.redirect;
    return Response.redirect(url, 301);
  }

  if (target && url.pathname === "/") {
    url.pathname = target.route;
    return env.ASSETS.fetch(new Request(url, request));
  }

  return next();
}
