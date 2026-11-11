# OPSA website change checklist

Implemented against `OPSA-website-changes.md` (November 11, 2026) and the supplied `OPSA Letter to Physician Colleagues updated x 2 (1).pdf`.

## Pages and navigation

- [x] Seven public content pages: Home, About, Pain care, Membership, Patient voices, Presentations, Contact.
- [x] Main navigation includes all six inner pages and Join OPSA, linked to the membership registration form.
- [x] Footer includes all six inner pages plus Letter to physicians.
- [x] Current-page navigation state and mobile menu retained.
- [x] Astro uses clean paths such as `/about/`. Cloudflare redirects support the handoff’s `/about.html` and other inner-page filenames.
- [x] Letter lives on Membership at `/membership/#letter`; no separate letter page.

## Home

- [x] Headline: “Patients do get better.”
- [x] Sub-headline: “Specialist-led, image-guided pain care for every Ontarian.”
- [x] Both mission paragraphs use the exact supplied wording.
- [x] Mandate card 2 uses the supplied specialist-led, holistic care title and description.
- [x] Advocacy priority 03 uses the supplied description; title reflects specialist-led care.
- [x] Physician-letter callout includes the supplied invitation, Read the letter and Download PDF.
- [x] Entire founding-member section removed, including placeholder names and patient/community seat card.
- [x] Home registration form enabled.

## About

- [x] Why OPSA includes the exact replacement paragraph.
- [x] Formation step 4 is “Establish our board” with the exact supplied description.
- [x] No claim of an elected founding board.

## Membership and letter

- [x] Hero includes “Read our letter to physicians.”
- [x] Full letter appears directly after the hero, under “An invitation to join OPSA as a founding member.”
- [x] Letter date, four invitations, financial commitment, closing and full credentials transcribed from the supplied PDF. Broken PDF extraction characters were checked against rendered pages.
- [x] Download button and final Become a founding member button lead to the PDF and registration form respectively.
- [x] Membership fees: $400 initiation fee covering the first month; monthly shares 10/$720, 25/$290, 50/$145, 100/$75.
- [x] “All monies collected will go towards OPSA initiatives.” retained.
- [x] Founding physician membership box includes the supplied fee explanation and letter link.
- [x] Funding FAQ uses the exact requested wording.
- [x] Membership-opening FAQ uses the exact requested wording, with no date placeholder.

## PDF

- [x] Available at `/assets/OPSA-Letter-to-Physician-Colleagues.pdf`.
- [x] Original first two letter pages preserved; their rendered images match the source exactly.
- [x] Original third page replaced with a membership-fee appendix containing only the initiation fee, sliding-scale shares and the use-of-funds statement/explanation.
- [x] Itemized cost table, lobby retainer, annual total and aggregate monthly operating cost absent from downloadable PDF and public page content.
- [x] Replacement appendix visually inspected.
- [x] Source PDF in Downloads left unchanged.

## Contact and forms

- [x] Every footer has clickable piranizameer@gmail.com and 519-851-4595.
- [x] General inquiries, Government and partners, and Media contact cards each have email and phone links.
- [x] Presentations includes the requested “Questions first?” contact line.
- [x] Letter signature contains Dr. Pirani’s name, credentials, role, email and phone.
- [x] Five forms: Home join, Membership registration, Patient voices story, Presentation request, Contact message.
- [x] Default behavior creates a draft addressed to Dr. Pirani with a form-specific subject and every answer.
- [x] Visitor is told to review the draft and press Send; the website does not claim to have sent it.
- [x] Required fields, email validation and relevant consent checkboxes retained/added.
- [x] Existing optional membership endpoint configuration retained for future use; default remains email drafts.

## Removed or deliberately omitted

- [x] No sample patient stories, evidence-statistic placeholders, presentation duration/notice placeholders or membership-date placeholders on the seven public pages.
- [x] No video or embedded video on the seven public pages.
- [x] No public founding-member roster or patient/community seat card.
- [x] No invented patient stories, evidence statistics, presentation availability or launch dates.

## Release decisions and future content

- [ ] Confirm Dr. Pirani’s approval to publish his personal Gmail and cell number before production release, as requested by the handoff. They are implemented in this local build.
- [ ] Deploy the reviewed build to the existing Cloudflare Pages project and verify its production URL. Local implementation does not change the live site.
- [ ] Update the separate Claude design if it is still maintained; it was not supplied or edited here.
- [ ] If a video exists elsewhere, provide its location; none occurs on these public pages.
- [ ] Future editorial decisions remain open: approved member names/roles, whether to restore the patient/community card, consented patient stories, sourced statistics, presentation duration/notice and membership opening date.

