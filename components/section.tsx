import type { ComponentProps, ReactNode } from "react";
import { Eyebrow } from "./eyebrow";
import { Intro } from "./intro";

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
    <section
      id={id}
      className={`wrap border-t border-line py-10 sm:py-16 ${className}`}
      {...props}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="max-w-160 text-[clamp(1.4rem,3.5vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.015em] text-balance">
          {title}
        </h2>
      )}
      {intro && <Intro>{intro}</Intro>}
      {children}
    </section>
  );
}
