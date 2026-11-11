# OPSA visual assets

Mode: Persuade. Extend the existing Lumos for Astro pages. Preserve the established brand, forms and homepage diagram behaviour; apply the requested content and measure refinements through shared components and tokens.

## Direction contract

THESIS: Each page gets a meaningful visual. Clear care relationships take priority over abstract, overlapping layers.

OWN-WORLD: Existing OPSA navy, blue, sky, white and restrained coral; Manrope and Inter; Lumos Section, ContentWrapper, Heading, Paragraph, Grid, Button and Tabs. Text stays in ordinary responsive layout. SVG coordinates define illustration geometry rather than page layout.

STORY: Care combines four clearly labelled contributions around the person receiving it. Patient voices makes space for experiences through an opening speech bubble. Membership pieces assemble into a shared foundation. About identifies the province and pairs its mission with a small drawing of paths toward work, family and community. Presentations connect ideas with an audience; Contact depicts an exchange through envelope and reply linework.

FIRST VIEWPORT: Care, Patient voices, About, Presentations and Contact pair hero copy with their respective assets. About and Contact use a 3:2 desktop split. Membership keeps the physician letter immediately after its hero, with letter and fees aligned inside a 56rem reading container. Life beyond pain uses side tabs, with its heading/subtitle above three vertical links and the existing images/captions in the panels; mobile stacks. About’s mission uses equal columns with two simplified paragraphs at the shared 64ch measure and a larger drawing of paths toward work, family and community. Six concise icon cards present About’s values; Home’s six value panels add detail and stretch to the height of their side tabs.

FORM: Care uses a compact SVG person with four distinct care symbols and curved branches, introduced by a one-time 1.4-second trace. The rehabilitation symbol is an outlined heart. Shared rounded, filled choice buttons respond to hover, focus and tap with the relevant detail; selection toggles and Escape clears it. Patient voices uses drawn speech-bubble linework and quotation marks, without fabricated testimony. Ontario traces once on first entry after a page load; no replay button. Patient voices uses the existing side Tabs variant with gentle image transitions and keyboard/reduced-motion behavior. About’s mission includes a decorative CarePromise drawing of paths toward work, family and community using the shared one-time entrance. Presentation slide linework connects to audience icons, and Contact traces envelope/reply linework. Reduced motion leaves illustrations complete and still, with static care-selection responses.

FINISH: Independent review, desktop/tablet/mobile and interaction checks, updated documentation and deployment ZIP. This is a refinement of the incumbent system, not a replacement identity.

## Component boundaries

- `CareLayers.astro`: compact person-and-four-symbol SVG diagram with curved branches and an outlined-heart rehabilitation symbol. Shared `Button variant="choice"` controls expose detail with clear hover/selected states; existing one-time trace and interaction timing remain.
- `CarePromise.astro`: larger decorative drawing of paths toward work, family and community beside the About mission; uses the shared trace timing and reduced-motion helper.
- `PatientVoice.astro`: speech bubble and quote-symbol animation in the Patient voices hero.
- `OntarioVoice.astro`: sourced geographic outline, automatic entrance only.
- `GrowingFoundation.astro`: assembly; caption and replay use Lumos components.
- `KnowledgeShare.astro`: presentation slide and audience connection animation.
- `ContactExchange.astro`: envelope and reply illustration using shared trace timing.
- `LifeMoment.astro`: smallest custom crop boundary, used unchanged in Patient voices side tabs.
- `Tabs.astro`: Patient voices uses side tabs with its intro and existing images/captions. Home’s side tabs stretch the active value statement to the tab-column height. About has no mission tabs.
- `ButtonWrapper.astro`: equalizes button widths only after wrapping; unwrapped rows retain their natural widths.
- `Card.astro`: feature symbols include target, connected, daily/calendar and foundation. Pain care, Patient voices and Presentations use the shared feature variant with matched icon/copy treatment; six values also use the feature variant and icons. Membership audience cards use evidence/people/connected symbols, and the fee card exposes primary CTA emphasis. Shared values data supplies six additional detail paragraphs to Home while About stays concise.
- `illustrationMotion.ts`: shared one-time visibility trigger, reduced-motion cancellation, and CSS-token timing reader.

## Token and layout audit

All seven public pages compose framework layouts and have no page-level CSS. About mission paragraphs use `measure-main`, backed by `--text-measure-main: 64ch`. Shared custom components use colour, spacing, radius and typography tokens. Illustration timing, logo widths, markers, target sizing and existing em-based control spacing are centralized in `src/styles/base.css`. Native SVG coordinates and proportional crop geometry remain intrinsic asset geometry. The homepage's existing graphic proportions, labels and 1.4-second behaviour are retained.

## Provenance