Framework reference pages (`/style-guide/`, `/example-components/`) remain excluded from indexing and site navigation.

## Verification completed

- `npm run check`: 61 files; 0 errors, 0 warnings, 0 hints.
- `npm run build`: successful static build.
- `git diff --check`: passed.
- Browser checks: all seven public pages at widths 320, 390, 768, 1024 and 1440; no horizontal overflow, page titles/heading structure, active-page navigation, contact links, letter links, mobile menu opening and Escape closing checked.
- All internal page/asset links and fragment targets checked.
- Desktop and phone screenshots reviewed.
- All five production forms checked for required-field validation, intended recipient, distinct subject and every answer, including accented characters, ampersands, plus signs and multiline text. No emails sent.
- Fixed a discovered form bug: an input named `name` shadowed the form’s `name` property. The subject now reads the form attribute explicitly.
- PDF browser download verified byte-for-byte against the revised public asset; PDF text checked for required fees and excluded cost information.
- `output/opsa-site.zip` packages the seven content pages, 404 and assets. Framework reference pages are excluded from the upload archive.

The email draft handoff is verified; delivery depends on the visitor having an email app configured and pressing Send. Production checks must be repeated after deployment.

## Browser review refinements — historical

- [x] Home graphic: complete light-blue ring at rest, cursor-responsive labels and dots, highlighted arc moving to the selected dot. Uses existing Lumos motion timing and supports keyboard, touch, Escape and reduced motion.
- [x] Membership letter uses the full section content width.
- [x] Membership-fee appendix uses the full section content width.
- [x] Patient-story form uses the Lumos Form panel variant: white surface, border and pale-blue existing Input/Textarea controls.
- [x] Browser verified all six hover targets and arc endpoint alignment, keyboard focus, touch toggling, reduced motion, and all three layout changes at 1333, 772 and 390 widths. Story email draft still works.
- [x] Astro check: 0 errors, 0 warnings, 0 hints; production build passes.

## Follow-up browser refinements

- [x] Restored the original slow 1.4-second entrance, drawing from the top through a complete 360-degree circle. Hover behavior remains; early interaction takes over without replaying the entrance. Reduced motion shows the completed ring immediately.
- [x] Contrasting form panel is now the shared Form default, including Presentations and Contact. Membership keeps its existing white outer panel without nesting another.
- [x] Header logo reduced from 13rem to 10rem.
- [x] Home added first in the main navigation, including its active-page state. Footer link order retained.

## Motion and scrolling consistency

- [x] Hover arc movement and fades now share the intro’s 1.4-second duration and easing; interrupted hover transitions remain continuous. Reduced-motion and keyboard handling retained.
- [x] Every form with left-hand copy uses Lumos’s `sticky-content` variant: Home, Membership, Patient voices, Presentations and Contact. Copy begins at the top and pins below the header on desktop; mobile stays stacked.

## Body-copy widths — historical

- [x] Reverted the body-copy width audit at the user’s request: restored all 14 previous Paragraph width props, including About’s 76ch mission measure, and the footer description’s 58ch limit.
- [x] Preserved the separately requested full-width Membership letter and fee appendix.
- [x] Card contrast, form panels, sticky layouts, navigation and animation refinements remain in place.

## Card surface contrast

- [x] Membership audience cards and the founding-physician fee card have white surfaces and subtle borders against the pale-blue section.
- [x] Shared card surface token makes the same distinction automatically on `background-2` sections, while preserving dark/inverted theme palettes and unboxed stacked/profile variants.
- [x] Verified cards and form panels across all seven public pages at desktop and phone widths; no horizontal overflow. Astro check and production build pass.

## Page artwork and Lumos refinements — historical

