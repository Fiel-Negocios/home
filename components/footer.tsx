import { BRAND, EMAIL, HOURS } from "@/lib/company";
import { WhatsAppButton } from "./whatsapp";

const linkClass = "text-white underline underline-offset-[0.2em]";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-[#d6e0e8]">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-[2rem] font-extrabold text-white">
            Fale conosco
          </h2>
          <p className="mt-2 max-w-xl leading-relaxed">
            Atendimento {HOURS}, pelo WhatsApp ou pelo email{" "}
            <a className={linkClass} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
        </div>
        <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
      </div>
      {/* pb-24 no celular: espaço para o botão flutuante do WhatsApp */}
      <div className="wrap flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 pb-24 text-[0.85rem] sm:flex-row sm:items-center sm:pb-6">
        <p>&copy; 2026 {BRAND}. Todos os direitos reservados.</p>
        <p>
          Feito por{" "}
          <a
            className={linkClass}
            href="https://github.com/kauanallyson"
            target="_blank"
            rel="noopener"
          >
            Kauan Allyson
          </a>
        </p>
      </div>
    </footer>
  );
}
