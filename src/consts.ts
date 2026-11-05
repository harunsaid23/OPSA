/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "OPSA · Ontario Pain Specialist Association";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "A community-driven voice for Ontario pain specialists, patients and caregivers. Help build a connected future for pain care in Ontario.";
/** Canonical origin. Set PUBLIC_SITE_URL to the production domain. */
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || undefined;
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-CA";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  "/style-guide",
  "/example-components",
];
/** Public contact address. */
export const CONTACT_EMAIL = import.meta.env.PUBLIC_CONTACT_EMAIL || "";
/** Form endpoint accepting multipart form data. */
export const MEMBERSHIP_ENDPOINT =
  import.meta.env.PUBLIC_MEMBERSHIP_ENDPOINT || "";
export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Pain care", href: "/#pain-care" },
  { label: "Patient voices", href: "/#patient-voices" },
  { label: "Presentations", href: "/#presentations" },
  { label: "Contact", href: "/#contact" },
];
