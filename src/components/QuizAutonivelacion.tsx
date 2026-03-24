"use client";

import { useMemo, useState } from "react";

type QuestionOption = {
  label: string;
  value: number;
};

type Question = {
  id: number;
  title: string;
  options: QuestionOption[];
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "¿Cuál es tu experiencia con el tenis?",
    options: [
      { label: "Nunca jugué", value: 0 },
      { label: "Jugué hace mucho", value: 1 },
      { label: "Juego ocasionalmente", value: 2 }
    ]
  },
  {
    id: 2,
    title: "¿Logras mantener un peloteo fluido desde el fondo?",
    options: [
      { label: "No", value: 0 },
      { label: "A veces", value: 1 },
      { label: "Sí, sin problemas", value: 2 }
    ]
  },
  {
    id: 3,
    title: "¿Dominas el saque de arriba y juegas puntos?",
    options: [
      { label: "No", value: 0 },
      { label: "Estoy en eso", value: 1 },
      { label: "Sí, compito socialmente", value: 2 }
    ]
  }
];

function getRecommendedLevel(answers: number[]): string {
  const [q1, q2, q3] = answers;

  if (q1 === 0 && q2 === 0 && q3 === 0) {
    return "Iniciantes";
  }

  if (q3 === 2) {
    return "Intermedio/Avanzado";
  }

  if (q2 === 2 && q3 >= 1) {
    return "Pre-Intermedio";
  }

  if (q2 >= 1 && q3 === 0) {
    return "Principiantes";
  }

  return "Pre-Principiantes";
}

export default function QuizAutonivelacion() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const isCompleted = useMemo(
    () => currentStep >= QUESTIONS.length,
    [currentStep]
  );

  const recommendedLevel = useMemo(() => {
    if (!isCompleted || answers.length !== QUESTIONS.length) return "";
    return getRecommendedLevel(answers);
  }, [answers, isCompleted]);

  const currentQuestion = !isCompleted ? QUESTIONS[currentStep] : null;

  const handleAnswer = (value: number) => {
    const updated = [...answers];
    updated[currentStep] = value;
    setAnswers(updated);
    setCurrentStep((prev) => prev + 1);
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentStep(0);
  };

  const whatsappUrl = useMemo(() => {
    if (!recommendedLevel) return "#";
    const base = "https://wa.me/59898260543";
    const text = encodeURIComponent(
      `Hola MATCH POINT, quiero reservar una clase en el nivel ${recommendedLevel}.`
    );
    return `${base}?text=${text}`;
  }, [recommendedLevel]);

  return (
    <section className="border-t border-white/10 bg-black px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-lime/40 bg-neutral-900/90 p-6 shadow-[0_0_60px_rgba(198,255,0,0.12)] sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
                Quiz de Autonivelación
              </p>
              <h3 className="mt-2 text-xl font-semibold text-pure-white sm:text-2xl">
                Descubre tu punto de partida en MATCH POINT
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/70">
              {!isCompleted ? (
                <>
                  <span className="inline-flex h-7 items-center rounded-full bg-black/60 px-3 font-semibold uppercase tracking-[0.18em] text-white/70">
                    Paso {currentStep + 1} de {QUESTIONS.length}
                  </span>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex h-7 items-center rounded-full border border-white/20 bg-black/60 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-lime hover:text-lime"
                >
                  Rehacer test
                </button>
              )}
            </div>
          </div>

          {!isCompleted && currentQuestion && (
            <div className="space-y-4">
              <p className="text-sm font-medium text-pure-white sm:text-base">
                {currentQuestion.title}
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleAnswer(option.value)}
                    className="rounded-2xl border border-white/18 bg-black/60 px-4 py-3 text-left text-sm text-white/85 transition hover:border-lime hover:bg-lime/5 active:scale-[0.99]"
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-black/60">
                <div
                  className="h-full rounded-full bg-lime transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`
                  }}
                />
              </div>
            </div>
          )}

          {isCompleted && recommendedLevel && (
            <div className="space-y-5">
              <div className="rounded-2xl border border-lime/50 bg-black/70 px-4 py-4 sm:px-6 sm:py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">
                  Resultado
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Tu nivel recomendado es:
                </p>
                <p className="mt-1 text-2xl font-semibold text-lime sm:text-3xl">
                  {recommendedLevel}
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex w-full items-center justify-center rounded-full bg-lime px-8 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-black shadow-[0_0_55px_rgba(198,255,0,0.8)] transition-all duration-200 hover:shadow-[0_0_80px_rgba(198,255,0,1)] hover:translate-y-[1px] active:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="relative text-center">
                  Reservar clase en este nivel
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 blur group-hover:opacity-100" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

