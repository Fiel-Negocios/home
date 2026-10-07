import type { MetadataRoute } from "next";
import { sites, siteUrl } from "@/lib/sites";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(sites) as (keyof typeof sites)[])
    .filter((site) => site !== "imoveis")
    .map((site) => ({ url: siteUrl(site) }));
}
