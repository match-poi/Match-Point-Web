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
  ] as const,
  image: {
    src: "/galeria/galeria-04-entrenamiento-cancha.jpg",
    alt: "Entrenamiento de tenis en la cancha de polvo de ladrillo de Match Point, Carrasco",
    width: 1200,
    height: 900
  }
} as const;

export const HOME_ACCESOS = [
  {
    id: "clases",
    title: "Clases de tenis",
    description: "Grupos fijos y clases particulares para todos los niveles.",
    href: "/clases-de-tenis/",
    ctaLabel: "Ver clases"
  },
  {
    id: "alquiler",
    title: "Alquiler de cancha",
    description: "Reservá turno en nuestra cancha de polvo de ladrillo en Carrasco.",
    href: "/alquiler-de-cancha/",
    ctaLabel: "Ver alquiler"
  },
  {
    id: "torneo",
    title: "Torneo Match Point",
    description: "Hotel del Lago, Punta del Este — inscripciones y programa del fin de semana.",
    href: HOTEL_DEL_LAGO_TOURNAMENT.path,
    ctaLabel: "Ver torneo"
  }
] as const;

export const HOME_EMPEZAR_SIMPLE = {
  title: "Empezar es simple",
  bullets: [
    "Escribinos por WhatsApp y contanos si buscás clases grupales, particulares o alquiler.",
    "Te orientamos con el nivel (podés hacer el quiz en esta página) y un profesor confirma tu grupo.",
    "Coordinamos horarios, cupos y tu primera experiencia en la cancha."
  ],
  ctaLabel: "Quiero empezar"
} as const;

export const HOME_CLUB = {
  eyebrow: "El club",
  title: "Un lugar para entrenar, jugar y compartir",
  intro:
    "Cancha de polvo de ladrillo en Carrasco, comunidad activa y propuestas para entrenar, competir y disfrutar el tenis. Tocá cada pilar para ampliar el detalle.",
  essentials: [
    { label: "Dirección", value: "Potosí 1657 · Carrasco · Montevideo" },
    {
      label: "Horario",
      value: "Lun–Vie 08:00–22:00 · Sáb 09:00–18:00"
    },
    { label: "Superficie", value: "Polvo de ladrillo · iluminación nocturna" }
  ] as const
} as const;

export const HOME_NIVELES = {
  eyebrow: "Tu camino al éxito",
  titleLead: "Niveles pensados para",
  titleAccent: "acompañar cada etapa",
  intro:
    "Desde tu primer contacto con la raqueta hasta el alto rendimiento. El quiz de abajo es orientativo: un profesor del club confirma tu nivel antes de asignarte un grupo.",
  levels: [
    {
      id: "iniciantes",
      name: "Iniciantes",
      description: "Tu punto de partida. Cero conocimiento, máxima motivación."
    },
    {
      id: "pre-principiantes",
      name: "Pre-Principiantes",
      description:
        "Refinando el golpe. Para quienes juegan social pero buscan consistencia en el peloteo."
    },
    {
      id: "principiantes",
      name: "Principiantes",
      description: "Entrando al juego. Ya mantenés el peloteo, jugás puntos y dominás el saque."
    },
    {
      id: "pre-intermedio",
      name: "Pre-Intermedio",
      description: "Sintiendo la red. Dominio de voleas y listo para la competición social."
    },
    {
      id: "intermedio-avanzado",
      name: "Intermedio / Avanzado",
      description: "Alto rendimiento. Perfeccionamiento técnico y competición regular."
    }
  ] as const
} as const;

export const HOME_FOUNDER = {
  badge: "Fundador & Director",
  headline: "Lic. Mario Tomczuk",
  certification: "Certificación ITF Nivel 1 · 2026",
  lead:
    "Entrenador y fundador de Match Point Club. Creé este espacio para que el tenis sea técnica y pertenencia: entrenás, competís y crecés con otros jugadores en Carrasco.",
  professional:
    "Formación en tenis y educación física, años entrenando desde iniciantes hasta competidores, y dirección técnica del club — clínica, planificación y cultura de equipo.",
  mission: "Acercar tenis de calidad a todos los niveles, con método y calidez.",
  vision: "Ser referencia en Montevideo por comunidad, formación y competencia.",
  values: "Respeto, constancia, juego limpio y espíritu de club."
} as const;

export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Match+Point+Potosi+1657+Montevideo+Uruguay" as const;