- [x] Pain care hero uses an explicit person-to-four-contributions diagram with visible labels and a gentle entrance.
- [x] Membership hero retains the nine-piece foundation assembly; caption and replay use Lumos components. Reduced motion hides replay, and the physician letter remains the next section.
- [x] Patient voices hero includes a speech-bubble animation. Its “Life beyond pain” section uses ordinary Lumos layout and typography components, with `LifeMoment.astro` owning each crop instead of the removed whole-section component.
- [x] About hero traces the sourced Ontario outline once on first visibility. No replay control; reduced motion completes the outline immediately and cancels running animation on preference changes. Source details remain in `docs/ontario-outline-source.md`.
- [x] About mission preserves copy and paragraph caps on the left, with Work, Family and Community image tabs on the right. `Tabs variant="compact" motion="gentle"` supplies the reusable layout and 1.4-second manual transitions.
- [x] Presentations hero includes the slide-to-audience `KnowledgeShare.astro` animation.
- [x] Shared illustration timing and existing logo, icon, marker and control dimensions are centralized in tokens; `illustrationMotion.ts` handles first visibility and reduced-motion preferences. Choice borders use tokens and muted tab text uses `--text-2`.
- [x] All seven public pages use framework layout, with no inline or page CSS. Custom styles stay within their owning components and use shared tokens; SVG coordinates and crop percentages remain intrinsic asset geometry.
- [x] Existing Manrope/Inter typography, paragraph limits, card contrast, forms, navigation and homepage appearance and 1.4-second behavior preserved.
- [x] Generated illustration unchanged. Exact prompt remains in `docs/life-beyond-pain-prompt.txt`; run `node scripts/embed-artwork-provenance.mjs` after every production build and before packaging.
- [x] `npm run check`: 69 files, no errors, warnings or hints. Production build: all 10 routes pass.
- [x] All seven public pages checked at 1333, 390 and 768 widths, initially and after motion settles: no horizontal overflow or JavaScript errors. New illustrations have zero animations under reduced motion; foundation replay is hidden. Actual mission-tab incoming/outgoing animations use 1400ms; pointer and keyboard selection pass.

The full finish review identified one clipped Community tab on mobile. The compact Tabs variant resolves it at 390 and 320 widths; keyboard selection passes and targets remain at least 53px high. The verdict pass scored the fix resolved, with no visible regressions; disposition: ship. The deployment ZIP includes the completed refinements. Impeccable CLI context/detect/embed commands remain unavailable because their engine is missing (exit 127). Written guidance, independent agent review and the pixel-preserving Node provenance script provide the fallback. This ordinary extension preserves the existing system without creating DESIGN.md or a sidecar. These checks apply to the local build; production deployment remains a separate release step.

## Care diagram interaction refinement — historical

- [x] Connector curves into Psychological support; each labelled contribution is a native button. Existing copy, layout and one-time staggered entrance are preserved.
- [x] Hover and touch selection trace and highlight the active route over 1400ms; keyboard focus emphasizes it immediately. Click/tap toggles selection, Escape clears it, and reduced motion provides static responses. Existing Lumos tokens supply styling and timing.
- [x] Focused checks at 1333, 778, 390 and 320 widths: no horizontal overflow or JavaScript errors; hover, click/touch toggle, Escape, keyboard and reduced-motion checks pass. Entrance and route timing both measured 1400ms.
- [x] Astro check: 69 files, no issues. Production build: 10 routes. Provenance embedded after building; regenerated `output/opsa-site.zip` verified at 35 files.
- [x] Fresh independent care review: **ship**, no material fixes. All supplied captures valid; rounded final connector, interactive state, keyboard focus ring, responsive composition and Lumos styling verified.

## Six-change refinement — historical

- [x] Replaced the vertical care list with a compact SVG person, four distinct care symbols and curved branches. Shared one-time 1400ms trace; hover/focus/tap labels expose detail, tap toggles, Escape clears, and reduced motion is static.
- [x] Contact hero adds envelope/reply linework through `ContactExchange`, using shared trace timing.
- [x] About and Contact heroes use the reusable `ContentWrapper columns-wide` 3:2 desktop split.
- [x] About mission uses split Tabs and TabFeature: persistent heading, controls above changing copy, and synchronized LifeMoment imagery. Work, Family and Community each have a paragraph based on existing mission themes. Inactive panels are inert; all paragraphs remain visible without JavaScript.
- [x] Six About values use feature cards and icons. Evidence-informed care reuses existing advocacy wording; shared data also updates Home’s sixth value and “Six shared values” count.
- [x] Membership letter and fee content align within the new 56rem reading container, using `--max-width-reading` and the shared utility.
- [x] Four affected pages checked at 1333, 778, 390 and 320 widths: no overflow or JavaScript errors. Mission keyboard/pointer selection, distinct paragraph/image pairs and no-JavaScript fallback pass; care hover, touch toggle, Escape, keyboard and reduced-motion checks pass.
- [x] Astro check: 71 files, no issues. Production build: all 10 routes pass.
- [x] Review matched all six visual changes; the stale brief is refreshed and tab focus outlines now use the existing inset-offset token.
- [x] First/last tab focus captures at 1333 and 390 show fully visible 2px outlines inset by 2px. Rapid keyboard return clears stale leaving state; active content is fully opaque.
- [x] Shared regressions on Home, Patient voices and Presentations at 1333 and 390: no overflow; Home’s six value tabs work. About and Contact reduced motion: zero active animations.
- [x] Final build: 10 routes. PNG/WebP provenance restored; deployment ZIP verified at 36 files.
- [x] Independent verdict pass: **ship**. Scored keyboard-focus and active-panel persistence fixes resolved, with no visible regressions.

