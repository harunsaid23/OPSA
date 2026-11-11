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
export const CONTACT_EMAIL =
  import.meta.env.PUBLIC_CONTACT_EMAIL || "piranizameer@gmail.com";
/** Form endpoint accepting multipart form data. */
export const MEMBERSHIP_ENDPOINT =
  import.meta.env.PUBLIC_MEMBERSHIP_ENDPOINT || "";
export const CONTACT_PHONE = "519-851-4595";
export const CONTACT_PHONE_HREF = "tel:+15198514595";
export const LETTER_PDF = "/assets/OPSA-Letter-to-Physician-Colleagues.pdf";
export const EMAIL_DRAFT_MESSAGE =
  "Your email app should open with your answers. Press Send there to complete your request. If it does not open, email piranizameer@gmail.com directly. Nothing has been sent by this website.";
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Pain care", href: "/pain-care/" },
  { label: "Membership", href: "/membership/" },
  { label: "Patient voices", href: "/patient-voices/" },
  { label: "Presentations", href: "/presentations/" },
  { label: "Contact", href: "/contact/" },
];
export const FOOTER_LINKS = [
  ...NAV_LINKS.slice(1, 4),
  { label: "Letter to physicians", href: "/membership/#letter" },
  ...NAV_LINKS.slice(4),
];
