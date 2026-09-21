import { openTrainingEventWhatsAppMessage } from "@/constants/events";

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

export const WHATSAPP_GRUPOS_FIJOS_MESSAGE =
  "Hola, quiero consultar por los grupos fijos de Match Point. ¿Qué niveles, frecuencias y horarios tienen disponibles?";

export const WHATSAPP_GRUPOS_FIJOS_URL = createWhatsAppUrl(
  WHATSAPP_GRUPOS_FIJOS_MESSAGE
);

export function whatsAppGruposFijosUrl(recommendedLevel?: string | null): string {
  const level = recommendedLevel?.trim();
  if (level) {
    return createWhatsAppUrl(
      `${WHATSAPP_GRUPOS_FIJOS_MESSAGE} Mi nivel aproximado es ${level}.`
    );
  }
  return WHATSAPP_GRUPOS_FIJOS_URL;
}

export const WHATSAPP_CLASES_PARTICULARES_MESSAGE =
  "Hola, quiero consultar precios y disponibilidad de clases particulares para una o dos personas.";

export const WHATSAPP_CLASES_PARTICULARES_URL = createWhatsAppUrl(
  WHATSAPP_CLASES_PARTICULARES_MESSAGE
);

export const WHATSAPP_ALQUILER_CANCHA_MESSAGE =
  "Hola, quiero consultar horarios y tarifas para alquilar la cancha. ¿Qué disponibilidad tienen?";

export const WHATSAPP_ALQUILER_CANCHA_URL = createWhatsAppUrl(
  WHATSAPP_ALQUILER_CANCHA_MESSAGE
);

export const WHATSAPP_RESERVAR_EVENTO_URL = createWhatsAppUrl(
  openTrainingEventWhatsAppMessage()
);

export function whatsAppQuizNivelUrl(level: string): string {
  return createWhatsAppUrl(
    `Hola, hice el test de nivel de Match Point y mi nivel recomendado fue ${level}. Quiero consultar qué grupos tienen cupo.`
  );
}

/** @deprecated Usar WHATSAPP_CONSULTAR_CUPOS_URL */
export const WHATSAPP_MEMBERSHIP_URL = WHATSAPP_CONSULTAR_CUPOS_URL;