## Seven-annotation consistency pass — historical

- [x] Care rehabilitation symbol shows a person walking with a cane. Shared rounded/filled `Button variant="choice"` controls provide clear hover/selected states while retaining existing motion and interactions.
- [x] Shared Card symbols include target, connected, daily/calendar and foundation. Pain care cards use target/clipboard/connected icons and balanced 118/123/126-character descriptions.
- [x] Pain care outcomes copy is top-aligned with an existing utility; its CTA sits beneath the heading.
- [x] Patient voices participation paragraph is vertically centered. Feature cards use calendar/heart/voice icons, 22/20/21-character headings and 99/96/104-character descriptions.
- [x] Presentations topic cards use target/voice/foundation icons. All changes use Lumos components and tokens, with no page CSS.
- [x] Three affected pages at 1333, 778, 390 and 320: no overflow or JavaScript errors. Both edited description groups have equal rendered text heights at all four widths; care hover/touch toggle/Escape/keyboard/reduced-motion checks pass.
- [x] Astro check: 71 files, no issues. Production build: all 10 routes pass.
- [x] Artwork provenance restored; regenerated deployment ZIP verified at 36 files, including choice buttons and updated Patient voices heading. Formatting and diff checks pass.
- [x] Fresh independent review: **ship**, no material fixes. All seven annotation changes matched, including the assisted-walking icon, buttons at 320 width, balanced cards, both alignments and meaningful icons.

## Tab layout update — historical

- [x] Patient voices “Life beyond pain” uses `Tabs variant="side" motion="gentle"`: heading/subtitle in the intro slot, three vertical links and the existing LifeMoment images/captions. Mobile stacks.
- [x] About mission restores the exact original shared mission paragraphs on the left, with “More room for life” and compact Work/Family/Community image tabs on the right. Wide hero and six value cards retained.
- [x] Page composition only; no shared-component CSS or illustration changes. Astro check: 71 files, no issues. Production build: all 10 routes pass.
- [x] Both layouts visually checked at 1333, 778, 390 and 320: no overflow; keyboard/pointer selection passes. About’s original mission copy and “More room for life” confirmed. Patient voices side tabs show zero running animations under reduced motion.
- [x] Provenance restored; rebuilt ZIP verified at 36 files with both current layouts present. Diff checks pass.

## About mission artwork removal — historical

- [x] Removed the right-hand “More room for life” heading, tabs and image completely.
- [x] Converted the mission to a single-column layout, retaining original paragraphs and 76ch caps. Patient voices side tabs and the rest of About are unchanged.

## Eight-annotation and Home values pass — historical

- [x] About mission uses `columns-wide`, original mission paragraphs at `measure-main` (64ch token) and a small decorative CarePromise heart-and-hands entrance drawing.
- [x] Care rehabilitation symbol depicts a seated mobility exercise; existing choice-button interaction and motion remain.
- [x] Membership audience feature cards use evidence/people/connected icons. Fee CTA uses Card’s primary button emphasis; FAQ includes introductory copy.
- [x] Six plain heading/body sections follow the exact shared `auto-width` example: h3/17ch heading, 28ch copy and any CTA in column 2 at margin 4. Covers Home mandate/letter, About Why OPSA, Pain care standard/outcomes and Patient voices participation.
- [x] ButtonWrapper equalizes widths only when buttons wrap. Home’s six value panels add detail paragraphs and stretch to match their side-tab height; About descriptions stay concise.
- [x] Astro check: 72 files, no issues. Production build: 10 routes. All seven pages at 1333/778/390/320 plus Home at 1304: no overflow or JavaScript errors. Wrapped button widths match; value-panel/tab heights match exactly at 1333/1304/778.
- [x] All six Home values pass keyboard selection at 1304, active panel availability, detail text and equal heights. CarePromise reduced motion: zero running animations. Button resizing through 1333 → 1900 → 390 → 1333 preserves equal stacked widths and restores natural inline widths.
- [x] Provenance restored; deployment ZIP verified at 37 files with CarePromise, FAQ introduction and value details present. Diff checks clean.
- [x] Fresh independent finish verdict: **ship**, no material fixes. All requested current refinements matched; refreshed desktop/mobile evidence passed.

