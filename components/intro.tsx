import type { ComponentProps } from "react";

export function Intro({ className = "", ...props }: ComponentProps<"p">) {
  return (
    <p
      className={`text-[1.05rem] leading-relaxed text-muted ${className}`}
      {...props}
    />
  );
}
