/**
 * Casos de validación del formulario de alquiler (Montevideo).
 * Ejecutar: node scripts/validate-alquiler-horario-test.mjs
 */
import assert from "node:assert/strict";

const MONTEVIDEO_TZ = "America/Montevideo";

function montevideoCalendarDateIso(reference = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: MONTEVIDEO_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(reference);
}

function montevideoTimeHHMM(reference = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: MONTEVIDEO_TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(reference);
}

function compareCalendarDatesIso(a, b) {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

function compareTimeHHMM(a, b) {
  const toMinutes = (value) => {
    const [h, m] = value.trim().slice(0, 5).split(":").map(Number);
    return (h ?? 0) * 60 + (m ?? 0);
  };
  const diff = toMinutes(a) - toMinutes(b);
  if (diff === 0) return 0;
  return diff < 0 ? -1 : 1;
}

function addMinutesToTimeHHMM(time, minutes) {
  const [h, m] = time.trim().slice(0, 5).split(":").map(Number);
  const total = (h ?? 0) * 60 + (m ?? 0) + minutes;
  const clamped = Math.min(total, 23 * 60 + 59);
  const nh = Math.floor(clamped / 60);
  const nm = clamped % 60;
  return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
}

function validateAlquilerHorarioFields(values, reference = new Date()) {
  const next = {};
  const todayIso = montevideoCalendarDateIso(reference);
  const nowTime = montevideoTimeHHMM(reference);

  if (!values.date.trim()) next.date = "required";
  else if (compareCalendarDatesIso(values.date, todayIso) < 0) next.date = "past-date";

  if (!values.time.trim()) next.time = "required";
  else if (
    values.date.trim() &&
    compareCalendarDatesIso(values.date, todayIso) === 0 &&
    compareTimeHHMM(values.time, nowTime) < 0
  ) {
    next.time = "past-time";
  }

  const endTrimmed = values.endTime.trim();
  if (endTrimmed && values.time.trim() && !next.time) {
    if (compareTimeHHMM(endTrimmed, values.time) <= 0) next.endTime = "before-start";
    else {
      const minEnd = addMinutesToTimeHHMM(values.time, 60);
      if (compareTimeHHMM(endTrimmed, minEnd) < 0) next.endTime = "min-duration";
    }
  }

  return next;
}

const ref = new Date("2026-10-04T15:00:00-03:00");
const today = montevideoCalendarDateIso(ref);

assert.deepEqual(
  validateAlquilerHorarioFields({ date: "", time: "10:00", endTime: "", notes: "" }, ref),
  { date: "required" }
);

assert.deepEqual(
  validateAlquilerHorarioFields({ date: "2020-01-01", time: "10:00", endTime: "", notes: "" }, ref),
  { date: "past-date" }
);

assert.deepEqual(
  validateAlquilerHorarioFields({ date: today, time: "08:00", endTime: "", notes: "" }, ref),
  { time: "past-time" }
);

assert.deepEqual(
  validateAlquilerHorarioFields({ date: today, time: "18:00", endTime: "17:30", notes: "" }, ref),
  { endTime: "before-start" }
);

assert.deepEqual(
  validateAlquilerHorarioFields({ date: today, time: "18:00", endTime: "18:45", notes: "" }, ref),
  { endTime: "min-duration" }
);

assert.deepEqual(
  validateAlquilerHorarioFields({ date: today, time: "18:00", endTime: "19:00", notes: "" }, ref),
  {}
);

console.log("validate-alquiler-horario: todos los casos OK");
