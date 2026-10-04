import { ALQUILER_DE_CANCHA_PATH } from "@/constants/alquiler-de-cancha";
import { CLASES_DE_TENIS_PATH } from "@/constants/clases-de-tenis";
import { HOTEL_DEL_LAGO_TOURNAMENT } from "@/constants/events";
import { SITE_URL, absoluteUrl } from "@/constants/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const LAST_MODIFIED = "2026-10-04";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED
    },
    {
      url: absoluteUrl(CLASES_DE_TENIS_PATH),
      lastModified: LAST_MODIFIED
    },
    {
      url: absoluteUrl(ALQUILER_DE_CANCHA_PATH),
      lastModified: LAST_MODIFIED
    },
    {
      url: absoluteUrl(HOTEL_DEL_LAGO_TOURNAMENT.path),
      lastModified: "2026-09-28"
    }
  ];
}
