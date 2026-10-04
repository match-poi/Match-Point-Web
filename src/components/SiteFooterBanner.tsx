import BrandWordmark from "@/components/BrandWordmark";
import SiteChromeWatermark from "@/components/SiteChromeWatermark";
import { Instagram } from "lucide-react";
import Link from "next/link";
import {
  SITE_FOOTER_SECTION_LINKS,
  SITE_FOOTER_SERVICE_LINKS,
  SITE_MAIN_NAV_LINKS
} from "@/constants/navigation";
import { INSTAGRAM_FOOTER_URL } from "@/constants/social";
import { WHATSAPP_CTA_URL, WHATSAPP_DISPLAY_NUMBER } from "@/constants/whatsapp";

export default function SiteFooterBanner() {
  return (
    <footer className="site-chrome-cream relative z-10 isolate text-brand-blue">
      <SiteChromeWatermark variant="cream" />

      <div className="relative z-[1] mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col items-center gap-6 border-b border-brand-blue/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex w-full justify-center sm:w-auto sm:justify-start"
            aria-label="Volver al inicio"
          >
            <BrandWordmark tone="dark" className="max-h-[56px] sm:max-h-[64px]" />
          </Link>
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-normal shrink-0"
          >
            Escribinos por WhatsApp
          </a>
        </div>

        <div className="relative z-10 grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-1 text-center text-[11px] leading-relaxed text-brand-blue/70 sm:text-left">
            <p>Club de tenis en Potosí 1657, Carrasco, Montevideo.</p>
            <p>Lunes a Viernes 08:00 - 22:00 · Sábados 09:00 - 18:00</p>
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-semibold text-accent transition-colors duration-200 hover:text-[#e55a00]"
            >
              {WHATSAPP_DISPLAY_NUMBER}
            </a>
          </div>

          <nav
            className="flex flex-col items-center gap-1.5 sm:items-start"
            aria-label="Enlaces del pie"
          >
            <Link
              href="/"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 transition-colors hover:text-primary"
            >
              Inicio
            </Link>
            {SITE_MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            {SITE_FOOTER_SECTION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            {SITE_FOOTER_SERVICE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 sm:items-start lg:items-end">
            <a
              href={INSTAGRAM_FOOTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-brand-blue/25 text-brand-blue/80 transition-all duration-200 hover:border-accent hover:text-accent"
              aria-label="Instagram MATCH POINT"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="relative z-10 mt-6 border-t border-brand-blue/10 pt-4 text-center text-[10px] uppercase tracking-[0.2em] text-brand-blue/45">
          © {new Date().getFullYear()} Match Point · Tenis — Entrena para jugar
        </p>
      </div>
    </footer>
  );
}
