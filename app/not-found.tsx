import { House, MapPinOff } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Main } from "@/components/main";
import { ServiceCards } from "@/components/service-cards";
import { SiteHeader } from "@/components/site-header";
import { siteHref } from "@/lib/sites";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <Main>
        <section className="wrap pt-4 pb-10 sm:pb-16">
          {/* no celular tudo centralizado e empilhado; a partir do sm, ícone ao lado */}
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
            <MapPinOff
              className="size-14 shrink-0 text-gold sm:size-20"
              strokeWidth={1.5}
              aria-hidden
            />
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-muted">
                404
              </p>
              <h1 className="mt-1 text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
                Página não encontrada.
              </h1>
              <p className="mt-[0.4rem] text-base text-muted">
                O endereço que você acessou não existe ou foi movido. Veja
                nossos serviços abaixo.
              </p>
            </div>
          </div>
          {/* o botão fica no centro do bloco inteiro, não só da coluna do texto */}
          <div className="mt-6 text-center">
            <Button href={siteHref("home")}>
              <House className="size-5" aria-hidden />
              Voltar para o início
            </Button>
          </div>
        </section>
        <ServiceCards />
      </Main>
    </>
  );
}
