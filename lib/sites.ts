export const ROOT_DOMAIN = "fielnegocios.com.br";

export const sites = {
  // a home é a raiz do site: não precisa de reescrita
  home: { subdomain: "www", route: null },
  bnb: { subdomain: "bnb", route: "/bnb" },
  avaliacao: { subdomain: "avaliacao", route: "/avaliacao" },
  // servido por outro sistema, fora deste projeto
  imoveis: { subdomain: "imoveis", route: null },
} as const;

export type Site = keyof typeof sites;

export function siteUrl(site: Site) {
  return `https://${sites[site].subdomain}.${ROOT_DOMAIN}/`;
}

export function resolveHost(
  hostname: string,
): { redirect: string } | { route: string } | null {
  if (hostname === ROOT_DOMAIN) return { redirect: `www.${ROOT_DOMAIN}` };
  const subdomain = hostname.split(".")[0];
  const site = Object.values(sites).find((s) => s.subdomain === subdomain);
  if (!site?.route) return null;
  return { route: site.route };
}
