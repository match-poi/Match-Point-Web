import { HOTEL_DEL_LAGO_TOURNAMENT } from "@/constants/events";
import { SITE_URL, absoluteUrl } from "@/constants/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-09-28"
    },
    {
      url: absoluteUrl(HOTEL_DEL_LAGO_TOURNAMENT.path),
      lastModified: "2026-09-28"
    }
  ];
}
