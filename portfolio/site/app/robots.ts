import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://brunorafael-portfolio-next3d.vercel.app/sitemap.xml",
  };
}
