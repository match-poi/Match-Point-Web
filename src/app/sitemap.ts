import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

export const dynamic = "force-static";

/** Una sola URL indexable hoy; ampliar cuando haya más rutas. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-09-20"
    }
  ];
}
