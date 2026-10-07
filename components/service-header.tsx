import { siteUrl } from "@/lib/sites";
import { anchors } from "./anchors";
import { SiteHeader } from "./site-header";
import { WhatsAppButton } from "./whatsapp-button";

export function ServiceHeader() {
  return (
    <SiteHeader logoHref={siteUrl("home")}>
      <nav
        aria-label="Seções da página"
        className="hidden gap-6 text-[0.9rem] font-semibold md:flex [&_a:hover]:text-gold"
      >
        {Object.entries(anchors).map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <WhatsAppButton className="hidden sm:inline-block">
        Fale conosco
      </WhatsAppButton>
    </SiteHeader>
  );
}
