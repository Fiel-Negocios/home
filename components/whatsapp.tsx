import Image from "next/image";
import type { ComponentProps } from "react";
import { contactMessage, whatsappLink } from "@/lib/contact";
import type { Service } from "@/lib/sites";
import whatsappIcon from "@/public/svg/whatsapp.svg";
import { Button } from "./button";

export type WhatsAppProps = ComponentProps<"a"> & {
  /** Serviço da página; entra na mensagem inicial. */
  service?: Service;
  /** Mensagem inicial completa, quando a padrão não serve. */
  message?: string;
};

function linkProps({
  service,
  message = contactMessage(service),
  ...props
}: WhatsAppProps): ComponentProps<"a"> {
  return {
    href: whatsappLink(message),
    target: "_blank",
    rel: "noopener",
    ...props,
  };
}

export function WhatsAppButton(props: WhatsAppProps) {
  return <Button {...linkProps(props)} />;
}

export function WhatsAppFloat() {
  const { href, target, rel } = linkProps({});
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="fixed right-5 bottom-5 grid aspect-square w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_4px_12px_rgb(0_0_0/0.25)] transition-[filter] duration-200 hover:brightness-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Image src={whatsappIcon} width={28} height={28} alt="" />
    </a>
  );
}
