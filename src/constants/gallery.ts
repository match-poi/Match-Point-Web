export type GallerySlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Fotos del club — JPEG en public/galeria, largo máx. 1152 px. Orden variado al avanzar slide a slide. */
export const MATCH_POINT_GALLERY: GallerySlide[] = [
  {
    src: "/galeria/galeria-01-vista-aerea-doubles.jpg",
    alt: "Vista aérea de un partido de dobles en cancha de polvo de ladrillo en Match Point",
    width: 1152,
    height: 648
  },
  {
    src: "/galeria/galeria-03-grupo-torneo.jpg",
    alt: "Grupo de jugadores posando en cancha tras un torneo en Match Point",
    width: 864,
    height: 1152
  },
  {
    src: "/galeria/galeria-04-entrenamiento-cancha.jpg",
    alt: "Entrenamiento en cancha entre entrenador y jugador en Match Point",
    width: 864,
    height: 1152
  },
  {
    src: "/galeria/galeria-02-vista-aerea-cancha.jpg",
    alt: "Vista aérea de la cancha de tenis Match Point con entorno verde",
    width: 648,
    height: 1152
  },
  {
    src: "/galeria/galeria-05-entrenador-pelotas.jpg",
    alt: "Entrenador con cesto de pelotas en cancha de polvo de ladrillo",
    width: 864,
    height: 1152
  },
  {
    src: "/galeria/galeria-06-vista-aerea-doubles-head.jpg",
    alt: "Vista aérea vertical de dobles en cancha con cartel HEAD en Match Point",
    width: 648,
    height: 1152
  }
];
