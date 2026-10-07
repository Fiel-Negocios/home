import { BRAND } from "@/lib/brand";
import { EMAIL } from "@/lib/contact";
import { TextLink } from "./text-link";
import { WhatsAppButton } from "./whatsapp-button";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-[#d6e0e8]">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-[2rem] font-extrabold text-white">
            Fale conosco
          </h2>
          <p className="mt-2 max-w-xl leading-relaxed">
            Atendimento das 09h às 18h, pelo WhatsApp ou pelo email{" "}
            <TextLink href={`mailto:${EMAIL}`}>{EMAIL}</TextLink>.
          </p>
        </div>
        <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
      </div>
      {/* pb-24 no celular: espaço para o botão flutuante do WhatsApp */}
      <div className="wrap flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 pb-24 text-[0.85rem] sm:flex-row sm:items-center sm:pb-6">
        <img
          className="w-32 brightness-0 invert"
          loading="lazy"
          src="/svg/fiel_logo.svg"
          alt={BRAND}
        />
        <p>&copy; 2026 {BRAND}. Todos os direitos reservados.</p>
        <p>
          Feito por{" "}
          <TextLink
            href="https://github.com/kauanallyson"
            target="_blank"
            rel="noopener"
          >
            Kauan Allyson
          </TextLink>
        </p>
      </div>
    </footer>
  );
}
