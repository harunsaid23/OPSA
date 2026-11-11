# OPSA website

The seven public pages are built from Lumos for Astro components. `/style-guide` retains the original framework guide, and `/example-components` remains available for component reference. Both are excluded from indexing.

## Run locally

- `npm run dev -- --background`
- `npm run astro -- dev status`
- `npm run astro -- dev logs`
- `npm run astro -- dev stop`
- `npm run check` and `npm run build`

## Before launch

## Sharing and deployment

- Source repository: https://github.com/harunsaid23/OPSA
- Shareable site: https://opsa.pages.dev
- Cloudflare Pages project: `opsa`, deployed with Direct Upload. GitHub pushes do not automatically deploy.
- To update the live site, run `npm ci`, `npm run build`, and `node scripts/embed-artwork-provenance.mjs`, then upload the contents of `dist/` as a new production deployment in Cloudflare Pages. Run the provenance command after every build and before packaging: Astro's image optimization strips source metadata. `.nvmrc` pins the supported Node version.

## Production settings

Copy `.env.example` to `.env` and supply:

- `PUBLIC_SITE_URL`: the confirmed public origin, such as `https://your-domain.ca`. Until configured, canonical and social image URLs and the sitemap are omitted.
- `PUBLIC_CONTACT_EMAIL`: the public OPSA contact address. When no form endpoint is configured, the membership form prepares an email for the visitor to send.
- `PUBLIC_MEMBERSHIP_ENDPOINT`: optional HTTPS form endpoint accepting multipart form data and returning a successful HTTP status only after accepting the enquiry. Cross-origin endpoints must permit requests from the site's origin. The endpoint takes precedence over email. Configure spam protection and delivery at the provider.

These are public build-time settings, not secrets. Rebuild after changing them. The default contact address is piranizameer@gmail.com, so all five forms work as email drafts without additional setup. Email mode opens a draft and tells the visitor to send it, without claiming it has been delivered.

The public pages are Home, About, Pain care, Membership, Patient voices, Presentations and Contact. The physician letter is part of Membership, with the revised PDF in `public/assets/`. No placeholder members, testimonials, evidence statistics or presentation availability are published. See `docs/website-change-checklist.md` for the implementation audit and outstanding release decisions.

## Design

The cascade stays `base → patterns → components → utilities`. OPSA colours and the shared h1/h2 scale live in `src/styles/base.css`. Spacing, radius, and sizing defaults remain from Lumos; heading families are configured centrally. The main page contains no CSS. Small components own the branded image crop, concentric-circle graphic, ruled priority list, and membership panel. Navigation and footer retain the existing global component boundaries.

## Design refinement

The display and heading tokens use locally hosted Manrope Medium; body copy retains Inter. Manrope's OFL license is included beside the font file.

- Buttons retain Lumos's text-driven height and rounded corners. Primary `Button variant="directional"` uses `--space-3` for its leading padding, preserving the existing text-to-arrow gap and trailing arrow inset. It adds a contrasting arrow disc with focus and hover motion; secondary buttons keep the default padding and have no arrow.
- `Card variant="feature"` accepts a `symbol` (`people`, `community`, or `voice`) for the mandate cards.
- `Card variant="statement"` gives short messages a larger type treatment and generous token-based padding.
- `Card variant="profile"` shares the stacked card's visual ratio, spacing, and caption layout. It accepts `image` and `imageAlt`, or shows a decorative portrait placeholder when no image is supplied. Names use the existing h5 style and roles use the small text style. It inherits its section theme. The public founding members section has been removed. A dark-theme example is available at `/example-components#profile-cards`.
- About presents six values as `Card variant="feature"` items with icons. “Evidence-informed care” draws on existing advocacy wording; the shared values data also supplies the sixth Home value and its “Six shared values” count.
- Navigation marks the current page with `aria-current="page"`.
- The homepage care diagram draws a complete ring on page load using the original 1.4-second entrance timing, then shows the complete ring at rest. Hovering a label or dot moves a highlighted arc to that node using the same 1.4-second timing and easing as the entrance. Keyboard focus and touch are supported; keyboard and reduced-motion interaction avoid the sweep.

