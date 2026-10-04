"use client";

import BrandWordmark from "@/components/BrandWordmark";
import { SITE_NAV_LINKS } from "@/constants/navigation";
import { WHATSAPP_CONSULTAR_CUPOS_URL } from "@/constants/whatsapp";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function SiteTopBanner() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="site-chrome-primary sticky top-0 z-50 isolate border-b border-cream/10 shadow-sm">
      <div className="relative z-[1] mx-auto max-w-6xl px-3 py-2 sm:px-6 sm:py-3">
        <div className="flex flex-col items-stretch">
          <div className="flex w-full items-center justify-between gap-2">
            <Link
              href="/"
              className="flex min-h-11 min-w-0 flex-1 items-center justify-start sm:flex-none"
              aria-label="Match Point Tenis — Inicio"
              onClick={closeMenu}
            >
              <BrandWordmark
                tone="light"
                className="max-h-[52px] sm:max-h-[64px] md:max-h-[72px]"
              />
            </Link>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-cream/35 bg-cream/5 text-cream transition-colors hover:border-lime hover:text-lime sm:hidden"
              aria-expanded={menuOpen}
              aria-controls="site-mobile-nav"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>

            <nav
              className="hidden flex-1 flex-wrap items-center justify-center gap-1.5 sm:flex md:gap-2"
              aria-label="Secciones del sitio"
            >
              {SITE_NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="nav-pill-on-primary">
                  {link.label}
                </Link>
              ))}
            </nav>

            <a
              href={WHATSAPP_CONSULTAR_CUPOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-sm hidden shrink-0 sm:inline-flex"
            >
              Consultar cupos
            </a>
          </div>

          {menuOpen ? (
            <nav
              id="site-mobile-nav"
              className="flex w-full flex-col gap-2 border-t border-cream/15 pt-3 sm:hidden"
              aria-label="Secciones del sitio"
            >
              {SITE_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-pill-on-primary inline-flex min-h-11 w-full items-center justify-center text-center"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_CONSULTAR_CUPOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-sm mt-1 min-h-11 w-full text-center"
                onClick={closeMenu}
              >
                Consultar cupos
              </a>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
