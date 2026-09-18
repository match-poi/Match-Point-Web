import BrandWordmark from "@/components/BrandWordmark";
import { SITE_NAV_LINKS } from "@/constants/navigation";
import { WHATSAPP_MEMBERSHIP_URL } from "@/constants/whatsapp";

export default function SiteTopBanner() {
  return (
    <header className="site-chrome-primary sticky top-0 z-50 isolate border-b border-cream/10 shadow-sm">
      <div className="relative z-[1] mx-auto max-w-6xl px-3 py-3.5 sm:px-6 sm:py-4">
        <div className="flex flex-col items-stretch">
          <a
            href="#top"
            className="flex w-full justify-center pb-3.5 sm:pb-4"
            aria-label="Match Point Tenis — Inicio"
          >
            <BrandWordmark tone="light" />
          </a>

          <div className="flex w-full flex-col items-stretch gap-2.5 border-t border-cream/15 pt-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <nav
              className="flex w-full flex-1 flex-wrap items-center justify-center gap-1.5 sm:justify-between sm:gap-2 md:gap-3"
              aria-label="Secciones del sitio"
            >
              {SITE_NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="nav-pill-on-primary">
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={WHATSAPP_MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-sm mx-auto shrink-0 sm:mx-0"
            >
              Unirme al Club
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
