import type { ReactNode } from "react";
import { Actions, Block } from "./block";
import { Eyebrow } from "./eyebrow";

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
  return (
    <Block opening aria-labelledby="page_title">
      <div
        className={`flex items-center ${compact ? "gap-5" : "gap-10"} ${centerOnMobile ? "flex-col text-center sm:flex-row sm:text-left" : ""}`}
      >
        <div
          className={centerOnMobile ? "shrink-0" : "hidden shrink-0 sm:block"}
        >
          {visual}
        </div>
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1
            id="page_title"
            className={`font-extrabold tracking-[-0.02em] ${compact ? "text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.15]" : "text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1]"}`}
          >
            {title}
          </h1>
          <p
            className={`text-muted ${compact ? "mt-[0.4rem] text-base" : "mt-4 text-[1.1rem] leading-relaxed"}`}
          >
            {text}
          </p>
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