Design references: [Osmo's directional button](https://www.osmo.supply/resource/button-with-bubble-arrow) and [expanding feature content](https://www.osmo.supply/resource/expanding-feature-pills). The implementation uses Lumos variants and native CSS; no Osmo runtime or animation dependency was added.

Standalone forms default to the contrasting white `Form` panel, with existing pale-blue Lumos fields. Membership forms opt out of the extra panel because their wrapper already supplies a white surface. The header logo is 10rem wide and Home is the first main-navigation link.

All two-column form sections use Lumos `ContentWrapper variant="sticky-content"`: copy starts at the top and remains below the header while the form scrolls. Mobile retains the library’s stacked layout.

Text measures use component props and shared utilities; the footer retains its established description width. The Membership letter and fee appendix now share the narrower `--max-width-reading` container (56rem), applied through `max-width-reading` on the letter section; their content remains aligned.

Card surfaces use the shared `--card-background` theme token. The `background-2` utility supplies the primary surface for nested cards, giving white cards on pale-blue sections. Solid cards carry a subtle border; stacked/profile variants retain their unboxed treatment. Explicit color themes reset the token with their own palette.

## Page artwork

- `CareLayers.astro` pairs the Pain care hero with a compact SVG person, four distinct care symbols and curved branches. A one-time 1.4-second trace introduces it. The rehabilitation symbol is an outlined heart matching the other care symbols. Shared `Button variant="choice"` controls provide rounded, filled hover/selected states; hover, focus and tap reveal each contribution’s detail, tap toggles selection and Escape clears it. Reduced motion keeps the response static.
- `GrowingFoundation.astro` adds a nine-piece assembly to the Membership hero. Its caption, replay button and wrapper use Lumos components. Reduced motion shows the completed structure and hides replay. The physician letter remains immediately after the hero.
- `PatientVoice.astro` adds an opening speech-bubble animation to the Patient voices hero. The “Life beyond pain” section uses existing `Tabs variant="side" motion="gentle"`, with its heading/subtitle in the intro slot, three vertical links and the same `LifeMoment` images and captions; mobile stacks the layout.
- `OntarioVoice.astro` traces Ontario once on first entry into view, without replay. Thirteen land polygons in `src/data/ontario-outline.json` derive from public-domain Natural Earth data; projection and source details are in `docs/ontario-outline-source.md`.
- About’s mission uses equal `columns`, with two simplified paragraphs at the token-based `measure-main` width (64ch) and a larger `CarePromise` drawing of paths toward work, family and community alongside. The drawing uses the existing 34rem illustration width token. The drawing uses the shared one-time 1.4-second entrance and reduced-motion behavior. The wide hero and six concise value cards remain.
- `KnowledgeShare.astro` adds a presentation slide connecting to an audience beside the Presentations hero.
- `ContactExchange.astro` adds envelope and reply linework using shared trace timing. Contact and About heroes use `ContentWrapper variant="columns-wide"`, a 3:2 desktop split that gives the copy more room.

Captions use shared Lumos typography and wrappers. Custom CSS stays with the smallest component that owns it under `@layer components`; pages compose framework layouts and carry no inline or page CSS. `LUMOS.md` and `src/styles/base.css` remain authoritative. Shared illustration duration, stagger, trace timing and easing live in `base.css`, alongside centralized logo, icon, marker and control dimensions. `src/utils/illustrationMotion.ts` reads those tokens, starts each entrance on first visibility and cancels running animation when reduced motion is enabled. The homepage graphic’s proportions and 1.4-second behavior, forms and navigation are preserved; the current text measures are documented below.

The source illustration remains `src/assets/life-beyond-pain.png`, generated with OpenAI `image_gen`; its exact prompt is saved in `docs/life-beyond-pain-prompt.txt`. The scenes are illustrations, not patient testimonials or evidence of outcomes. Astro serves one shared optimized WebP for the Patient voices crops. Run `node scripts/embed-artwork-provenance.mjs` after every build and before packaging to restore generation metadata without changing image pixels. See `docs/visual-assets-brief.md` for the current direction and verification record.

## Card and content consistency

The shared Card feature symbols include target, connected, daily/calendar and foundation. Pain care uses target, clipboard and connected-care icons; Patient voices uses calendar, heart and voice; Presentations uses target, voice and foundation. Membership’s three audience cards use evidence, people and connected symbols. The founding-physician fee card uses `buttonEmphasis="primary"`, and the FAQ has an introductory paragraph.

- Plain heading/paragraph splits use `ContentWrapper variant="columns-text"`: equal desktop columns, eyebrow in the intro slot, paragraphs filling their column. Single-paragraph introductions center vertically with the heading (excluding the eyebrow); longer copy remains top-aligned. The six instances are Home mandate/letter, About Why OPSA, Pain care standard/outcomes and Patient voices participation. About Why OPSA uses `columns-text-wide` with a 2:3 heading/copy split. Mobile stacks; CTAs remain under the copy. Pain care’s outcomes CTA sits beneath the left heading. Its column stretches with space-between: heading top and button bottom align with the right-hand paragraphs.

Home’s six values include an additional detail paragraph from the shared data. Side tabs stretch their active statement panel to match the tab column’s height; About’s value cards keep only the concise descriptions. These changes use existing Lumos components and shared tokens, including `--text-measure-main: 64ch` through `measure-main`, with no page CSS.

## Fee table and field states

MembershipFees uses rounded white table surfaces, aligned tabular prices and a highlighted founding-member row. Fee amounts and table semantics are unchanged. The following standard-width membership CTA sits beside a secondary “Membership questions” link to the FAQ; both stack at equal widths on small screens. Shared fields use `--field-background-hover` and `--field-border-hover`; the background references `--surface-highlight`, also used for the founding row. Inputs, textareas and select controls keep a visible tint and border on hover across public forms.

LifeMoment uses responsive 4:3 frames with centered top/bottom cropping and unchanged image proportions. The tabs supply the scene labels; repeated captions below the images have been removed. Shared forms use space-6 between rows. Feature cards use the theme-aware `--card-feature-background` token, contact cards align details through the Card footer slot, and footer links use the existing touch-target token on coarse pointers.
