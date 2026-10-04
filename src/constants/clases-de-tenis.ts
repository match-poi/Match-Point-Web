import type { FaqItem } from "@/constants/faq";

export const CLASES_DE_TENIS_PATH = "/clases-de-tenis/" as const;

export const CLASES_DE_TENIS_PAGE = {
  path: CLASES_DE_TENIS_PATH,
  metaTitle: "Clases de tenis en Carrasco",
  metaDescription:
    "Clases grupales y particulares en Match Point, Carrasco. Niños, adolescentes y adultos, todos los niveles. Precios en UYU y cuponeras mensuales.",
  h1: "Clases de tenis en Carrasco",
  intro:
    "En Match Point entrenamos niños, adolescentes y adultos en todos los niveles. Podés sumarte a un grupo fijo semanal o coordinar clases particulares individuales o para dos personas, siempre con un profesor del club.",
  comparison: {
    title: "Grupales o particulares: ¿cuál te conviene?",
    grupales: {
      heading: "Clases grupales",
      points: [
        "Grupos fijos de hasta 4 personas.",
        "Plan mensual: 1 o 2 clases por semana.",
        "Ideal para constancia, compañerismo y juego en equipo.",
        "Cupos y horarios a confirmar por WhatsApp."
      ]
    },
    particulares: {
      heading: "Clases particulares",
      points: [
        "Individual o para 2 personas (precio total para ambos).",
        "Clase suelta o cuponeras de 4 u 8 clases con descuento.",
        "Enfoque personalizado según tus objetivos.",
        "Horarios a coordinar con el profesor."
      ]
    }
  },
  steps: {
    title: "Cómo empezar",
    items: [
      "Escribinos por WhatsApp contando si buscás grupo fijo o clase particular.",
      "Hacé el quiz de nivel en esta página (orientativo) o contanos tu experiencia.",
      "Un profesor confirma tu nivel, cupos y horarios antes de tu primera clase."
    ]
  },
  galleryHeading: "Entrenamiento en la cancha",
  quizCta:
    "¿No estás seguro de tu nivel? Hacé el quiz orientativo más abajo y un profesor lo confirma antes de asignarte un grupo."
} as const;

/** FAQ solo de esta página (duración, edades, niveles, cuponeras). */
export const CLASES_DE_TENIS_FAQS: FaqItem[] = [
  {
    question: "¿Cuánto duran las clases?",
    answer:
      "Las clases grupales y particulares son de 1 hora. En particulares, la duración puede adaptarse previa coordinación con el profesor."
  },
  {
    question: "¿Hay clases para niños y adultos?",
    answer:
      "Sí. Trabajamos con niños, adolescentes y adultos en grupos fijos y clases particulares, según cupos y horarios disponibles."
  },
  {
    question: "¿Qué niveles aceptan?",
    answer:
      "Todos los niveles, desde quien nunca tomó una raqueta hasta jugadores avanzados. El quiz de esta página es orientativo; un profesor confirma tu nivel antes de ubicarte en un grupo."
  },
  {
    question: "¿Cómo funcionan las cuponeras de clases particulares?",
    answer:
      "Podés comprar paquetes de 4 u 8 clases con descuento sobre la clase suelta. Las cuponeras de 4 y 8 clases tienen vigencia de 1 mes desde la primera clase coordinada."
  }
];
