import type { Metadata } from "next";
import { Children, Fragment, isValidElement, type ReactNode } from "react";
import { pageMetadata, type Service, sites } from "@/lib/sites";
import { Actions, Main } from "./block";
import { PageHero } from "./page-hero";
import { type Anchor, anchors, Section, type SectionProps } from "./section";
import { SiteHeader } from "./site-header";
import { WhatsAppButton, type WhatsAppProps } from "./whatsapp";

/**
 * Esqueleto das páginas de serviço: cabeçalho com o menu das seções, hero e
 * conteúdo. O menu lista as `Section`s com `anchor` que a página trouxer, na
 * ordem em que aparecem.
 */
type ServicePageProps = {
  service: Service;
  image: ReactNode;
  title: ReactNode;
  text: ReactNode;
  action?: ReactNode;
  children: ReactNode;
};

/**
 * Tudo que uma página de serviço precisa saber do seu serviço, ligado uma vez:
 * metadados, o esqueleto e o botão de contato (centralizado) com a mensagem do
 * serviço.
 */
export function servicePage(service: Service): {
  metadata: Metadata;
  Page: (props: Omit<ServicePageProps, "service">) => ReactNode;
  ContactButton: (
    props: Omit<WhatsAppProps, "service" | "className">,
  ) => ReactNode;
} {
  return {
    metadata: pageMetadata(service),
    Page: (props) => <ServicePage service={service} {...props} />,
    ContactButton: (props) => (
      <Actions>
        <WhatsAppButton service={service} {...props} />
      </Actions>
    ),
  };
}

export function ServicePage({
  service,
  image,
  title,
  text,
  action,
  children,
}: ServicePageProps) {
  const menu = anchoredSections(children);
  return (
    <>
      <SiteHeader service={service}>
        {menu.length > 0 && (
          <nav
            aria-label="Seções da página"
            className="hidden gap-6 text-[0.9rem] font-semibold md:flex [&_a:hover]:text-gold"
          >
            {menu.map((id) => (
              <a key={id} href={`#${id}`}>
                {anchors[id]}
              </a>
            ))}
          </nav>
        )}
      </SiteHeader>
      <Main>
        <PageHero
          visual={image}
          eyebrow={sites[service].title}
          title={title}
          text={text}
        >
          {action}
        </PageHero>
        {children}
      </Main>
    </>
  );
}

function anchoredSections(children: ReactNode): Anchor[] {
  return Children.toArray(children).flatMap((child) => {
    if (!isValidElement<SectionProps>(child)) return [];
    if (child.type === Fragment) return anchoredSections(child.props.children);
    return child.type === Section && child.props.anchor
      ? [child.props.anchor]
      : [];
  });
}
