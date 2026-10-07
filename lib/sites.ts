import type { Metadata } from "next";
import { BRAND } from "./company";

export const ROOT_DOMAIN = "fielnegocios.com.br";

type SiteInfo = {
  subdomain: string;
  /** Página deste projeto; `null` quando o site é servido por outro sistema. */
  route: string | null;
  title: string;
  /** Texto do llms.txt. */
  description: string;
  /** Texto e chamada do cartão na home; só os serviços têm. */
  blurb?: string;
  cta?: string;
};

type ServiceInfo = SiteInfo & { blurb: string; cta: string };

export const sites = {
  home: {
    subdomain: "www",
    route: "/",
    title: "Página inicial",
    description: "Visão geral da empresa e contato.",
  },
  imoveis: {
    subdomain: "imoveis",
    route: null,
    title: "Venda de Imóveis",
    description: "Imóveis comerciais e corporativos à venda.",
    blurb: "Imóveis comerciais e corporativos à venda.",
    cta: "Ver imóveis",
  },
  bnb: {
    subdomain: "bnb",
    route: "/bnb",
    title: "Consultoria BNB",
    description:
      "Consultoria para obter crédito no Banco do Nordeste: análise de viabilidade, preparação da documentação, plano de negócios e plano SEAP, e acompanhamento até a liberação do crédito.",
    blurb: "Orientação para solicitar crédito no Banco do Nordeste.",
    cta: "Falar sobre crédito BNB",
  },
  avaliacao: {
    subdomain: "avaliacao",
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

/** Os serviços da empresa, na ordem dos cartões da home. */
export const services = [
  "imoveis",
  "bnb",
  "avaliacao",
] as const satisfies readonly Service[];

export const siteKeys = Object.keys(sites) as Site[];

/** Sites com página neste projeto. */
export const servedSites = siteKeys.filter((site) => sites[site].route);

export function siteUrl(site: Site) {
  return `https://${sites[site].subdomain}.${ROOT_DOMAIN}/`;
}

/** Site servido pelo host; `undefined` para hosts de fora do domínio. */
export function siteForHost(hostname: string): Site | undefined {
  return servedSites.find(
    (site) => new URL(siteUrl(site)).hostname === hostname,
  );
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
