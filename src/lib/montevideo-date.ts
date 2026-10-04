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

/** Hora HH:MM (24 h) en Montevideo. */
export function montevideoTimeHHMM(reference = new Date()): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: MONTEVIDEO_TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(reference);
}

export function compareCalendarDatesIso(a: string, b: string): number {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

/** Compara horas HH:MM o HH:MM:SS (solo horas y minutos). */
export function compareTimeHHMM(a: string, b: string): number {
  const toMinutes = (value: string) => {
    const [h, m] = value.trim().slice(0, 5).split(":").map(Number);
    return (h ?? 0) * 60 + (m ?? 0);
  };
  const diff = toMinutes(a) - toMinutes(b);
  if (diff === 0) return 0;
  return diff < 0 ? -1 : 1;
}

/** Suma minutos a HH:MM; devuelve HH:MM (mismo día, sin cruzar medianoche en validación). */
export function addMinutesToTimeHHMM(time: string, minutes: number): string {
  const [h, m] = time.trim().slice(0, 5).split(":").map(Number);
  const total = (h ?? 0) * 60 + (m ?? 0) + minutes;
  const clamped = Math.min(total, 23 * 60 + 59);
  const nh = Math.floor(clamped / 60);
  const nm = clamped % 60;
  return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
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
