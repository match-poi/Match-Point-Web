import { CLUB_INSTAGRAM_REEL_URL } from "@/constants/club";

/**
 * Perfil oficial de Instagram (ej. https://www.instagram.com/matchpoint.../).
 * Vacío: el footer sigue el reel verificado hasta indicar el perfil.
 */
export const INSTAGRAM_PROFILE_URL = "";

/** Footer: perfil oficial cuando exista; si no, reel temporal. */
export const INSTAGRAM_FOOTER_URL =
  INSTAGRAM_PROFILE_URL || CLUB_INSTAGRAM_REEL_URL;

/** @deprecated Usar INSTAGRAM_FOOTER_URL en el pie. */
export const INSTAGRAM_PUBLIC_URL = INSTAGRAM_FOOTER_URL;
