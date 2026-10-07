import type { ComponentProps } from "react";

export function Intro({ className = "", ...props }: ComponentProps<"p">) {
  return (
    <p
      className={`mt-3 max-w-176 text-[1.05rem] leading-relaxed text-muted ${className}`}
      {...props}
    />
  );
}
