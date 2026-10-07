import { WHATSAPP_NUMBER } from "./company";
import { type Service, sites } from "./sites";

/**
 * Canal de contato: toda conversa começa no WhatsApp da empresa com uma
 * mensagem pronta. Numa página de serviço, a mensagem cita o serviço para o
 * atendimento saber de onde o lead veio.
 */
export function contactMessage(service?: Service) {
  return service
    ? `Vim do site, quero falar com um especialista em ${sites[service].title}.`
    : "Vim do site, quero falar com um especialista.";
}

export function whatsappLink(message = contactMessage()) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

/** Mensagem inicial de um lead: o pedido e uma linha por dado preenchido. */
export function leadMessage(fields: [label: string, value: string][]) {
  return [
    "Vim do site, quero uma análise para o Financiamento BNB.",
    ...fields.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}
