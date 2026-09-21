import { CLUB_INSTAGRAM_REEL_URL } from "@/constants/club";

/**
 * Perfil oficial de Instagram cuando lo tengan (ej. https://www.instagram.com/matchpoint.../).
 * Vacío: el footer usa el reel de la cancha como enlace real verificado en el proyecto.
 */
export const INSTAGRAM_PROFILE_URL = "";

export const INSTAGRAM_PUBLIC_URL =
  INSTAGRAM_PROFILE_URL || CLUB_INSTAGRAM_REEL_URL;
