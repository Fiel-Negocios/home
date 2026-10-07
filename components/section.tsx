import type { ComponentProps, ReactNode } from "react";
import { type Anchor, anchors } from "./anchors";
import { Eyebrow } from "./eyebrow";
import { Intro } from "./intro";
import { SectionTitle } from "./section-title";

type SectionProps = Omit<ComponentProps<"section">, "id" | "title"> & {
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
      {title && <SectionTitle>{title}</SectionTitle>}
      {intro && <Intro>{intro}</Intro>}
      {children}
    </section>
  );
}
