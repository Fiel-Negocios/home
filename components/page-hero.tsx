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
    <section className="wrap flex items-center gap-10 pt-4 pb-10 sm:pb-16">
      <div className="hidden shrink-0 sm:block">{image}</div>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance">
          {title}
        </h1>
        <p className="mt-4 mb-7 text-[1.1rem] leading-relaxed text-muted">
          {text}
        </p>
        {children}
      </div>
    </section>
  );
}
