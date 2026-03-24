"use client";

import { CircleDot } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "¿Qué sucede si llueve?",
    answer:
      "En caso de lluvia, las clases se suspenden y se reprograman. Avisamos siempre con al menos una hora de antelación vía WhatsApp."
  },
  {
    question: "¿Necesito llevar mi propia raqueta?",
    answer:
      "¡No es necesario! Si estás dando tus primeros pasos, en MATCH POINT te prestamos la raqueta para tus clases sin costo adicional."
  },
  {
    question: "¿Cómo se cancela o recupera una clase?",
    answer:
      "Para recuperar una clase, pedimos avisar con 24 horas de anticipación. Así mantenemos la dinámica de los grupos organizada."
  },
  {
    question: "¿Hay estacionamiento en el predio?",
    answer:
      "El estacionamiento es sobre la calle, pero es una zona muy tranquila: casi siempre hay lugar libre y los autos quedan estacionados a la vista de las canchas."
  },
  {
    question: "¿Puedo empezar de cero absoluto?",
    answer:
      '¡Totalmente! Nuestra especialidad es el nivel "Iniciantes". Te enseñamos desde cómo agarrar la raqueta hasta tus primeros partidos.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="border-t border-white/10 bg-black px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-pure-white md:text-4xl">
            Despeja tus dudas
          </h2>
          <p className="text-sm text-white/70">
            Las preguntas que más recibimos de jugadores que están a punto de entrar a la pista.
          </p>
        </header>

        <div className="space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#121212]"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-transparent transition-all duration-200 ${
                      isOpen
                        ? "border-lime bg-lime/10 text-lime rotate-[-18deg]"
                        : "border-white/20 bg-black/40 text-white/40"
                    }`}
                  >
                    <CircleDot className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-pure-white sm:text-base">
                    {item.question}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden border-t border-lime/30 px-4 pb-4 pt-2 text-sm text-white/75 sm:px-5 sm:pb-5">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/59898260543?text=Hola%20MATCH%20POINT%2C%20todav%C3%ADa%20tengo%20algunas%20dudas%20y%20me%20gustar%C3%ADa%20chatear."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-lime hover:text-lime"
          >
            ¿Todavía tienes dudas? Chatea con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}

