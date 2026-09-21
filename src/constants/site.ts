/** URL canónica del sitio (con barra final). */
export const SITE_URL = "https://matchpointmvd.com/";

export const SITE_NAME = "MATCH POINT Club";

export const SITE_TITLE_DEFAULT =
  "MATCH POINT Club | Tenis en Carrasco, Montevideo";

export const SITE_TITLE_TEMPLATE = "%s | MATCH POINT Club";

export const SITE_DESCRIPTION =
  "MATCH POINT es un club de tenis en Carrasco, Montevideo. Clases, entrenamiento, competencia, torneos y comunidad para jugadores de todos los niveles.";

export const SITE_LOCALE = "es-UY";

export const OG_LOCALE = "es_UY";

export const THEME_COLOR = "#738765";

export const OG_IMAGE_PATH = "/og-matchpoint.jpg";

export const OG_IMAGE_WIDTH = 1200;

export const OG_IMAGE_HEIGHT = 630;

export const OG_IMAGE_ALT =
  "MATCH POINT Club — tenis en Carrasco, Montevideo";

export const ORGANIZATION_ID = `${SITE_URL}#organization`;

export const WEBSITE_ID = `${SITE_URL}#website`;

export const FOUNDER_ID = `${SITE_URL}#founder`;

export const CLUB_ADDRESS = {
  streetAddress: "Potosí 1657",
  addressLocality: "Carrasco, Montevideo",
  addressRegion: "Montevideo",
  addressCountry: "UY"
} as const;

/** Horarios visibles en footer y sección ubicación (consistentes). */
export const CLUB_OPENING_HOURS = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "08:00",
    closes: "22:00"
  },
  { dayOfWeek: ["Saturday"] as const, opens: "09:00", closes: "18:00" }
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path.replace(/^\//, ""), SITE_URL).href;
}
