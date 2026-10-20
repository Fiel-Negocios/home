import type { ReactNode } from "react";

/** Conteúdo da página: uma linha entre cada bloco; o espaço em volta vem do padding de cada um. */
export function Main({ children }: { children: ReactNode }) {
  return <main className="flex-1 divide-y divide-line">{children}</main>;
}
