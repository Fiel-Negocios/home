import { House, MapPinOff } from "lucide-react";
import type { Metadata } from "next";
import { buttonClass } from "@/components/button";
import { Main } from "@/components/page-blocks";
import { PageHero } from "@/components/page-hero";
import { ServiceCards } from "@/components/service-cards";
import { SiteHeader } from "@/components/site-header";
import { SiteLink } from "@/components/site-link";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <Main>
        <PageHero
          compact
          centerOnMobile
          visual={
            <MapPinOff
              className="size-14 text-gold sm:size-20"
              strokeWidth={1.5}
              aria-hidden
            />
          }
          eyebrow="404"
          title="Página não encontrada."
          text="O endereço que você acessou não existe ou foi movido. Veja nossos serviços abaixo."
        >
          <SiteLink site="home" className={buttonClass}>
            <House className="size-5" aria-hidden />
            Voltar para o início
          </SiteLink>
        </PageHero>
        <ServiceCards />
      </Main>
    </>
  );
}
