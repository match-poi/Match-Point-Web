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

/** Tarifa de inscripción (monto en pesos uruguayos, sin símbolo). */
export type HotelDelLagoPricingItem = {
  label: string;
  amountUyu: number;
};

/** Inscripción y precios — torneo Hotel del Lago. */
export type HotelDelLagoTournamentPricing = {
  sectionTitle: string;
  earlyBirdHeading: string;
  earlyBirdDeadline: string;
  socialCategoriesHeading: string;
  socialTiers: readonly HotelDelLagoPricingItem[];
  primeraHeading: string;
  primeraRegistration: HotelDelLagoPricingItem;
  primeraPrizeMoneyNote: string;
  primeraEarlyBirdNote: string;
  clarifications: readonly string[];
};

/** Bloque informativo — actividades del hotel (no incluidas en inscripción). */
export type HotelDelLagoHotelExperience = {
  sectionTitle: string;
  body: string;
};

/** Modalidad con etiquetas de categoría (torneo Hotel del Lago). */
export type HotelDelLagoCategoryModality = {
  title: string;
  labels: readonly string[];
};

/** Sección «Encontrá tu categoría» — torneo Hotel del Lago. */
export type HotelDelLagoCategoriesSection = {
  sectionTitle: string;
  intro: string;
  modalities: readonly HotelDelLagoCategoryModality[];
  libreHeading: string;
  libreItems: readonly string[];
  primeraHeading: string;
  primeraScheduleLine: string;
  scheduleNote: string;
  choicePrompt: string;
  heroCategoriesLinkLabel: string;
};

/** Formato $X.XXX (punto de miles) para montos en UYU. */
export function formatHotelDelLagoPriceUyu(amountUyu: number): string {
  const digits = Math.round(amountUyu).toString();
  const withThousands = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${withThousands}`;
}

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
  categories: {
    sectionTitle: "Encontrá tu categoría",
    intro:
      "Opciones de singles y dobles para distintos niveles, categorías libres con saque de abajo y Primera Categoría.",
    modalities: [
      { title: "Singles caballeros", labels: ["A", "B", "C", "D"] },
      { title: "Singles femenino", labels: ["A", "B", "C"] },
      { title: "Dobles caballeros", labels: ["A", "B", "C"] },
      { title: "Dobles femenino", labels: ["A", "B", "C"] },
      { title: "Dobles mixto", labels: ["A/B", "C"] }
    ],
    libreHeading: "Categorías libres",
    libreItems: [
      "Libre con saque de abajo · Sábado",
      "Libre con saque de abajo · Domingo"
    ],
    primeraHeading: "Primera Categoría",
    primeraScheduleLine: "Se disputa durante ambos días.",
    scheduleNote:
      "Las categorías sociales comienzan y terminan en el mismo día. Primera Categoría se disputa durante ambos días.",
    choicePrompt: "¿No sabés cuál elegir? Consultanos y te orientamos.",
    heroCategoriesLinkLabel: "Ver categorías"
  } satisfies HotelDelLagoCategoriesSection,
  pricing: {
    sectionTitle: "Inscripción y precios",
    earlyBirdHeading: "Inscripción anticipada",
    earlyBirdDeadline: "Hasta el 31 de octubre de 2026",
    socialCategoriesHeading: "Categorías sociales",
    socialTiers: [
      { label: "Una categoría", amountUyu: 1300 },
      { label: "Dos categorías", amountUyu: 2500 }
    ],
    primeraHeading: "Primera categoría",
    primeraRegistration: { label: "Inscripción", amountUyu: 1600 },
    primeraPrizeMoneyNote: "US$1.000 de prize money total.",
    primeraEarlyBirdNote:
      "La tarifa anticipada de las categorías sociales no aplica a Primera.",
    clarifications: [
      "En dobles, el importe es por persona.",
      "La inscripción se confirma al completar el formulario, realizar el pago y adjuntar el comprobante.",
      "Consultá por WhatsApp los valores y condiciones de las actividades del hotel."
    ]
  } satisfies HotelDelLagoTournamentPricing,
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
  hotelExperience: {
    sectionTitle: "Experiencia en el hotel",
    body: "La estadía, el sunset, la barbacoa y el fogón se contratan por separado y no están incluidos en la inscripción al torneo. Próximamente comunicaremos sus precios y los beneficios para quienes participen del torneo."
  } satisfies HotelDelLagoHotelExperience,
  /** Texto breve en la tarjeta de #eventos. */
  cardTeaser: "Tenis, sunset, barbacoa y fogón",
  /** Aclaración de estadía en la tarjeta de home (#eventos). */
  cardStayNote:
    "La estadía en el hotel, el sunset, la barbacoa y el fogón se contratan aparte y no están incluidos en la inscripción al torneo."
} as const;

export function hotelDelLagoTournamentWhatsAppMessage(): string {
  return "Hola, quiero consultar por el torneo de Match Point del 19 y 20 de diciembre de 2026 en Hotel del Lago, Punta del Este.";
}

export function hotelDelLagoCategoryChoiceWhatsAppMessage(): string {
  return "Hola, quiero inscribirme al torneo de Match Point del 19 y 20 de diciembre de 2026 en Hotel del Lago, Punta del Este. ¿Me orientan sobre qué categoría me conviene elegir?";
}
