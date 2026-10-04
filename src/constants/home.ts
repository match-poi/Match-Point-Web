import { HOTEL_DEL_LAGO_TOURNAMENT } from "@/constants/events";

export const HOME_HERO = {
  title: "Tu club de tenis en Carrasco",
  description:
    "Clases grupales, clases particulares y alquiler de cancha en Montevideo. Entrená, competí y compartí el tenis en una comunidad para todos los niveles.",
  primaryCtaLabel: "Consultar por clases",
  secondaryCtaLabel: "Ver clases y servicios",
  secondaryCtaHref: "/#servicios",
  highlights: [
    "Grupos de hasta 4",
    "Todos los niveles",
    "Cancha de polvo de ladrillo"
  ] as const
} as const;

export const HOME_ACCESOS = [
  {
    id: "clases",
    title: "Clases de tenis",
    description: "Grupos fijos y clases particulares para todos los niveles.",
    href: "/#servicios"
  },
  {
    id: "alquiler",
    title: "Alquiler de cancha",
    description: "Reservá turno en nuestra cancha de polvo de ladrillo en Carrasco.",
    href: "/#alquiler"
  },
  {
    id: "torneo",
    title: "Torneo Match Point",
    description: "Hotel del Lago, Punta del Este — inscripciones y programa del fin de semana.",
    href: HOTEL_DEL_LAGO_TOURNAMENT.path
  }
] as const;