## Text-column and mission-graphic correction — historical

- [x] Removed the 28ch paragraph limits from all six plain text splits. Shared `columns-text` uses equal desktop columns with an eyebrow intro row and heading/paragraph tops aligned. Mobile stacks.
- [x] Replaced the rejected heart-and-hands graphic with traced paths toward work, family and community icons, using existing tokens and reduced-motion support.
- [x] Checked 1304/1024/778/390/320 widths: no overflow or JavaScript errors; desktop heading/paragraph tops match exactly. About desktop/mobile visual checks pass.
- [x] Astro check: 72 files, zero issues. Production build: 10 routes.
- [x] Final build provenance restored; 37-file ZIP verified with corrected columns and replacement graphic. Diff checks pass.

## Current alignment and mission refinement

- [x] Short single-paragraph introductions center with headings on Home, Pain care and Patient voices; eyebrow stays above.
- [x] Pain care outcomes CTA moved to the right edge beneath copy.
- [x] About mission shortened and simplified; equal columns and 34rem illustration token enlarge the graphic to 544px at 1304px viewport.
- [x] Desktop/mobile visual review and 1304/1024/778/390/320 checks pass: no overflow or JavaScript errors, centered short copy and right-aligned CTA confirmed. Reduced motion remains static. Astro check: 72 files, zero issues; build: 10 routes.

- [x] Artwork provenance restored; 37-file deployment ZIP regenerated and verified. Diff check clean.

## Pain care button placement clarification

Moved the outcomes CTA into the left column beneath its heading. Existing Lumos stretch and space-between utilities align the heading to the paragraph top and the button to the paragraph bottom. Both edges match exactly at 1304 and 1024; mobile stacks cleanly at 390 and 320 with no overflow. Build passes; updated preview and deployment ZIP.

## Current five-annotation refinement

- [x] About Why OPSA copy widens 20% through the shared `columns-text-wide` 2:3 variant.
- [x] Care rehabilitation icon replaced with a matching outline heart.
- [x] Fees use white surfaces, right-aligned tabular prices and a highlighted founding row. All amounts preserved.
- [x] Final letter membership CTA fills the reading container.
- [x] Shared input/textarea/select hover uses a contrasting blue surface and border across all public forms.
- [x] Astro check: 72 files, zero issues; build: 10 routes. All seven pages at 1304/778/390/320 pass overflow and console checks; fee amounts, full-width CTA, hover changes and keyboard focus checked. Desktop/mobile visual review complete.

- [x] Provenance restored after final build; 37-file deployment ZIP regenerated and verified. Diff checks pass.

## Final restrained design polish

- [x] Preserved approved layouts, copy, typography, graphics and motion; used Impeccable polish and Frontend Design with the Lumos build guide.
- [x] Shared forms use space-6 between rows instead of space-8, bringing related fields closer together.
- [x] Feature cards use a theme-aware surface token: white in light sections and lighter navy in dark sections. Icon-to-heading spacing reduced one token step.
- [x] Contact cards separate their contact details into a shared Card footer slot, aligning all three contact blocks across the row.
- [x] Footer links use the existing 44px-equivalent target token on touch devices.
- [x] Astro check: 72 files, zero errors/warnings/hints. Production build passes. All seven public routes at 1304/778/390/320 pass overflow and console checks; form hover, contact alignment, card contrast, mobile menu/Escape, touch targets, keyboard values tabs and reduced motion checked. Desktop and mobile screenshots reviewed.

## Letter CTA pair

Replaced the full-width letter CTA with a standard-width “Become a founding member” button and secondary “Membership questions” link to the FAQ. Shared ButtonWrapper keeps them side by side on desktop and equal-width when stacked. Verified at 1304, 390 and 320, including the FAQ anchor. Production build and ZIP verification pass.

## Shorter Life beyond pain image frames

LifeMoment uses a responsive 4:3 frame (25% shorter than the previous square). The original image proportions are preserved with automatic height and equal top/bottom clipping. Existing Lumos spacing and radius tokens remain in the owning component; no page CSS or fixed pixel dimensions. All three tabs verified at 1304/778/390/320 with no overflow or image stretching. Build passes; preview and verified deployment ZIP updated.
