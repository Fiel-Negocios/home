import { BRAND, EMAIL, HOURS, PHONE, yearsActive } from "@/lib/company";
import { type Site, services, sites, siteUrl } from "@/lib/sites";

export const dynamic = "force-static";

function entry(site: Site) {
  return `- [${sites[site].title}](${siteUrl(site)}): ${sites[site].description}`;
}

export function GET() {
  return new Response(
    `# ${BRAND}

> Empresa com mais de ${yearsActive()} anos de atuação no mercado de imóveis comerciais e corporativos no Nordeste. Oferece venda de imóveis, consultoria para financiamento no Banco do Nordeste (BNB) e laudos técnicos de avaliação de imóveis conforme a ABNT NBR 14.653.

Atendimento ${HOURS} pelo WhatsApp (${PHONE}) ou pelo email ${EMAIL}.

## Serviços

${services.map(entry).join("\n")}

## Optional

${entry("home")}
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
