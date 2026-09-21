"use client";

import { Building2, Gift, Trophy, UserPlus } from "lucide-react";
import { useState } from "react";

const PILARES = [
  {
    id: "cancha",
    icon: Building2,
    title: "Infraestructura y cancha",
    desc: "Polvo de ladrillo premium, iluminación LED y un espacio listo para entrenar o competir.",
    detail:
      "Contamos con una cancha en Carrasco con superficie de polvo de ladrillo e iluminación para jugar de noche. Un entorno cuidado para entrenar o jugar partidos con socios. Reservás turno desde el club según tu plan."
  },
  {
    id: "comunidad",
    icon: UserPlus,
    title: "Comunidad y juego",
    desc: "Encontrá rivales de tu nivel, armá partidos y conectá con socios activos del club.",
    detail:
      "Grupo de socios activo, domingos sociales y coordinación por WhatsApp para sumar a la cancha. No venís solo: el club te ayuda a encontrar juego acorde a tu nivel."
  },
  {
    id: "ranking",
    icon: Trophy,
    title: "Torneos y Ranking MP",
    desc: "Competí en torneos internos y sumá puntos en el ranking oficial del club.",
    detail:
      "Calendario de torneos internos y fechas del Ranking MP por categoría. Medís tu progreso, competís con regularidad y cerrás el año con instancias especiales para socios."
  },
  {
    id: "ventajas",
    icon: Gift,
    title: "Ventajas Exclusivas & Pro-Shop",
    desc: "10% OFF en Top Ten con código MATCHPOINT, alquiler de equipamiento y beneficios de socio.",
    detail:
      "Beneficios reales de socio: descuento en Top Ten con el código MATCHPOINT, acceso a alquiler de raquetas y pelotas, y promos puntuales del club en equipamiento."
  }
] as const;

export default function ExperienciaPilares() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PILARES.map((item) => {
        const Icon = item.icon;
        const isOpen = openId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            aria-expanded={isOpen}
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
              <p className="mt-4 border-t border-brand-blue/10 pt-4 text-sm leading-relaxed text-brand-blue/80">
                {item.detail}
              </p>
            ) : null}
            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {isOpen ? "Cerrar ↑" : "Ver más →"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
