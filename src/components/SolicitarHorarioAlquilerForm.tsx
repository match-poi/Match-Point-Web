"use client";

import { whatsAppAlquilerHorarioUrl } from "@/constants/whatsapp";
import { montevideoCalendarDateIso } from "@/lib/montevideo-date";
import {
  validateAlquilerHorarioFields,
  type AlquilerHorarioFields
} from "@/lib/validate-alquiler-horario";
import { type FormEvent, useEffect, useId, useState } from "react";

type FieldErrors = Partial<Record<keyof AlquilerHorarioFields, string>>;

const emptyFields: AlquilerHorarioFields = {
  date: "",
  time: "",
  endTime: "",
  notes: ""
};

export default function SolicitarHorarioAlquilerForm() {
  const formId = useId();
  const [fields, setFields] = useState<AlquilerHorarioFields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(montevideoCalendarDateIso());
  }, []);

  const handleChange = (key: keyof AlquilerHorarioFields, value: string) => {
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
    const nextErrors = validateAlquilerHorarioFields(fields);

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
  const endTimeErrorId = `${formId}-end-time-error`;
  const formErrorId = `${formId}-form-error`;

  return (
    <form
      id="solicitar-horario"
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-24 space-y-5 rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-sm sm:p-8"
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
            aria-invalid={errors.endTime ? true : undefined}
            aria-describedby={errors.endTime ? endTimeErrorId : undefined}
            className="mt-2 w-full min-h-11 rounded-xl border border-brand-blue/20 bg-cream/40 px-3 py-2 text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
          {errors.endTime ? (
            <p id={endTimeErrorId} role="alert" className="mt-1.5 text-sm text-accent">
              {errors.endTime}
            </p>
          ) : null}
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

      <button type="submit" className="btn-cta-normal min-h-11 w-full sm:w-auto">
        Consultar este horario por WhatsApp
      </button>
    </form>
  );
}
