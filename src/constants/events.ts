/** Evento visible en Próximos Eventos — datos alineados con schema Event. */
export const OPEN_TRAINING_EVENT = {
  name: "Entrenar para competir — torneos sociales",
  /** Domingo 4 de octubre (sin hora publicada en el sitio). */
  startDate: "2026-10-04",
  durationMinutes: 90,
  displayDate: "Domingo 4 de octubre · 1 h 30",
  /** Fecha en mensajes de WhatsApp (misma instancia que la UI). */
  bookingDateLabel: "domingo 4 de octubre"
} as const;

export function openTrainingEventWhatsAppMessage(): string {
  return `Hola, quiero reservar un lugar para ${OPEN_TRAINING_EVENT.name} del ${OPEN_TRAINING_EVENT.bookingDateLabel}. ¿Todavía quedan cupos?`;
}

/** Bloque del programa del fin de semana (torneo Hotel del Lago). */
export type HotelDelLagoWeekendBlock = {
  title: string;
  body: string;
};

/** Torneo Match Point — Hotel del Lago (Punta del Este). */
export const HOTEL_DEL_LAGO_TOURNAMENT = {
  path: "/torneo-hotel-del-lago/",
  kicker: "TORNEO MATCH POINT",
  /** Tarjeta en home (#eventos). */
  tagline: "El último torneo del año lo jugamos todos",
  /** Título principal de la landing del torneo. */
  pageHeadline: "EL ÚLTIMO TORNEO DEL AÑO LO JUGAMOS TODOS",
  pageTitle: "Torneo Match Point — Hotel del Lago",
  metaTitle: "Torneo Match Point | Hotel del Lago · Punta del Este",
  metaDescription:
    "Torneo Match Point 19 y 20 de diciembre de 2026 en Hotel del Lago, Punta del Este. Todos los niveles, clubes y profes. Inscripciones abiertas.",
  displayDates: "19 y 20 de diciembre de 2026",
  dateVenueLine: "19 y 20 de diciembre de 2026 · Hotel del Lago",
  dateVenueShort: "19 y 20 de diciembre de 2026 · Hotel del Lago",
  venueName: "Hotel del Lago",
  venueLocality: "Punta del Este",
  venueDisplay: "Hotel del Lago · Punta del Este",
  registrationUrl: "https://forms.fillout.com/t/wBDaWBcketus",
  registrationCtaLabel: "Inscribirme al torneo",
  presentation:
    "Te invitamos a cerrar el año compartiendo cancha con quienes te cruzaste durante el año y con jugadores de otros clubes, para disfrutar de este deporte que tanto nos gusta.",
  audienceLine: "Todos los niveles · Todos los clubes · Todos los profes",
  weekendSectionTitle: "Un fin de semana para compartir",
  weekendBlocks: [
    {
      title: "TENIS SÁBADO Y DOMINGO",
      body: "Las categorías sociales comienzan y terminan en el mismo día. Primera Categoría se disputa durante ambos días."
    },
    {
      title: "SÁBADO AL ATARDECER",
      body: "Sunset en la piscina con musiquita y sorteos."
    },
    {
      title: "SÁBADO DE NOCHE",
      body: "Barbacoa y fogón en el hotel."
    },
    {
      title: "DOMINGO",
      body: "Sorteos y cierre del torneo."
    }
  ] satisfies readonly HotelDelLagoWeekendBlock[],
  closingParagraph:
    "Dos días de tenis para jugadores de todos los niveles, clubes y profes. Vení a competir, encontrarte con gente de otras canchas y cerrar el año haciendo lo que más nos gusta.",
  /** Texto breve en la tarjeta de #eventos. */
  cardTeaser: "Tenis, sunset, barbacoa y fogón"
} as const;

export function hotelDelLagoTournamentWhatsAppMessage(): string {
  return "Hola, quiero consultar por el torneo de Match Point del 19 y 20 de diciembre de 2026 en Hotel del Lago, Punta del Este.";
}
