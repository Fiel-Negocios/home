import Image from "next/image";
import { Main } from "@/components/block";
import { PageHero } from "@/components/page-hero";
import { ServiceCards } from "@/components/service-cards";
import { SiteHeader } from "@/components/site-header";
import { yearsActive } from "@/lib/company";
import { pageMetadata } from "@/lib/sites";
import fielSimbolo from "@/public/svg/fiel_simbolo.svg";

export const metadata = pageMetadata("home");

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Main>
        <PageHero
          compact
          visual={
            <Image
              className="h-auto w-[clamp(3.5rem,7vw,5rem)]"
              src={fielSimbolo}
              alt=""
            />
          }
          title="Sua parceria confiável no mercado de imóveis."
          text={`Há mais de ${yearsActive()} anos atuando com imóveis comerciais e corporativos.`}
        />
        <ServiceCards />
      </Main>
    </>
  );
}
