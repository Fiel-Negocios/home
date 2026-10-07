import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-160 text-[clamp(1.4rem,3.5vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.015em] text-balance">
      {children}
    </h2>
  );
}
