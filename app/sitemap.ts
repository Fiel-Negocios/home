import type { MetadataRoute } from "next";
import { servedSites, siteUrl } from "@/lib/sites";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return servedSites.map((site) => ({ url: siteUrl(site) }));
}
