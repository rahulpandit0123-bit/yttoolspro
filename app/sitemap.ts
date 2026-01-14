import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (SITE.url || "https://yttoolspro.vercel.app").replace(/\/$/, "");
  const now = new Date();

  const routes = [
    "/",
    "/tools",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/tools/youtube-thumbnail",
    "/tools/youtube-embed",
    "/tools/youtube-timestamp",
    "/tools/youtube-hashtag",
    "/tools/youtube-title",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: path === "/" ? 1 : 0.7,
  }));
}
