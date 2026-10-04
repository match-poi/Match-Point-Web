import {
  addMinutesToTimeHHMM,
  compareCalendarDatesIso,
  compareTimeHHMM,
  montevideoCalendarDateIso,
  montevideoTimeHHMM
} from "@/lib/montevideo-date";

export type AlquilerHorarioFields = {
  date: string;
  time: string;
  endTime: string;
  notes: string;
};

export type AlquilerHorarioFieldErrors = Partial<Record<keyof AlquilerHorarioFields, string>>;

const MIN_DURATION_MINUTES = 60;

export function validateAlquilerHorarioFields(
  values: AlquilerHorarioFields,
  reference = new Date()
): AlquilerHorarioFieldErrors {
  const next: AlquilerHorarioFieldErrors = {};
  const todayIso = montevideoCalendarDateIso(reference);
  const nowTime = montevideoTimeHHMM(reference);

  if (!values.date.trim()) {
    next.date = "Elegí una fecha.";
  } else if (compareCalendarDatesIso(values.date, todayIso) < 0) {
    next.date = "La fecha no puede ser anterior a hoy (hora de Montevideo).";
  }

  if (!values.time.trim()) {
    next.time = "Indicá la hora de inicio.";
  } else if (
    values.date.trim() &&
    compareCalendarDatesIso(values.date, todayIso) === 0 &&
    compareTimeHHMM(values.time, nowTime) < 0
  ) {
    next.time = "La hora de inicio no puede ser anterior a la hora actual en Montevideo.";
  }

  const endTrimmed = values.endTime.trim();
  if (endTrimmed && values.time.trim() && !next.time) {
    if (compareTimeHHMM(endTrimmed, values.time) <= 0) {
      next.endTime = "La hora de fin debe ser posterior a la hora de inicio.";
    } else {
      const minEnd = addMinutesToTimeHHMM(values.time, MIN_DURATION_MINUTES);
      if (compareTimeHHMM(endTrimmed, minEnd) < 0) {
        next.endTime = "Si indicás hora de fin, la duración mínima es de 1 hora.";
      }
    }
  }

  return next;
}
