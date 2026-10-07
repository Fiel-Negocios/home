import Image from "next/image";
import type { ReactNode } from "react";
import { BRAND } from "@/lib/company";
import { type Service, siteUrl } from "@/lib/sites";
import fielLogo from "@/public/svg/fiel_logo.svg";
import { WhatsAppButton } from "./whatsapp";

/**
 * Cabeçalho de todas as páginas: logo que leva à home, o que a página quiser
 * no meio (o menu das seções, nas páginas de serviço) e o botão de contato.
 */
export function SiteHeader({
  service,
  children,
}: {
  /** Serviço da página; entra na mensagem do botão de contato. */
  service?: Service;
  children?: ReactNode;
}) {
  return (
    <header className="wrap flex items-center justify-center gap-8 py-6 sm:justify-start">
      <a
        href={siteUrl("home")}
        className="w-[min(55vw,14rem)] sm:mr-auto sm:w-48"
      >
        <Image className="h-auto w-full" src={fielLogo} alt={BRAND} preload />
      </a>
      {children}
      <WhatsAppButton service={service} className="hidden sm:inline-block">
        Fale conosco
      </WhatsAppButton>
    </header>
  );
}
