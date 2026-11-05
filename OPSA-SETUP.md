# OPSA website

The homepage is built from Lumos for Astro components. `/style-guide` retains the original framework guide, and `/example-components` remains available for component reference. Both are excluded from indexing.

## Run locally

- `npm run dev -- --background`
- `npm run astro -- dev status`
- `npm run astro -- dev logs`
- `npm run astro -- dev stop`
- `npm run check` and `npm run build`

## Before launch

Copy `.env.example` to `.env` and supply:

- `PUBLIC_SITE_URL`: the confirmed public origin, such as `https://your-domain.ca`. Until configured, canonical and social image URLs and the sitemap are omitted.
- `PUBLIC_CONTACT_EMAIL`: the public OPSA contact address. When no form endpoint is configured, the membership form prepares an email for the visitor to send.
- `PUBLIC_MEMBERSHIP_ENDPOINT`: optional HTTPS form endpoint accepting multipart form data and returning a successful HTTP status only after accepting the enquiry. Cross-origin endpoints must permit requests from the site's origin. The endpoint takes precedence over email. Configure spam protection and delivery at the provider.

These are public build-time settings, not secrets. Rebuild after changing them. Registration stays disabled until a destination is configured; it never reports a successful submission without one. Email mode opens a draft and tells the visitor to send it, without claiming it has been delivered.

The supplied prototype contained one homepage. Its navigation now leads to real homepage sections. No member names, testimonials, presentation downloads, or contact addresses have been invented. Add approved member profiles and presentation files when available.

## Design

The cascade stays `base → patterns → components → utilities`. OPSA colours and the shared h1/h2 scale live in `src/styles/base.css`. Spacing, radius, and sizing defaults remain from Lumos; heading families are configured centrally. The main page contains no CSS. Small components own the branded image crop, concentric-circle graphic, ruled priority list, and membership panel. Navigation and footer retain the existing global component boundaries.

## Design refinement

The display and heading tokens use locally hosted Manrope Medium; body copy retains Inter. Manrope's OFL license is included beside the font file.

- Buttons retain Lumos's text-driven height and rounded corners. Primary `Button variant="directional"` uses `--space-3` for its leading padding, preserving the existing text-to-arrow gap and trailing arrow inset. It adds a contrasting arrow disc with focus and hover motion; secondary buttons keep the default padding and have no arrow.
- `Card variant="feature"` accepts a `symbol` (`people`, `community`, or `voice`) for the mandate cards.
- `Card variant="statement"` gives short messages a larger type treatment and generous token-based padding.
- `Card variant="profile"` shares the stacked card's visual ratio, spacing, and caption layout. It accepts `image` and `imageAlt`, or shows a decorative portrait placeholder when no image is supplied. Names use the existing h5 style and roles use the small text style. It inherits its section theme. The founding members grid retains eight varied placeholder names and illustrative association roles, with four columns from 64rem, two from 30rem, and one below. A dark-theme example is available at `/example-components#profile-cards`.
- The values section uses the existing `Tabs variant="side"` with manual selection and keyboard navigation. It keeps Lumos's no-JavaScript fallback.
- Navigation marks the visible section with `aria-current="location"`.
- The care diagram has one brief entrance animation and honours reduced-motion preferences.

Design references: [Osmo's directional button](https://www.osmo.supply/resource/button-with-bubble-arrow) and [expanding feature content](https://www.osmo.supply/resource/expanding-feature-pills). The implementation uses Lumos variants and native CSS; no Osmo runtime or animation dependency was added.
