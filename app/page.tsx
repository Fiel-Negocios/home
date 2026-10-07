import { ServiceCards } from "@/components/service-cards";
import { SiteHeader } from "@/components/site-header";
import { yearsActive } from "@/lib/company";
import { pageMetadata } from "@/lib/sites";

export const metadata = pageMetadata("home");

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
        <ServiceCards />
      </main>
    </>
  );
}
