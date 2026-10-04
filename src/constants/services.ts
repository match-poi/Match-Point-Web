/** Precios y copy de la sección Clases y servicios (home). Montos en UYU. */

export const SERVICES_UYU_DISCLAIMER =
  "Precios en pesos uruguayos (UYU). Sujetos a confirmación al consultar." as const;

export const CLASES_GRUPALES = {
  eyebrow: "Clases grupales",
  title: "Grupos fijos",
  duration: "1 hora · hasta 4 personas por grupo",
  plans: [
    { label: "1 vez por semana", amount: "$1.900", suffix: "/mes" },
    { label: "2 veces por semana", amount: "$3.500", suffix: "/mes" }
  ],
  details: [
    "Niños, adolescentes y adultos.",
    "Todos los niveles.",
    "Disponibilidad de grupos y horarios a consultar."
  ],
  ctaLabel: "Consultar por un grupo"
} as const;

export const CLASES_PARTICULARES_CUPONERAS_VIGENCIA =
  "Las cuponeras de 4 y 8 clases tienen una vigencia de 1 mes." as const;

export const CLASES_PARTICULARES = {
  eyebrow: "Clases particulares",
  title: "A tu medida",
  duration:
    "Individuales o para 2 personas. Clases de 1 hora, con duración adaptable previa coordinación.",
  individual: {
    heading: "Individual",
    tiers: [
      { label: "Clase suelta", amount: "$1.400" },
      { label: "4 clases", amount: "$5.040", note: "total · 10% de descuento" },
      { label: "8 clases", amount: "$9.520", note: "total · 15% de descuento" }
    ]
  },
  duo: {
    heading: "Para 2 personas",
    priceNote: "Precio total para las dos personas",
    tiers: [
      { label: "Clase suelta", amount: "$1.600", note: "total" },
      { label: "4 clases", amount: "$5.760", note: "total · 10% de descuento" },
      { label: "8 clases", amount: "$10.880", note: "total · 15% de descuento" }
    ]
  },
  ctaLabel: "Coordinar una clase"
} as const;

export const ALQUILER_CANCHA = {
  eyebrow: "Alquiler",
  title: "Reservá la cancha",
  duration: "Desde 1 hora · polvo de ladrillo e iluminación",
  rates: [
    { label: "1 hora sin iluminación", amount: "$850" },
    { label: "1 hora con iluminación", amount: "$900" }
  ],
  details: ["Disponibilidad a consultar."],
  ctaLabel: "Consultar disponibilidad"
} as const;
