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

/** Torneo Match Point — Hotel del Lago (Punta del Este). */
export const HOTEL_DEL_LAGO_TOURNAMENT = {
  path: "/torneo-hotel-del-lago/",
  pageTitle: "Torneo Match Point — Hotel del Lago",
  metaTitle: "Torneo Match Point | Hotel del Lago · Punta del Este",
  metaDescription:
    "Torneo de tenis organizado por Match Point los días 19 y 20 de diciembre de 2026 en Hotel del Lago, Punta del Este. Inscripciones abiertas.",
  displayDates: "19 y 20 de diciembre de 2026",
  venueName: "Hotel del Lago",
  venueLocality: "Punta del Este",
  venueDisplay: "Hotel del Lago · Punta del Este",
  registrationUrl: "https://forms.fillout.com/t/wBDaWBcketus",
  registrationCtaLabel: "Inscribirme al torneo",
  intro:
    "Match Point organiza un torneo de tenis en Punta del Este. Las inscripciones están abiertas; por WhatsApp podés hacer consultas sobre el evento.",
  categoriesFormatPendingCopy:
    "Pronto publicaremos categorías y formato del torneo en esta página."
} as const;

export function hotelDelLagoTournamentWhatsAppMessage(): string {
  return "Hola, quiero consultar por el torneo de Match Point del 19 y 20 de diciembre de 2026 en Hotel del Lago, Punta del Este.";
}
