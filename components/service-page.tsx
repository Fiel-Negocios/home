import type { ReactNode } from "react";
import { type Site, sites, siteUrl } from "@/lib/sites";
import { anchors } from "./anchors";
import { PageHero } from "./page-hero";
import { SiteHeader } from "./site-header";
import { WhatsAppButton } from "./whatsapp-button";

/**
 * Esqueleto das páginas de serviço: cabeçalho com o menu das seções, hero e
 * conteúdo. O menu lista todas as `anchors`, então a página precisa de uma
 * `Section` para cada uma (o teste das páginas confere).
 */
export function ServicePage({
  site,
  image,
  title,
  text,
  action,
  children,
}: {
  site: Site;
  image: ReactNode;
  title: ReactNode;
  text: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader logoHref={siteUrl("home")}>
        <nav
          aria-label="Seções da página"
          className="hidden gap-6 text-[0.9rem] font-semibold md:flex [&_a:hover]:text-gold"
        >
          {Object.entries(anchors).map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <WhatsAppButton className="hidden sm:inline-block">
          Fale conosco
        </WhatsAppButton>
      </SiteHeader>
      <main className="flex-1">
        <PageHero
          image={image}
          eyebrow={sites[site].title}
          title={title}
          text={text}
        >
          {action}
        </PageHero>
        {children}
      </main>
    </>
  );
}
