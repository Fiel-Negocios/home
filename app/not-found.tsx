import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCards } from "@/components/service-cards";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="wrap pt-4 pb-8">
          <p className="text-sm font-bold tracking-[0.2em] text-muted">404</p>
          <h1 className="mt-1 text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance">
            Página não encontrada.
          </h1>
          <p className="mt-[0.4rem] text-base text-muted">
            O endereço que você acessou não existe ou foi movido. Veja nossos
            serviços abaixo ou{" "}
            <Link href="/" className="font-semibold underline">
              volte para o início
            </Link>
            .
          </p>
        </section>
        <ServiceCards />
      </main>
    </>
  );
}
