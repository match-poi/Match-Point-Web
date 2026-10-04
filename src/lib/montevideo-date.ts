const MONTEVIDEO_TZ = "America/Montevideo";

/** Fecha calendario YYYY-MM-DD en hora de Montevideo. */
export function montevideoCalendarDateIso(reference = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: MONTEVIDEO_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(reference);
}

export function compareCalendarDatesIso(a: string, b: string): number {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

export type OpenTrainingTemporalState = "upcoming" | "today" | "past";

/** Estados del entrenamiento del 4 oct 2026 (solo fecha, sin hora publicada). */
export function openTrainingTemporalState(
  eventDateIso: string,
  reference = new Date()
): OpenTrainingTemporalState {
  const today = montevideoCalendarDateIso(reference);
  const cmp = compareCalendarDatesIso(today, eventDateIso);
  if (cmp < 0) return "upcoming";
  if (cmp === 0) return "today";
  return "past";
}

export function isOpenTrainingVisible(eventDateIso: string, reference = new Date()): boolean {
  return openTrainingTemporalState(eventDateIso, reference) !== "past";
}
