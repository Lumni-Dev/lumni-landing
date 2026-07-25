import type { MetadataRoute } from "next";

import { LOCALES, localePath, SITE_URL } from "@/i18n/config";

const ROUTES = ["/", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) => {
    const languages = {
      ...Object.fromEntries(
        LOCALES.map((locale) => [locale.hreflang, `${SITE_URL}${localePath(locale.code, route)}`]),
      ),
      "x-default": `${SITE_URL}${route === "/" ? "" : route}`,
    };

    return LOCALES.map((locale) => ({
      url: `${SITE_URL}${localePath(locale.code, route)}`,
      lastModified: new Date(),
      alternates: { languages },
    }));
  });
}
