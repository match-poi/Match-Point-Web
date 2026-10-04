"use client";

import { compareCalendarDatesIso, montevideoCalendarDateIso } from "@/lib/montevideo-date";
import { whatsAppAlquilerHorarioUrl } from "@/constants/whatsapp";
import { type FormEvent, useEffect, useId, useState } from "react";

type FormFields = {
  date: string;
  time: string;
  endTime: string;
  notes: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const emptyFields: FormFields = {
  date: "",
  time: "",
  endTime: "",
  notes: ""
};

export default function SolicitarHorarioAlquilerForm() {
  const formId = useId();
  const [fields, setFields] = useState<FormFields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(montevideoCalendarDateIso());
  }, []);

  const validate = (values: FormFields, todayIso: string): FieldErrors => {
    const next: FieldErrors = {};

    if (!values.date.trim()) {
      next.date = "Elegí una fecha.";
    } else if (todayIso && compareCalendarDatesIso(values.date, todayIso) < 0) {
      next.date = "La fecha no puede ser anterior a hoy (hora de Montevideo).";
    }

    if (!values.time.trim()) {
      next.time = "Indicá la hora de inicio.";
    }

    return next;
  };

  const handleChange = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setFormError(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todayIso = minDate || montevideoCalendarDateIso();
    const nextErrors = validate(fields, todayIso);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFormError("Revisá los campos marcados antes de consultar por WhatsApp.");
      return;
    }

    setErrors({});
    setFormError(null);

    const url = whatsAppAlquilerHorarioUrl({
      dateIso: fields.date,
      time: fields.time,
      endTime: fields.endTime || undefined,
      notes: fields.notes || undefined
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const dateErrorId = `${formId}-date-error`;
  const timeErrorId = `${formId}-time-error`;
  const formErrorId = `${formId}-form-error`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-sm sm:p-8"
      aria-describedby={formError ? formErrorId : undefined}
    >
      <div>
        <h2 className="text-lg font-semibold uppercase tracking-[0.08em] text-brand-blue sm:text-xl">
          Solicitá un horario
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-brand-blue/75">
          Completá los datos y te llevamos a WhatsApp con el mensaje listo para enviar.
        </p>
      </div>

      {formError ? (
        <p
          id={formErrorId}
          role="alert"
          className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-medium text-brand-blue"
        >
          {formError}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-date`} className="block text-sm font-semibold text-brand-blue">
            Fecha <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-date`}
            name="date"
            type="date"
            required
            min={minDate || undefined}
            value={fields.date}
            onChange={(e) => handleChange("date", e.target.value)}
            aria-invalid={errors.date ? true : undefined}
            aria-describedby={errors.date ? dateErrorId : undefined}
            className="mt-2 w-full min-h-11 rounded-xl border border-brand-blue/20 bg-cream/40 px-3 py-2 text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
          {errors.date ? (
            <p id={dateErrorId} role="alert" className="mt-1.5 text-sm text-accent">
              {errors.date}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-time`} className="block text-sm font-semibold text-brand-blue">
            Hora de inicio <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-time`}
            name="time"
            type="time"
            required
            value={fields.time}
            onChange={(e) => handleChange("time", e.target.value)}
            aria-invalid={errors.time ? true : undefined}
            aria-describedby={errors.time ? timeErrorId : undefined}
            className="mt-2 w-full min-h-11 rounded-xl border border-brand-blue/20 bg-cream/40 px-3 py-2 text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
          {errors.time ? (
            <p id={timeErrorId} role="alert" className="mt-1.5 text-sm text-accent">
              {errors.time}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-end-time`} className="block text-sm font-semibold text-brand-blue">
            Hora de fin <span className="font-normal text-brand-blue/55">(opcional)</span>
          </label>
          <input
            id={`${formId}-end-time`}
            name="endTime"
            type="time"
            value={fields.endTime}
            onChange={(e) => handleChange("endTime", e.target.value)}
            className="mt-2 w-full min-h-11 rounded-xl border border-brand-blue/20 bg-cream/40 px-3 py-2 text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-notes`} className="block text-sm font-semibold text-brand-blue">
            Notas <span className="font-normal text-brand-blue/55">(opcional)</span>
          </label>
          <textarea
            id={`${formId}-notes`}
            name="notes"
            rows={3}
            value={fields.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            placeholder="Ej.: somos 2 jugadores, preferimos cancha con iluminación."
            className="mt-2 w-full rounded-xl border border-brand-blue/20 bg-cream/40 px-3 py-2 text-sm text-brand-blue placeholder:text-brand-blue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>
      </div>

      <button type="submit" className="btn-cta min-h-11 w-full text-xs tracking-[0.16em] sm:w-auto">
        Consultar este horario por WhatsApp
      </button>
    </form>
  );
}
