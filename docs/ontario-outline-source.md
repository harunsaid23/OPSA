# Ontario outline

Source: Natural Earth, 1:50m Admin 1 — States and provinces, lakes removed. Public-domain cartographic data.

- Dataset: https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-1-states-provinces/
- GeoJSON: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_1_states_provinces_lakes.geojson
- Feature: Ontario, Canada, CA-ON. Retrieved November 11, 2026.
- Geometry: 13 exterior land polygons, including islands. Inland lake holes omitted for this small illustrative outline.
- Projection: Lambert conformal conic, standard parallels 44°/55° north, origin 49° north / 85° west. Fitted without distortion to a 520 × 480 SVG viewBox with padding; coordinates rounded to two decimals.

Derived paths live in `src/data/ontario-outline.json`. This is an illustrative geographic outline, with no invented member, clinic or service-location markers.

## Direction contract

THESIS: Give the About page's provincial purpose a recognizable geographic form.

OWN-WORLD: Keep OPSA's dark navy hero, sky-blue line and existing typography; use accurate geographic geometry rather than another orbit or an invented map.

STORY: Ontario's outline gradually connects into one complete shape beside “One provincial voice.”

FIRST VIEWPORT: Retain the heading, description and primary action on the left; the province fills the right column. Stack in the same order on mobile.

FORM: User-selected line animation. A quiet underlying silhouette remains visible while a 3.2-second line traces the mainland; islands resolve alongside it. The entrance runs once on first visibility after a page load, with no replay control. Reduced motion shows the completed province immediately and cancels a running trace when the preference changes.

FINISH: Independent visual review, desktop/mobile checks and updated deployment ZIP. This is an extension of the existing system, not a new identity.

## Verification record

The outline uses existing navy/sky tokens and Lumos Heading, Paragraph and ContentWrapper components. Its first-entry trigger, CSS-token timing and reduced-motion cancellation are shared through `src/utils/illustrationMotion.ts`; geometry and source data remain unchanged. The mainland trace uses 3.2 seconds, with the island traces using 1.4 seconds after a 1.6-second delay.

Current checks cover all seven public pages at 1333, 390 and 768 widths, initially and after motion settles, with no overflow or JavaScript errors. New illustrations produce zero active animations under reduced motion. Type checking passed for 69 files with no issues and all 10 production routes built. The full refinement review accepted the Ontario treatment. Its one material finding concerned the separate mission tabs; the subsequent verdict pass scored that fix resolved, with disposition: ship.
