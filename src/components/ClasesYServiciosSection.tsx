"use client";

import {
  WHATSAPP_ALQUILER_CANCHA_URL,
  WHATSAPP_CLASES_PARTICULARES_URL,
  whatsAppGruposFijosUrl
} from "@/constants/whatsapp";
import {
  QUIZ_LEVEL_SESSION_KEY,
  QUIZ_LEVEL_UPDATED_EVENT,
  readQuizLevelFromSession
} from "@/constants/quiz-session";
import { useSyncExternalStore } from "react";

function subscribeQuizLevel(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === null || e.key === QUIZ_LEVEL_SESSION_KEY) onStoreChange();
  };
  window.addEventListener(QUIZ_LEVEL_UPDATED_EVENT, onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(QUIZ_LEVEL_UPDATED_EVENT, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getQuizLevelSnapshot(): string | null {
  return readQuizLevelFromSession();
}

function getQuizLevelServerSnapshot(): string | null {
  return null;
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-blue/80">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ClasesYServiciosSection() {
  const quizLevel = useSyncExternalStore(
    subscribeQuizLevel,
    getQuizLevelSnapshot,
    getQuizLevelServerSnapshot
  );

  const gruposUrl = whatsAppGruposFijosUrl(quizLevel);

  return (
    <section
      id="servicios"
      className="relative z-10 border-t border-primary/20 bg-primary px-6 py-20 scroll-mt-24"
      aria-labelledby="servicios-heading"
    >
      <div id="membresias" className="scroll-mt-24" aria-hidden="true" tabIndex={-1} />

      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-1/4 h-64 w-64 rounded-full bg-cream/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
              Clases y servicios
            </p>
            <h2
              id="servicios-heading"
              className="mt-3 text-3xl font-semibold text-cream md:text-4xl"
            >
              Elegí cómo querés{" "}
              <span className="text-lime">jugar en Match Point</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-cream/80">
            Entrená en un grupo fijo, reservá la cancha o tomá clases particulares adaptadas a tus
            objetivos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="card-light flex h-full flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue/60">
              Grupos fijos
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-blue">Entrená todas las semanas</h3>
            <p className="mt-2 text-sm text-brand-blue/70">
              Sumate a un grupo estable de jugadores de tu nivel y entrená semanalmente con
              continuidad.
            </p>
            <FeatureList
              items={[
                "Grupos de hasta 4 personas.",
                "Frecuencia de 1, 2 o 3 veces por semana.",
                "Día y horario fijo.",
                "Organización por nivel.",
                "Materiales incluidos.",
                "Acceso a la comunidad Match Point."
              ]}
            />
            <a
              href={gruposUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 w-full text-center text-xs tracking-[0.16em]"
            >
              Consultar grupos con cupo
            </a>
          </article>

          <article className="card-light flex h-full flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue/60">
              Clases particulares
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-blue">Entrenamiento personalizado</h3>
            <p className="mt-2 text-sm text-brand-blue/70">
              Trabajá tus objetivos con una clase adaptada a tu nivel, ritmo y necesidades.
            </p>
            <FeatureList
              items={[
                "Clases para 1 o 2 personas.",
                "Trabajo técnico y táctico personalizado.",
                "Clases sueltas.",
                "Cuponera de 4 clases.",
                "Cuponera de 8 clases.",
                "Coordinación según disponibilidad."
              ]}
            />
            <a
              href={WHATSAPP_CLASES_PARTICULARES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-6 w-full text-center text-xs tracking-[0.16em]"
            >
              Consultar clases particulares
            </a>
          </article>

          <article className="card-light flex h-full flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue/60">
              Alquiler de cancha
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-blue">Reservá tu turno</h3>
            <p className="mt-2 text-sm text-brand-blue/70">
              Jugá por tu cuenta en nuestra cancha de polvo de ladrillo en Carrasco.
            </p>
            <FeatureList
              items={[
                "Disponible para alumnos y no alumnos.",
                "Cancha de polvo de ladrillo.",
                "Iluminación para horarios nocturnos.",
                "Reserva previa.",
                "Tarifas diferenciadas para alumnos.",
                "Ubicación en Carrasco."
              ]}
            />
            <a
              href={WHATSAPP_ALQUILER_CANCHA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 w-full text-center text-xs tracking-[0.16em]"
            >
              Consultar disponibilidad
            </a>
          </article>
        </div>

        <div className="mt-14">
          <article className="relative overflow-hidden rounded-2xl border border-accent/40 bg-accent p-6 shadow-md">
            <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex-1 space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/90">
                  Beneficio exclusivo para la comunidad Match Point
                </p>
                <p className="text-sm text-cream">
                  <span className="font-semibold text-lime">10% OFF</span> en Top Ten con el código{" "}
                  <span className="font-semibold">MATCHPOINT</span>.
                </p>
              </div>
              <div className="inline-flex flex-col gap-1 rounded-2xl bg-lime px-5 py-3 text-center shadow-sm">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-blue/70">
                  Código
                </span>
                <span className="text-lg font-extrabold tracking-[0.3em] text-brand-blue">
                  MATCHPOINT
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
