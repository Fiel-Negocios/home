import type { ComponentProps } from "react";

export function TextLink({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      className={`text-white underline underline-offset-[0.2em] ${className}`}
      {...props}
    />
  );
}
