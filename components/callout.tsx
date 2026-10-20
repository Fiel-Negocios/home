import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";

export function Callout({
  eyebrow,
  text,
  className = "",
  textClassName = "",
  children,
}: {
  eyebrow?: ReactNode;
  text: ReactNode;
  className?: string;
  /** Ajustes no texto, como mudar o tamanho para caber numa linha. */
  textClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div className="wrap py-10 sm:py-16">
      <div
        className={`rounded-(--radius) bg-navy p-7 text-white sm:p-10 ${className}`}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <p
          className={`text-[clamp(1.25rem,3vw,1.75rem)] leading-tight font-extrabold ${textClassName}`}
        >
          {text}
        </p>
        {children}
      </div>
    </div>
  );
}
