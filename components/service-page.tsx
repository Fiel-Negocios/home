import { Children, Fragment, isValidElement, type ReactNode } from "react";
import { type Service, sites } from "@/lib/sites";
import { PageHero } from "./page-hero";
import { type Anchor, anchors, Section, type SectionProps } from "./section";
import { SiteHeader } from "./site-header";

/**
 * Esqueleto das páginas de serviço: cabeçalho com o menu das seções, hero e
 * conteúdo. O menu lista as `Section`s com `anchor` que a página trouxer, na
 * ordem em que aparecem.
 */
export function ServicePage({
  service,
  image,
  title,
  text,
  action,
  children,
}: {
  service: Service;
  image: ReactNode;
  title: ReactNode;
  text: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}) {
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
      <main className="flex-1">
        <PageHero
          image={image}
          eyebrow={sites[service].title}
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

function anchoredSections(children: ReactNode): Anchor[] {
  return Children.toArray(children).flatMap((child) => {
    if (!isValidElement<SectionProps>(child)) return [];
    if (child.type === Fragment) return anchoredSections(child.props.children);
    return child.type === Section && child.props.anchor
      ? [child.props.anchor]
      : [];
  });
}
