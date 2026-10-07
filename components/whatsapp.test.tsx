import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { contactMessage } from "@/lib/contact";
import { WhatsAppButton, WhatsAppFloat } from "./whatsapp";

function hrefMessage(html: string) {
  const href = html.match(/<a [^>]*href="([^"]+)"/)?.[1] ?? "";
  return new URL(href.replace(/&amp;/g, "&")).searchParams.get("text");
}

test("o botão abre o WhatsApp numa nova aba com a mensagem do serviço", () => {
  const html = renderToStaticMarkup(
    <WhatsAppButton service="avaliacao">Pedir laudo</WhatsAppButton>,
  );
  expect(hrefMessage(html)).toBe(contactMessage("avaliacao"));
  expect(html).toContain('target="_blank"');
  expect(html).toContain('rel="noopener"');
});

test("uma mensagem própria substitui a do serviço", () => {
  const html = renderToStaticMarkup(
    <WhatsAppButton service="bnb" message="Oi">
      x
    </WhatsAppButton>,
  );
  expect(hrefMessage(html)).toBe("Oi");
});

test("o botão flutuante usa a mensagem padrão", () => {
  expect(hrefMessage(renderToStaticMarkup(<WhatsAppFloat />))).toBe(
    contactMessage(),
  );
});
