export type SiteNavItem = {
  href: string;
  label: string;
  /** Pathname con barra final para marcar la página activa. */
  activePath?: string;
  /** Id de sección en la home (sin #) para aria-current en inicio. */
  homeFragment?: string;
};

/** Navegación principal: sin FAQ ni Niveles (solo pie e in-page). */
export const SITE_MAIN_NAV_LINKS: SiteNavItem[] = [
  { href: "/#experiencia", label: "El Club", homeFragment: "experiencia" },
  { href: "/clases-de-tenis/", label: "Clases", activePath: "/clases-de-tenis/" },
  { href: "/alquiler-de-cancha/", label: "Cancha", activePath: "/alquiler-de-cancha/" },
  { href: "/#eventos", label: "Eventos", homeFragment: "eventos" },
  { href: "/#ubicacion", label: "Ubicación", homeFragment: "ubicacion" }
];

/** Anclas de la home solo en el pie de página. */
export const SITE_FOOTER_SECTION_LINKS = [
  { href: "/#niveles", label: "Niveles" },
  { href: "/#faq", label: "Preguntas frecuentes" }
] as const;

/** Páginas de servicio enlazadas desde el pie. */
export const SITE_FOOTER_SERVICE_LINKS = [
  { href: "/clases-de-tenis/", label: "Clases de tenis" },
  { href: "/alquiler-de-cancha/", label: "Alquiler de cancha" }
] as const;

/** @deprecated Usar SITE_MAIN_NAV_LINKS */
export const SITE_NAV_LINKS = SITE_MAIN_NAV_LINKS;
