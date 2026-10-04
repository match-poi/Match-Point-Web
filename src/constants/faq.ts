export type FaqItem = {
  question: string;
  answer: string;
};

/** FAQ visible en la home — debe coincidir con JSON-LD FAQPage. */
export const SITE_FAQS: FaqItem[] = [
  {
    question: "¿Qué pasa si llueve?",
    answer:
      "Si el clima no acompaña, movemos la actividad o la reprogramamos. Te avisamos con tiempo por WhatsApp para que no vengas al club de más."
  },
  {
    question: "¿Tengo que traer raqueta?",
    answer:
      "No hace falta al principio. En Match Point te prestamos raqueta para tus clases mientras arrancás — sin costo extra."
  },
  {
    question: "¿Cómo recupero una clase?",
    answer:
      "Con 24 horas de aviso podés reprogramar. Así cuidamos la dinámica de cada grupo y el respeto entre jugadores."
  },
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
    question: "¿Cómo funcionan las cuponeras de clases particulares?",
    answer:
      "Podés comprar paquetes de 4 u 8 clases con descuento sobre la clase suelta. Las cuponeras de 4 y 8 clases tienen vigencia de 1 mes desde la primera clase coordinada."
  },
  {
    question: "¿Hay estacionamiento?",
    answer:
      "Es en la calle, en una zona tranquila de Carrasco. Casi siempre hay lugar y la cancha queda a la vista."
  },
  {
    question: "¿Puedo empezar sin haber jugado nunca?",
    answer:
      "Sí, y es lo nuestro. El nivel Iniciantes está pensado para quien agarra la raqueta por primera vez: agarre, peloteo y tus primeros partidos con confianza."
  }
];
