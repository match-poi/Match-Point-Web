import { OPEN_TRAINING_EVENT } from "@/constants/events";
import { SITE_FAQS } from "@/constants/faq";
import { CLUB_INSTAGRAM_REEL_URL } from "@/constants/club";
import {
  CLUB_ADDRESS,
  CLUB_OPENING_HOURS,
  FOUNDER_ID,
  ORGANIZATION_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
  OG_IMAGE_PATH
} from "@/constants/site";
import { WHATSAPP_DISPLAY_NUMBER } from "@/constants/whatsapp";

const LOGO_URL = absoluteUrl("/logo-lockup-green.png");
const OG_URL = absoluteUrl(OG_IMAGE_PATH);
const FOUNDER_PHOTO = absoluteUrl("/mario-tomczuk-presentacion.jpg");

function openingHoursSpecification() {
  return CLUB_OPENING_HOURS.map((block) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...block.dayOfWeek],
    opens: block.opens,
    closes: block.closes
  }));
}

export function buildStructuredDataGraph(): Record<string, unknown> {
  const sameAs = [CLUB_INSTAGRAM_REEL_URL].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "es-UY",
        publisher: { "@id": ORGANIZATION_ID }
      },
      {
        "@type": ["SportsActivityLocation", "LocalBusiness"],
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        telephone: WHATSAPP_DISPLAY_NUMBER,
        image: [OG_URL, FOUNDER_PHOTO],
        logo: LOGO_URL,
        address: {
          "@type": "PostalAddress",
          ...CLUB_ADDRESS,
          addressCountry: "UY"
        },
        openingHoursSpecification: openingHoursSpecification(),
        areaServed: {
          "@type": "City",
          name: "Montevideo",
          addressCountry: "UY"
        },
        founder: { "@id": FOUNDER_ID },
        sameAs
      },
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        name: "Lic. Mario Tomczuk",
        jobTitle: "Fundador y Director",
        worksFor: { "@id": ORGANIZATION_ID },
        image: FOUNDER_PHOTO
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
        mainEntity: SITE_FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      },
      {
        "@type": "Event",
        "@id": `${SITE_URL}#event-entrenamiento-torneos-sociales`,
        name: OPEN_TRAINING_EVENT.name,
        startDate: OPEN_TRAINING_EVENT.startDate,
        duration: `PT${OPEN_TRAINING_EVENT.durationMinutes}M`,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: SITE_NAME,
          address: {
            "@type": "PostalAddress",
            ...CLUB_ADDRESS,
            addressCountry: "UY"
          }
        },
        organizer: { "@id": ORGANIZATION_ID },
        url: `${SITE_URL}#eventos`
      }
    ]
  };
}
