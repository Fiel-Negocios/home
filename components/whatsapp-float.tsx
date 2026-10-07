import { WhatsAppLink } from "./whatsapp-link";

export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      className="fixed right-5 bottom-5 grid aspect-square w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_4px_12px_rgb(0_0_0/0.25)] transition-[filter] duration-200 hover:brightness-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src="/svg/whatsapp.svg" width={28} height={28} alt="" />
    </WhatsAppLink>
  );
}
