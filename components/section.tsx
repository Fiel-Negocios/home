import type { ComponentProps, ReactNode } from "react";
import { Eyebrow } from "./eyebrow";
import { Intro } from "./intro";
import { Block } from "./page-blocks";

/** Seções que o menu das páginas de serviço pode listar, com seus rótulos. */
export const anchors = {
  o_que_e: "O que é?",
  beneficios: "Benefícios",
  duvidas: "Dúvidas",
} as const;

export type Anchor = keyof typeof anchors;

export type SectionProps = Omit<ComponentProps<"section">, "id" | "title"> & {
  /** Liga a seção ao menu do cabeçalho; o rótulo vira o eyebrow. */
  anchor?: Anchor;
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
};

export function Section({
  anchor,
  id = anchor,
  eyebrow = anchor && anchors[anchor],
  title,
  intro,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <Block id={id} className={className} {...props}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="text-[clamp(1.4rem,3.5vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.015em]">
          {title}
        </h2>
      )}
      {intro && <Intro className="mt-3">{intro}</Intro>}
      {/* a seção espaça o que vem dentro; os filhos não trazem margem */}
      {children && <div className="mt-8 flex flex-col gap-8">{children}</div>}
    </Block>
  );
}
