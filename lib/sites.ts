import type { Metadata } from "next";
import { BRAND } from "./company";

export const ROOT_DOMAIN = "fielnegocios.com.br";

type SiteInfo = {
  title: string;
  /** Texto do llms.txt. */
  description: string;
  /** Texto e chamada do cartão na home; só os serviços têm. */
  blurb?: string;
  cta?: string;
} & (
  | {
      /** Caminho da página deste projeto, no www. */
      route: string;
    }
  | {
      /** Endereço de um site externo, servido por outro sistema. */
      url: string;
    }
);

type ServiceInfo = SiteInfo & { blurb: string; cta: string };

export const sites = {
  home: {
    route: "/",
    title: "Página inicial",
    description: "Visão geral da empresa e contato.",
  },
  imoveis: {
    url: `https://imoveis.${ROOT_DOMAIN}/`,
    title: "Venda de Imóveis",
    description: "Imóveis comerciais e corporativos à venda.",
    blurb: "Imóveis comerciais e corporativos à venda.",
    cta: "Ver imóveis",
  },
  bnb: {
    route: "/bnb",
    title: "Consultoria BNB",
    description:
      "Consultoria para obter crédito no Banco do Nordeste: análise de viabilidade, preparação da documentação, plano de negócios e plano SEAP, e acompanhamento até a liberação do crédito.",
    blurb: "Orientação para solicitar crédito no Banco do Nordeste.",
    cta: "Falar sobre crédito BNB",
  },
  avaliacao: {
    route: "/avaliacao",
    title: "Avaliação de Imóveis",
    description:
      "Laudos técnicos de avaliação com validade jurídica e bancária (NBR 14.653, com ART) para processos judiciais, inventários, financiamentos, garantias e desapropriações. Avalia galpões, imóveis corporativos, residenciais, comerciais e terrenos.",
    blurb: "Saiba o valor de mercado do seu imóvel.",
    cta: "Pedir avaliação",
  },
} as const satisfies Record<string, SiteInfo>;

export type Site = keyof typeof sites;

/** Sites que são serviços: os que têm cartão na home. */
export type Service = {
  [K in Site]: (typeof sites)[K] extends ServiceInfo ? K : never;
}[Site];

export const siteKeys = Object.keys(sites) as Site[];

/** Os serviços da empresa, na ordem do registro: a ordem dos cartões da home. */
export const services = siteKeys.filter(
  (site): site is Service => "blurb" in sites[site],
);

/** Sites com página neste projeto. */
export const servedSites = siteKeys.filter((site) => "route" in sites[site]);

/** Host do www, onde ficam todas as páginas deste projeto. */
export const HOME_HOST = `www.${ROOT_DOMAIN}`;

/** Endereço absoluto do site: canônico, sitemap e llms.txt. */
export function siteUrl(site: Site) {
  return new URL(siteHref(site), `https://${HOME_HOST}`).href;
}

/** Link para o site: o caminho quando é deste projeto, para valer em prévias e no dev. */
export function siteHref(site: Site) {
  const info: SiteInfo = sites[site];
  return "route" in info ? info.route : info.url;
}

/** Título e endereço canônico da página de um site servido por este projeto. */
export function pageMetadata(site: Site): Metadata {
  return {
    // o template do layout não vale para a página do mesmo segmento
    title:
      site === "home" ? { absolute: `Home | ${BRAND}` } : sites[site].title,
    alternates: { canonical: siteUrl(site) },
  };
}
