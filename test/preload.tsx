import { mock } from "bun:test";
import type { ComponentProps } from "react";

// Fora do Next, importar uma imagem dá só o caminho do arquivo, e o next/image
// exige as dimensões. Nos testes, um <img> comum basta.
mock.module("next/image", () => ({
  default: ({
    src,
    alt,
    preload: _preload,
    ...props
  }: Omit<ComponentProps<"img">, "src"> & {
    src: string | { src: string };
    preload?: boolean;
  }) => (
    <img src={typeof src === "string" ? src : src.src} alt={alt} {...props} />
  ),
}));
