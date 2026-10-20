import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

/** Atributos de link que abre numa nova aba. */
export const newTab = { target: "_blank", rel: "noopener" } as const;

/** Seta que marca links que saem deste site, para outro site da empresa ou de terceiros. */
export function OffsiteMark() {
  return <ArrowUpRight className="size-[0.9em] shrink-0" aria-hidden />;
}

/** Link de texto para fora da empresa: abre numa nova aba, já com a seta. */
export function NewTabLink({
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      className={`inline-flex items-center gap-1 ${className}`}
      {...newTab}
      {...props}
    >
      {children}
      <OffsiteMark />
    </a>
  );
}
