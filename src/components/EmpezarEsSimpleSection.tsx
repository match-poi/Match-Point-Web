import { HOME_EMPEZAR_SIMPLE } from "@/constants/home";
import { WHATSAPP_QUIERO_EMPEZAR_URL } from "@/constants/whatsapp";

export default function EmpezarEsSimpleSection() {
  return (
    <section
      className="relative z-10 border-t border-brand-blue/10 bg-cream px-6 py-14 sm:py-16"
      aria-labelledby="empezar-es-simple-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="section-label">Primeros pasos</p>
          <h2
            id="empezar-es-simple-heading"
            className="mt-2 text-2xl font-semibold text-brand-blue sm:text-3xl"
          >
            {HOME_EMPEZAR_SIMPLE.title}
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-brand-blue/80 sm:text-base">
            {HOME_EMPEZAR_SIMPLE.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_QUIERO_EMPEZAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-normal mt-8 inline-flex w-full sm:w-auto"
          >
            {HOME_EMPEZAR_SIMPLE.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
