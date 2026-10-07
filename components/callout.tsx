import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";

export function Callout({
  eyebrow,
  text,
  className = "",
  children,
}: {
  eyebrow?: ReactNode;
  text: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className="wrap">
      <div
        className={`my-10 rounded-(--radius) bg-navy p-7 text-white sm:my-16 sm:p-10 ${className}`}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <p className="text-[clamp(1.25rem,3vw,1.75rem)] leading-tight font-extrabold text-balance">
          {text}
        </p>
        {children}
      </div>
    </div>
  );
}
