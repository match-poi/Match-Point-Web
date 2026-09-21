"use client";

import {
  clearQuizLevelFromSession,
  saveQuizLevelToSession
} from "@/constants/quiz-session";
import { whatsAppQuizNivelUrl } from "@/constants/whatsapp";
import { useEffect, useMemo, useState } from "react";

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
    title: "¿Lográs mantener un peloteo fluido desde el fondo?",
    options: [
      { label: "No", value: 0 },
      { label: "A veces", value: 1 },
      { label: "Sí, sin problemas", value: 2 }
    ]
  },
  {
    id: 3,
    title: "¿Dominás el saque de arriba y jugás puntos?",
    options: [
      { label: "No", value: 0 },
      { label: "Estoy en eso", value: 1 },
      { label: "Sí, compito socialmente", value: 2 }
    ]
  }
];

function getRecommendedLevel(answers: number[]): string {
  const [q1, q2, q3] = answers;

  if (q1 === 0 && q2 === 0 && q3 === 0) return "Iniciantes";
  if (q3 === 2) return "Intermedio/Avanzado";
  if (q2 === 2 && q3 >= 1) return "Pre-Intermedio";
  if (q2 >= 1 && q3 === 0) return "Principiantes";
  return "Pre-Principiantes";
}

export default function QuizAutonivelacion() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const isCompleted = useMemo(() => currentStep >= QUESTIONS.length, [currentStep]);

  const recommendedLevel = useMemo(() => {
    if (!isCompleted || answers.length !== QUESTIONS.length) return "";
    return getRecommendedLevel(answers);
  }, [answers, isCompleted]);

  useEffect(() => {
    if (recommendedLevel) {
      saveQuizLevelToSession(recommendedLevel);
    }
  }, [recommendedLevel]);

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
    clearQuizLevelFromSession();
  };

  const quizWhatsAppUrl = recommendedLevel
    ? whatsAppQuizNivelUrl(recommendedLevel)
    : "#";

  return (
    <section className="border-t border-brand-blue/10 bg-cream px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-brand-blue/15 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="section-label">Quiz de Autonivelación</p>
              <h3 className="mt-2 text-xl font-semibold text-brand-blue sm:text-2xl">
                Descubrí tu punto de partida en Match Point Club
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-brand-blue/70">
              {!isCompleted ? (
                <span className="inline-flex h-7 items-center rounded-full bg-lime px-3 font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  Paso {currentStep + 1} de {QUESTIONS.length}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex h-7 items-center rounded-full border border-brand-blue/25 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue transition-all duration-200 hover:border-primary hover:bg-lime/50"
                >
                  Rehacer test
                </button>
              )}
            </div>
          </div>

          {!isCompleted && currentQuestion && (
            <div className="space-y-4">
              <p className="text-sm font-medium text-brand-blue sm:text-base">
                {currentQuestion.title}
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleAnswer(option.value)}
                    className="rounded-2xl border border-brand-blue/20 bg-cream px-4 py-3 text-left text-sm text-brand-blue transition-all duration-200 hover:border-primary hover:bg-lime active:scale-[0.99]"
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-cream">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`
                  }}
                />
              </div>
            </div>
          )}

          {isCompleted && recommendedLevel && (
            <div className="space-y-5">
              <div className="rounded-2xl border border-primary/30 bg-lime/40 px-4 py-4 sm:px-6 sm:py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-blue">
                  Resultado
                </p>
                <p className="mt-2 text-sm text-brand-blue/80">Tu nivel recomendado es:</p>
                <p className="mt-1 text-2xl font-semibold text-brand-blue sm:text-3xl">
                  {recommendedLevel}
                </p>
              </div>

              <a
                href={quizWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full text-center text-xs tracking-[0.22em]"
              >
                Consultar grupos para este nivel
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
