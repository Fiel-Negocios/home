import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND } from "@/lib/company";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { template: `%s | ${BRAND}`, default: BRAND },
  icons: { icon: { url: "/svg/fiel_simbolo.svg", type: "image/svg+xml" } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="flex min-h-svh flex-col bg-mist font-sans leading-normal text-navy">
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
