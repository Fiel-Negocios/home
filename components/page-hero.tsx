import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";

export function PageHero({
  image,
  eyebrow,
  title,
  text,
  children,
}: {
  image: ReactNode;
  eyebrow: ReactNode;
  title: ReactNode;
  text: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="wrap pt-4 pb-10 sm:pb-16">
      <div className="flex items-center gap-10">
        <div className="hidden shrink-0 sm:block">{image}</div>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-4 text-[1.1rem] leading-relaxed text-muted">
            {text}
          </p>
        </div>
      </div>
      {/* a ação fica no centro do hero inteiro, não só da coluna do texto */}
      {children && <div className="mt-7 text-center">{children}</div>}
    </section>
  );
}
