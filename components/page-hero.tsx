import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";
import { Actions, Block } from "./page-blocks";

// tamanho do título e do texto: o da página de serviço, ou menor quando o hero
// só apresenta o que vem abaixo (home, 404)
const sizes = {
  page: {
    gap: "gap-10",
    title: "text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1]",
    text: "mt-4 text-[1.1rem] leading-relaxed",
  },
  compact: {
    gap: "gap-5",
    title: "text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.15]",
    text: "mt-[0.4rem] text-base",
  },
};

// no celular o visual some, ou fica em cima com tudo centralizado
const mobile = {
  hideVisual: { row: "items-center", visual: "hidden sm:block" },
  centered: {
    row: "flex-col items-center text-center sm:flex-row sm:items-start sm:text-left",
    visual: "",
  },
};

/**
 * Abertura de toda página: visual ao lado do título, texto e, se houver, a
 * ação centralizada no hero inteiro. O título é o nome da página.
 */
export function PageHero({
  visual,
  eyebrow,
  title,
  text,
  compact = false,
  centerOnMobile = false,
  children,
}: {
  visual: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  text: ReactNode;
  /** Título menor, para páginas em que o hero só apresenta o que vem abaixo. */
  compact?: boolean;
  /** No celular, mostra o visual em cima e centraliza tudo. */
  centerOnMobile?: boolean;
  /** A ação, centralizada na largura do hero. */
  children?: ReactNode;
}) {
  const size = sizes[compact ? "compact" : "page"];
  const layout = mobile[centerOnMobile ? "centered" : "hideVisual"];
  return (
    <Block opening aria-labelledby="page_title">
      <div className={`flex ${size.gap} ${layout.row}`}>
        <div className={`shrink-0 ${layout.visual}`}>{visual}</div>
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1
            id="page_title"
            className={`font-extrabold tracking-[-0.02em] ${size.title}`}
          >
            {title}
          </h1>
          <p className={`text-muted ${size.text}`}>{text}</p>
        </div>
      </div>
      {children && (
        <div className="mt-7">
          <Actions>{children}</Actions>
        </div>
      )}
    </Block>
  );
}
