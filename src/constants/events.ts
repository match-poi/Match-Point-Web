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
