import { WHATSAPP_NUMBER } from "./company";

export function whatsappLink(
  text = "Vim do site, quero falar com um especialista.",
) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
}
