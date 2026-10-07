import type { ReactNode } from "react";
import { BRAND } from "@/lib/brand";

const logoClass = "w-[min(55vw,14rem)] sm:mr-auto sm:w-48";

function Logo({ className }: { className: string }) {
  return <img className={className} src="/svg/fiel_logo.svg" alt={BRAND} />;
}

export function SiteHeader({
  logoHref,
  children,
}: {
  logoHref?: string;
  children?: ReactNode;
}) {
  return (
    <header className="wrap flex items-center justify-center gap-8 py-6 sm:justify-start">
      {logoHref ? (
        <a href={logoHref} className={logoClass}>
          <Logo className="w-full" />
        </a>
      ) : (
        <Logo className={logoClass} />
      )}
      {children}
    </header>
  );
}
