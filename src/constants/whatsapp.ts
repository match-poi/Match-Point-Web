import {
  hotelDelLagoTournamentWhatsAppMessage,
  openTrainingEventWhatsAppMessage
} from "@/constants/events";

/** Sin + ni espacios (solo dígitos) */
export const WHATSAPP_PHONE_WA_ME = "59892687634";

export const WHATSAPP_DISPLAY_NUMBER = "+598 92 687 634";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_WA_ME}?text=${encodeURIComponent(message)}`;
}

/** Consulta general (ubicación, horarios, info). */
export const WHATSAPP_GENERAL_MESSAGE =
  "Hola, quiero más información sobre Match Point Club.";

export const WHATSAPP_CTA_URL = createWhatsAppUrl(WHATSAPP_GENERAL_MESSAGE);

/** Hero y CTAs principales de cupos. */
export const WHATSAPP_CONSULTAR_CUPOS_MESSAGE =
  "Hola, quiero conocer las opciones disponibles para entrenar o jugar en Match Point.";

export const WHATSAPP_CONSULTAR_CUPOS_URL = createWhatsAppUrl(
  WHATSAPP_CONSULTAR_CUPOS_MESSAGE
);

/** Hero principal: consulta por clases (grupos, particulares, alquiler). */
export const WHATSAPP_CONSULTAR_CLASES_MESSAGE =
  "Hola, quiero consultar por clases en Match Point (grupos fijos, clases particulares o alquiler de cancha). ¿Qué opciones tienen disponibles?";

export const WHATSAPP_CONSULTAR_CLASES_URL = createWhatsAppUrl(
  WHATSAPP_CONSULTAR_CLASES_MESSAGE
);

/** Clases grupales (sección servicios). */
export const WHATSAPP_CLASES_GRUPALES_MESSAGE =
  "Hola, me interesan las clases grupales. ¿Me cuentan qué grupos y horarios tienen disponibles?";

export const WHATSAPP_CLASES_GRUPALES_URL = createWhatsAppUrl(
  WHATSAPP_CLASES_GRUPALES_MESSAGE
);

export function whatsAppClasesGrupalesUrl(recommendedLevel?: string | null): string {
  const level = recommendedLevel?.trim();
  if (level) {
    return createWhatsAppUrl(
      `${WHATSAPP_CLASES_GRUPALES_MESSAGE} Mi nivel aproximado es ${level}.`
    );
  }
  return WHATSAPP_CLASES_GRUPALES_URL;
}

/** @deprecated Usar WHATSAPP_CLASES_GRUPALES_* */
export const WHATSAPP_GRUPOS_FIJOS_MESSAGE = WHATSAPP_CLASES_GRUPALES_MESSAGE;

/** @deprecated Usar WHATSAPP_CLASES_GRUPALES_URL */
export const WHATSAPP_GRUPOS_FIJOS_URL = WHATSAPP_CLASES_GRUPALES_URL;

/** @deprecated Usar whatsAppClasesGrupalesUrl */
export function whatsAppGruposFijosUrl(recommendedLevel?: string | null): string {
  return whatsAppClasesGrupalesUrl(recommendedLevel);
}

export const WHATSAPP_CLASES_PARTICULARES_MESSAGE =
  "Hola, me interesa coordinar una clase particular. ¿Qué horarios tienen disponibles?";

export const WHATSAPP_CLASES_PARTICULARES_URL = createWhatsAppUrl(
  WHATSAPP_CLASES_PARTICULARES_MESSAGE
);

export const WHATSAPP_ALQUILER_CANCHA_MESSAGE =
  "Hola, quiero consultar disponibilidad para alquilar la cancha.";

export const WHATSAPP_ALQUILER_CANCHA_URL = createWhatsAppUrl(
  WHATSAPP_ALQUILER_CANCHA_MESSAGE
);

export const WHATSAPP_RESERVAR_EVENTO_URL = createWhatsAppUrl(
  openTrainingEventWhatsAppMessage()
);

export const WHATSAPP_TORNEO_HOTEL_DEL_LAGO_URL = createWhatsAppUrl(
  hotelDelLagoTournamentWhatsAppMessage()
);

export function whatsAppQuizNivelUrl(level: string): string {
  return whatsAppClasesGrupalesUrl(level);
}

/** @deprecated Usar WHATSAPP_CONSULTAR_CUPOS_URL */
export const WHATSAPP_MEMBERSHIP_URL = WHATSAPP_CONSULTAR_CUPOS_URL;
