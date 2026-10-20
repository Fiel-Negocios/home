import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { NewTabLink } from "./new-tab-link";

test("link para fora da empresa abre numa nova aba, com a seta", () => {
  const html = renderToStaticMarkup(
    <NewTabLink href="https://github.com/x">x</NewTabLink>,
  );
  expect(html).toContain('target="_blank"');
  expect(html).toContain('rel="noopener"');
  expect(html).toContain("lucide-arrow-up-right");
});
