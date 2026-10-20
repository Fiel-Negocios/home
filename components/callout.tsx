import type { ReactNode } from "react";
import { Block } from "./block";
import { Eyebrow } from "./eyebrow";

export function Callout({
  eyebrow,
  text,
  className = "",
  oneLine = false,
  children,
}: {
  eyebrow?: ReactNode;
  text: ReactNode;
  className?: string;
  /** No desktop, reduz a fonte para o texto caber numa linha só. */
  oneLine?: boolean;
  children?: ReactNode;
}) {
  return (
    <Block>
      <div
        className={`rounded-(--radius) bg-navy p-7 text-white sm:p-10 ${className}`}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <p
          className={`text-[clamp(1.25rem,3vw,1.75rem)] leading-tight font-extrabold ${oneLine ? "lg:text-[min(2vw,1.5rem)] lg:whitespace-nowrap" : ""}`}
        >
          {text}
        </p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </Block>
  );
}
