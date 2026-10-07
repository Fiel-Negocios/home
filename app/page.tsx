import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { BRAND, yearsActive } from "@/lib/company";
import { services, sites, siteUrl } from "@/lib/sites";
import avaliacaoImoveis from "@/public/img/avaliacao_imoveis.webp";
import consultoriaBnb from "@/public/img/consultoria_bnb.webp";
import vendaImoveis from "@/public/img/venda_imoveis.webp";

export const metadata: Metadata = {
  // o template do layout não vale para a página do mesmo segmento
  title: { absolute: `Home | ${BRAND}` },
  alternates: { canonical: siteUrl("home") },
};

const images = {
  imoveis: vendaImoveis,
  bnb: consultoriaBnb,
  avaliacao: avaliacaoImoveis,
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="wrap flex items-center gap-5 pt-4 pb-8">
          <img
            className="hidden w-[clamp(3.5rem,7vw,5rem)] shrink-0 sm:block"
            src="/svg/fiel_simbolo.svg"
            alt=""
          />
          <div>
            <h1 className="text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance">
              Sua parceria confiável no mercado de imóveis.
            </h1>
            <p className="mt-[0.4rem] text-base text-muted">
              Há mais de {yearsActive()} anos atuando com imóveis comerciais e
              corporativos.
            </p>
          </div>
        </section>

        <section
          className="wrap pb-10 sm:pb-16"
          aria-labelledby="services_title"
        >
          <h2
            id="services_title"
            className="mb-4 text-base font-semibold text-gold"
          >
            Nossos principais serviços
          </h2>
          <ul>
            {services.map((site) => (
              <li key={site} className="border-t border-line last:border-b">
                <a
                  href={siteUrl(site)}
                  className="group flex items-center justify-between gap-4 py-4 sm:gap-8 sm:py-5"
                >
                  <span className="flex flex-col gap-2">
                    <strong className="text-[clamp(1.4rem,3.5vw,2.25rem)] leading-[1.1] font-extrabold tracking-[-0.015em] underline decoration-transparent decoration-3 underline-offset-[0.2em] transition-[text-decoration-color] duration-250 group-hover:decoration-gold">
                      {sites[site].title}
                    </strong>
                    <span className="text-[0.95rem] text-muted sm:text-[1.1rem]">
                      {sites[site].blurb}
                    </span>
                    <em className="font-semibold text-gold not-italic">
                      {sites[site].cta}
                    </em>
                  </span>
                  <Image
                    className="aspect-square w-22 shrink-0 rounded-(--radius) object-cover sm:w-32"
                    src={images[site]}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
