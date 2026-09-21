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
