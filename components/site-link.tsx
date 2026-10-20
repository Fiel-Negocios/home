import type { ComponentProps, ReactNode } from "react";
import { isExternalSite, type Site, siteHref } from "@/lib/sites";
import { ExternalMark } from "./external-link";

type SiteLinkProps = Omit<ComponentProps<"a">, "href" | "children"> & {
  site: Site;
  /** O conteúdo; como função, recebe a seta (ou nada) para pôr onde quiser. */
  children: ReactNode | ((mark: ReactNode) => ReactNode);
};

/**
 * Link para um site da empresa. O registro diz o endereço e se o site é de
 * outro sistema; os externos ganham a seta, mas abrem na mesma aba.
 */
export function SiteLink({ site, children, ...props }: SiteLinkProps) {
  const mark = isExternalSite(site) ? <ExternalMark /> : null;
  return (
    <a href={siteHref(site)} {...props}>
      {typeof children === "function" ? (
        children(mark)
      ) : (
        <>
          {children}
          {mark}
        </>
      )}
    </a>
  );
}
