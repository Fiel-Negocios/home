import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

/** Atributos de todo link que abre fora do site. */
export const external = { target: "_blank", rel: "noopener" } as const;

/** Seta que marca links que abrem fora do site. */
export function ExternalMark() {
  return <ArrowUpRight className="size-[0.9em] shrink-0" aria-hidden />;
}

/** Link de texto para fora do site, já com a seta. */
export function ExternalLink({
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      className={`inline-flex items-center gap-1 ${className}`}
      {...external}
      {...props}
    >
      {children}
      <ExternalMark />
    </a>
  );
}
