import type { ComponentProps, ReactNode } from "react";

/**
 * Ritmo da página: o `Main` põe uma linha entre cada bloco e cada `Block` dá
 * o mesmo espaço dos dois lados dela. Só o bloco de abertura (o hero) encosta
 * mais no cabeçalho.
 */
export function Main({ children }: { children: ReactNode }) {
  return <main className="flex-1 divide-y divide-line">{children}</main>;
}

export function Block({
  opening = false,
  className = "",
  ...props
}: ComponentProps<"section"> & {
  /** O primeiro bloco da página, logo abaixo do cabeçalho. */
  opening?: boolean;
}) {
  const padding = opening ? "pt-4 pb-10 sm:pb-16" : "py-10 sm:py-16";
  return <section className={`wrap ${padding} ${className}`} {...props} />;
}

/** Linha de ação: os botões ficam centralizados na largura do bloco. */
export function Actions({ children }: { children?: ReactNode }) {
  return <div className="text-center">{children}</div>;
}
