import Image, { type StaticImageData } from "next/image";
import { type Service, services, sites, siteUrl } from "@/lib/sites";
import avaliacaoImoveis from "@/public/img/avaliacao_imoveis.webp";
import consultoriaBnb from "@/public/img/consultoria_bnb.webp";
import vendaImoveis from "@/public/img/venda_imoveis.webp";

/** Cartões da home: um por serviço, com a imagem de cada um. */
const images: Record<Service, StaticImageData> = {
  imoveis: vendaImoveis,
  bnb: consultoriaBnb,
  avaliacao: avaliacaoImoveis,
};

export function ServiceCards() {
  return (
    <section className="wrap pb-10 sm:pb-16" aria-labelledby="services_title">
      <h2
        id="services_title"
        className="mb-4 text-base font-semibold text-gold"
      >
        Nossos principais serviços
      </h2>
      <ul>
        {services.map((service) => (
          <li key={service} className="border-t border-line last:border-b">
            <a
              href={siteUrl(service)}
              className="group flex items-center justify-between gap-4 py-4 sm:gap-8 sm:py-5"
            >
              <span className="flex flex-col gap-2">
                <strong className="text-[clamp(1.4rem,3.5vw,2.25rem)] leading-[1.1] font-extrabold tracking-[-0.015em] underline decoration-transparent decoration-3 underline-offset-[0.2em] transition-[text-decoration-color] duration-250 group-hover:decoration-gold">
                  {sites[service].title}
                </strong>
                <span className="text-[0.95rem] text-muted sm:text-[1.1rem]">
                  {sites[service].blurb}
                </span>
                <em className="font-semibold text-gold not-italic">
                  {sites[service].cta}
                </em>
              </span>
              <Image
                className="aspect-square w-22 shrink-0 rounded-(--radius) object-cover sm:w-32"
                src={images[service]}
                alt=""
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
