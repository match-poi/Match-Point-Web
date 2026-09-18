import BrandWordmark from "@/components/BrandWordmark";
import SiteChromeWatermark from "@/components/SiteChromeWatermark";
import { Instagram } from "lucide-react";
import { SITE_NAV_LINKS } from "@/constants/navigation";
import {
  WHATSAPP_CTA_URL,
  WHATSAPP_DISPLAY_NUMBER,
  WHATSAPP_MEMBERSHIP_URL
} from "@/constants/whatsapp";

export default function SiteFooterBanner() {
  return (
    <footer className="site-chrome-cream relative z-10 isolate text-brand-blue">
      <SiteChromeWatermark variant="cream" />

      <div className="relative z-[1] mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="flex flex-col items-center gap-8 border-b border-brand-blue/10 pb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <a
            href="#top"
            className="flex w-full justify-center sm:w-auto sm:justify-start"
            aria-label="Volver al inicio"
          >
            <BrandWordmark tone="dark" />
          </a>
          <a
            href={WHATSAPP_MEMBERSHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-sm shrink-0"
          >
            Quiero ser Socio
          </a>
        </div>

        <div className="relative z-10 grid gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-[11px] leading-relaxed text-brand-blue/70">
              Club de tenis en Potosí 1657, Carrasco, Montevideo.
            </p>
            <p className="text-[11px] leading-relaxed text-brand-blue/70">
              Lunes a Viernes 08:00 - 22:00 · Sábados 09:00 - 18:00
            </p>
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-accent transition-colors duration-200 hover:text-[#e55a00]"
            >
              {WHATSAPP_DISPLAY_NUMBER}
            </a>
          </div>

          <nav
            className="flex flex-col items-center gap-2 sm:items-start"
            aria-label="Enlaces del pie"
          >
            <a
              href="#top"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 transition-colors hover:text-primary"
            >
              Inicio
            </a>
            {SITE_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 transition-colors hover:text-primary"
              >
                {link.label === "FAQ" ? "Preguntas frecuentes" : link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 sm:items-start lg:items-end">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/25 text-brand-blue/80 transition-all duration-200 hover:border-accent hover:text-accent"
              aria-label="Instagram MATCH POINT"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="relative z-10 mt-8 border-t border-brand-blue/10 pt-6 text-center text-[10px] uppercase tracking-[0.2em] text-brand-blue/45">
          © {new Date().getFullYear()} Match Point · Tenis — Entrena para jugar
        </p>
      </div>
    </footer>
  );
}
