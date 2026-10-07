import type { ComponentProps } from "react";
import { buttonClass } from "./button";
import { WhatsAppLink } from "./whatsapp-link";

export function WhatsAppButton({
  className = "",
  ...props
}: ComponentProps<"a">) {
  return <WhatsAppLink className={`${buttonClass} ${className}`} {...props} />;
}