The human scenes were generated with built-in image generation, not presented as real patients. Source: `src/assets/life-beyond-pain.png`; exact prompt: `docs/life-beyond-pain-prompt.txt`. Astro optimizes one reusable WebP. Run `node scripts/embed-artwork-provenance.mjs` after production builds, before packaging. Ontario's source and projection are documented in `docs/ontario-outline-source.md`.

Impeccable's CLI engine is unavailable in this environment; its written guidance and an independent agent review are used. Existing missing PRODUCT.md/DESIGN.md are not repaired as a side effect. LUMOS.md, example-components.astro and the token source remain authoritative.


## Historical verification — preceding refinements

Type checking passed for 69 files with no errors, warnings or hints; the production build generated all 10 routes. All seven public pages were checked at 1333, 390 and 768 widths, initially and after motion settled, with no overflow or JavaScript errors. Reduced-motion checks found zero active animations in the new illustrations and a hidden foundation replay button. Mission-tab pointer and keyboard selection passed, with actual incoming/outgoing animations measured at 1400ms.

The full finish review accepted the scoped visual direction and identified one mobile tab-clipping issue. The compact Tabs variant resolved it. The verdict pass scored that fix resolved with no visible regressions; disposition: ship. All labels fit at 390 and 320 widths, with targets at least 53px high and working pointer/keyboard selection.

The subsequent care-diagram refinement passed focused checks at 1333, 778, 390 and 320 widths with no horizontal overflow or JavaScript errors. Hover, click/touch toggling, Escape, keyboard focus and reduced-motion behavior passed; entrance and active-route animations measured 1400ms. Astro checked 69 files without issues and built all 10 routes. Illustration provenance was embedded after the build; the regenerated `output/opsa-site.zip` was verified at 35 files. Fresh independent care review returned **ship**, with no material fixes: all supplied captures were valid, and the rounded connector, interactive state, keyboard focus ring, responsive composition and Lumos styling matched the intended refinement.

## Historical verification — six-change refinement

Focused checks on About, Pain care, Membership and Contact at 1333, 778, 390 and 320 widths found no horizontal overflow or JavaScript errors. Mission tabs passed keyboard/pointer checks with distinct paragraphs and matching images; all mission paragraphs remain visible without JavaScript. Care hover, touch toggling, Escape, keyboard and reduced-motion checks passed. Astro checked 71 files with no issues and built all 10 routes. Independent review matched all six visual changes and identified a stale brief and clipped tab focus outlines. This documentation refresh resolves the brief. First/last tab focus captures at 1333 and 390 show fully visible 2px outlines inset by 2px using the existing token. Rapid keyboard return now clears a stale leaving state, and captures show fully opaque active content. Home, Patient voices and Presentations regression checks at 1333 and 390 found no overflow; Home’s six value tabs work. About and Contact have zero active animations under reduced motion. The final build generated 10 routes, PNG/WebP provenance was restored, and the deployment ZIP was verified at 36 files. The independent verdict pass scored the keyboard-focus and active-panel persistence fixes resolved, with no visible regressions; disposition: **ship**.

## Historical verification — seven-annotation consistency pass

Care’s rehabilitation icon now depicts walking with a cane, and shared choice buttons replace the custom underlined labels while retaining existing interaction and motion. Pain care cards use target, clipboard and connected-care symbols; descriptions contain 118, 123 and 126 characters. Its outcomes copy is top-aligned and the CTA sits beneath the heading. Patient voices participation copy is vertically centered; calendar, heart and voice cards use headings of 22, 20 and 21 characters and descriptions of 99, 96 and 104 characters. Presentations topic cards use target, voice and foundation symbols. All changes use shared Lumos components, tokens and utilities, without page CSS.

Checks on the three affected pages at 1333, 778, 390 and 320 widths found no overflow or JavaScript errors. Both edited description groups have equal rendered text heights at every checked width. Care hover, touch toggling, Escape, keyboard and reduced-motion checks pass. Astro checked 71 files with no issues and built all 10 routes. Artwork provenance was restored and `output/opsa-site.zip` regenerated and verified at 36 files, including the choice buttons and updated Patient voices heading. Formatting and diff checks pass. Fresh independent review returned **ship**, with no material fixes: all seven annotation changes matched, including the assisted-walking icon, buttons at 320 width, balanced cards, both alignment changes and meaningful icons.

## Historical verification — tab layout update

Patient voices now uses existing side tabs for “Life beyond pain.” About’s mission returns to its exact original shared mission paragraphs and compact image tabs; the wide hero and six value cards are retained. Only page composition changes; shared component CSS and illustration assets are unchanged. Astro checked 71 files with no issues and built all 10 routes. Both layouts were visually checked at 1333, 778, 390 and 320 widths with no overflow; keyboard and pointer selection passed. About’s original mission copy and “More room for life” were confirmed, and Patient voices side tabs had zero running animations under reduced motion. Provenance was restored and the rebuilt 36-file ZIP verified to contain both current layouts; diff checks passed.

## Historical verification — About mission artwork removal

