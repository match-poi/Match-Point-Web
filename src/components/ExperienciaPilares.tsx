"use client";

import { Building2, Gift, Trophy, UserPlus } from "lucide-react";
import { useId, useState } from "react";

const PILARES = [
  {
    id: "cancha",
    icon: Building2,
    title: "Infraestructura y cancha",
    desc: "Polvo de ladrillo premium, iluminación LED y un espacio listo para entrenar o competir.",
    detail:
      "Contamos con una cancha en Carrasco con superficie de polvo de ladrillo e iluminación para jugar de noche. Un entorno cuidado para entrenar o jugar partidos con otros jugadores. Reservás turno según disponibilidad de alquiler o tu grupo de clases."
  },
  {
    id: "comunidad",
    icon: UserPlus,
    title: "Comunidad y juego",
    desc: "Encontrá rivales de tu nivel, armá partidos y conectá con jugadores activos del club.",
    detail:
      "Comunidad activa, domingos sociales y coordinación por WhatsApp para sumar a la cancha. No venís solo: el club te ayuda a encontrar juego acorde a tu nivel."
  },
  {
    id: "ranking",
    icon: Trophy,
    title: "Torneos y Ranking MP",
    desc: "Competí en torneos internos y sumá puntos en el ranking oficial del club.",
    detail:
      "Calendario de torneos internos y fechas del Ranking MP por categoría. Medís tu progreso, competís con regularidad y cerrás el año con instancias especiales para la comunidad del club."
  },
  {
    id: "ventajas",
    icon: Gift,
    title: "Ventajas del club",
    desc: "Alquiler de raquetas y pelotas, promos puntuales y beneficios para quienes entrenan en Match Point.",
    detail:
      "Acceso a alquiler de raquetas y pelotas en el club, promos de equipamiento y ventajas para la comunidad activa. Consultá en recepción o por WhatsApp qué hay disponible esta temporada."
  }
] as const;

export default function ExperienciaPilares() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PILARES.map((item) => {
        const Icon = item.icon;
        const isOpen = openId === item.id;
        const panelId = `${baseId}-pilar-${item.id}`;
        const buttonId = `${baseId}-pilar-btn-${item.id}`;

        return (
          <button
            key={item.id}
            id={buttonId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className={`card-light group flex w-full flex-col text-left transition-all duration-200 hover:border-primary hover:shadow-md ${
              isOpen ? "border-primary ring-1 ring-primary/25" : ""
            }`}
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-brand-blue">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-brand-blue">{item.title}</h3>
            <p className="mt-2 text-sm text-brand-blue/70">{item.desc}</p>
            {isOpen ? (
              <p
                id={panelId}
                className="mt-4 border-t border-brand-blue/10 pt-4 text-sm leading-relaxed text-brand-blue/80"
              >
                {item.detail}
              </p>
            ) : null}
            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {isOpen ? "Ocultar detalle ↑" : "Ampliar detalle →"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
