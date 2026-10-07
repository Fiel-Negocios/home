import { HOME_HOST, ROOT_DOMAIN } from "../lib/sites";

type Context = {
  request: Request;
  next: () => Response | Promise<Response>;
};

/** O domínio raiz vai para o www mantendo o caminho; o resto segue normalmente. */
export async function onRequest({ request, next }: Context) {
  const url = new URL(request.url);

  if (url.hostname === ROOT_DOMAIN) {
    url.hostname = HOME_HOST;
    return Response.redirect(url, 301);
  }

  return next();
}