Removed the entire “More room for life” heading, tabs and image at the user’s request. The mission now uses a single-column ContentWrapper, preserving its original copy and 76ch paragraph caps. Patient voices side tabs, About hero and values are unchanged.

## Historical verification — eight-annotation and Home values pass

Current layout uses the shared auto-width example for six plain heading/body sections: Home mandate and letter, About “Why OPSA,” Pain care standard and outcomes, and Patient voices participation. Headings use h3/17ch, copy uses 28ch, and any CTA sits in column 2 at margin 4. About’s mission uses the original paragraphs at 64ch alongside CarePromise; care rehabilitation depicts seated mobility. Membership gains three feature symbols, a primary fee CTA and an FAQ introduction. Wrapped buttons share widths. Home’s six values include their additional details and panels match the side-tab height; About’s cards remain concise.

Astro checked 72 files with no issues and built all 10 routes. All seven pages at 1333, 778, 390 and 320, plus Home at 1304, had no overflow or JavaScript errors. Wrapped button widths match, and Home value panels exactly match the tab-column heights at 1333, 1304 and 778. All six Home values passed actual keyboard selection at 1304, including active panel availability, detail text and equal heights. CarePromise had zero running animations under reduced motion. Resizing buttons through 1333 → 1900 → 390 → 1333 confirmed equal widths when stacked and restored natural widths inline. Provenance was restored; the 37-file ZIP was verified to include CarePromise, the FAQ introduction and value details, with clean diff checks. Fresh independent review returned **ship**, with no material fixes. All requested current refinements matched, and refreshed desktop/mobile evidence passed.

## Historical correction — readable text columns and mission paths

The user rejected the cramped 28ch, bottom-aligned splits and the heart-and-hands artwork. All six heading/paragraph sections now use `columns-text`: equal columns from the existing 64rem breakpoint, an intro row for the eyebrow, and full-column paragraphs aligned exactly to the heading top. The generic auto-width example remains unchanged. CarePromise now traces three paths from a coral point toward distinct work, family and community symbols; the heart, hands and circular badge are removed. Existing mission copy and its 64ch measure remain.

Astro check: 72 files, zero issues; production build: 10 routes. All six splits checked at 1304, 1024, 778, 390 and 320: no horizontal overflow or JavaScript errors. Desktop heading/paragraph top difference is 0px; paragraph width is 569.83px at 1304 and 441.83px at 1024 with no character cap. About mission and split layouts visually reviewed at 1304 and 390; reduced-motion mission graphic has no running animations.

Artwork provenance restored after the final build; the 37-file deployment ZIP was regenerated and verified to contain the corrected columns and replacement graphic. Diff checks pass.

## Current alignment, mission copy and graphic scale

Single-paragraph introductions on Home, Pain care and Patient voices center vertically against their headings, excluding the eyebrow intro row. Longer split copy remains top-aligned. Pain care’s outcomes CTA aligns to the right edge below its copy. About’s mission now has two shorter, plain-language paragraphs and equal columns; CarePromise uses the existing 34rem illustration token, rendering at 544px rather than 384px at the reported desktop width. The shared original mission data remains available elsewhere.

Checks at 1304, 1024, 778, 390 and 320 widths found no overflow or JavaScript errors. Desktop short-copy/heading centers match within 0.01px; the CTA right edge matches its column. Desktop and mobile captures reviewed; reduced-motion graphic remains still. Astro check: 72 files, zero issues. Build: 10 routes.

Artwork provenance restored; 37-file deployment ZIP regenerated and verified. Diff check clean.

## Pain care button placement clarification

Moved the outcomes CTA into the left column beneath its heading. Existing Lumos stretch and space-between utilities align the heading to the paragraph top and the button to the paragraph bottom. Both edges match exactly at 1304 and 1024; mobile stacks cleanly at 390 and 320 with no overflow. Build passes; updated preview and deployment ZIP.

## Current five-annotation refinement

About Why OPSA uses a 2:3 heading/copy split, widening the copy by 20% and extending it left. CareLayers rehabilitation uses a clean heart outline in the existing stroke style. MembershipFees retains all four amounts with a quieter white table, right-aligned tabular prices and a blue founding-member row; the final membership CTA spans the reading container. Shared fields have a blue hover surface and visible border, with `--surface-highlight`, `--field-background-hover` and `--field-border-hover` defined in the theme token system.

Astro check: 72 files, zero issues; build: 10 routes. All seven public pages checked at 1304, 778, 390 and 320: no overflow or JavaScript errors. All public input, textarea and select controls checked for a changed hover fill/border at 1304; panel backgrounds remain distinct and keyboard focus is visible. Table amounts verified unchanged and CTA width matches its container at all widths. Desktop/mobile screenshots visually reviewed; smallest-width header shortened visually while retaining its full accessible name.

Provenance restored after final build; 37-file deployment ZIP regenerated and verified. Diff checks pass.
