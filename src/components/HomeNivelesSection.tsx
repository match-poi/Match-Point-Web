import { HOME_NIVELES } from "@/constants/home";
import { WHATSAPP_CONSULTAR_CUPOS_URL } from "@/constants/whatsapp";

export default function HomeNivelesSection() {
  return (
    <section
      id="niveles"
      className="relative z-10 scroll-mt-24 border-t border-brand-blue/10 bg-cream px-6 py-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl space-y-4">
          <p className="section-label">{HOME_NIVELES.eyebrow}</p>
          <h2 className="text-3xl font-semibold text-brand-blue md:text-4xl">
            {HOME_NIVELES.titleLead}{" "}
            <span className="text-primary">{HOME_NIVELES.titleAccent}</span>
          </h2>
          <p className="text-sm leading-relaxed text-brand-blue/75 sm:text-base">
            {HOME_NIVELES.intro}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {HOME_NIVELES.levels.map((level, index) => (
            <article
              key={level.id}
              className={`rounded-2xl border px-5 py-6 transition-all duration-200 ${
                index === 0
                  ? "border-2 border-primary bg-lime shadow-sm"
                  : "border-brand-blue/20 bg-white hover:border-primary hover:bg-lime/40"
              }`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                {level.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-blue/80">{level.description}</p>
            </article>
          ))}
        </div>

        <div className="relative z-20 mt-10 flex flex-wrap justify-center gap-3">
          <a href="#quiz-nivel" className="btn-secondary text-xs tracking-[0.22em]">
            Hacer quiz orientativo
          </a>
          <a
            href={WHATSAPP_CONSULTAR_CUPOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-normal text-xs"
          >
            Consultar cupos
          </a>
        </div>
      </div>
    </section>
  );
}
