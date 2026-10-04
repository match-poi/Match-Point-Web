export const SITE_NAV_LINKS = [
  { href: "/#experiencia", label: "El Club" },
  { href: "/#servicios", label: "Clases y servicios" },
  { href: "/#eventos", label: "Eventos" },
  { href: "/#niveles", label: "Niveles" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#ubicacion", label: "Ubicación" }
] as const;

/** Páginas de servicio enlazadas desde el pie (sin saturar el nav móvil). */
export const SITE_FOOTER_SERVICE_LINKS = [
  { href: "/clases-de-tenis/", label: "Clases de tenis" },
  { href: "/alquiler-de-cancha/", label: "Alquiler de cancha" }
] as const;
