import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { ExternalLink } from "./external-link";

test("link para fora da empresa abre numa nova aba, com a seta", () => {
  const html = renderToStaticMarkup(
    <ExternalLink href="https://github.com/x">x</ExternalLink>,
  );
  expect(html).toContain('target="_blank"');
  expect(html).toContain('rel="noopener"');
  expect(html).toContain("lucide-arrow-up-right");
});
