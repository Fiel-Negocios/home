import type { ComponentProps } from "react";
import { whatsappLink } from "@/lib/contact";

export function WhatsAppLink(props: ComponentProps<"a">) {
  return <a href={whatsappLink()} target="_blank" rel="noopener" {...props} />;
}
