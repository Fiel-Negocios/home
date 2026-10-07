const WHATSAPP_PHONE = "5588999940004";

export const EMAIL = "faleconoscofiel@gmail.com";

export function whatsappLink(
  text = "Vim do site, quero falar com um especialista.",
) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
}
