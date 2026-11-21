# MOBA

Marketing site for MOBA — private airport transfers and drivers in Guanacaste,
Costa Rica.

## Running it

```
npm install
npm run dev      # http://localhost:5173
npm run build    # writes dist/
npm run preview  # serves the built dist/
```

## Before this goes live

Everything below lives in **`src/data/site.js`**. Nothing else needs editing.

1. **`WHATSAPP_NUMBER`** — currently `50600000000`, a placeholder. Every WhatsApp
   link on the page is dead until this is the real number. Country code first,
   digits only, no `+` and no spaces.
2. **`LEGAL`** — the cédula jurídica and ICT tourist transport permit. Both show
   as visibly pending on the page, which is deliberate: the "Licensed and
   insured" guarantee points at them, so empty placeholders are better than
   invented numbers.
3. **`FOUNDER`** — name and portrait. Set `photo` to an image path and the
   placeholder is replaced automatically.
4. **`DRIVERS`** — name and photo per driver. Same behaviour: a `null` name or
   photo renders a placeholder, a real value renders the real thing.
5. **`CONTACT.email`** — `hola@moba.cr` is a guess.

Drop images in `public/` and reference them as `/driver-ana.jpg`.

## Language

The site ships in English and Spanish. `src/i18n/en.js` and `es.js` hold every
user-facing string; they must keep the same shape, so if you add a key to one,
add it to the other.

It opens in the visitor's own language: a previous choice in the picker wins,
otherwise `navigator.languages` decides, and anything that is not Spanish falls
back to English. The choice is remembered in `localStorage` and sets
`<html lang>`.

**The WhatsApp message is always sent in Spanish**, whatever the page is set
to, because the owner does not read English. An English visitor sees the draft
in English so they can check their own details, with a note saying it goes in
Spanish and a toggle to read that version; the `wa.me` link carries the Spanish
one in every case. That rule lives in `sendMessage()` in `src/lib/whatsapp.js`
— do not make it follow the UI language.

Places picked from the drop-off list carry both labels (`src/data/site.js`), so
"Papagayo Peninsula" reaches the owner as "Península Papagayo". A hotel name
typed freehand is passed through untouched, since guessing at it would be worse
than leaving it as the traveller wrote it.

## Content you can change without touching components

`src/data/site.js` also holds the nav links, the drop-off autocomplete list, the
fleet, the four guarantees, and the FAQ.

It also still holds `ROUTES`, the drive times out of Liberia. Nothing renders
them right now — the hero chart they fed was removed while the hero is being
reworked — but the numbers are researched, so they're parked there rather than
thrown away.

## Tours

Deliberately not built — it needs decisions that haven't been made yet. When
it's ready, add a `Tours` component in `src/App.jsx` where the comment marks the
spot, and uncomment the `Tours` entry in `NAV_LINKS`.

## Design notes

- **Palette** is the MOBA brand set: black, violet `#7D39EB`, lime `#C6FF33`,
  white, plus two derived neutrals. Lime is only ever used on dark surfaces
  (17:1 contrast on black); violet carries CTAs on light surfaces (5.7:1 with
  white text). Both clear WCAG AA.
- **Type** is Poppins throughout, from Google Fonts. One family, with weight
  doing the work: 800 and 700 for display, 500 for UI, 400 for body.
  Google serves Poppins as **static weights, not a variable font**, so each
  weight is listed explicitly in the font link in `index.html` — add one there
  before using it in CSS, or the browser silently synthesises it. For the same
  reason `font-variation-settings` has no effect and is not used anywhere.
  Poppins also sets wider than most grotesques, so measures are given in `ch`
  where possible and they adapt on their own.
- **One exception:** "Costa Rica" in the hero headline is set in Kaushan
  Script, in lime, as the page's single accent. Kaushan was chosen because it
  has enough stroke weight to stand next to Poppins 800 — thinner calligraphic
  scripts look frail against an ExtraBold geometric. Lime because it is already
  the on-dark accent (logo, CTAs), and violet would disappear against a dark
  photo. The span undoes two things it inherits: the headline's negative
  tracking, which closes up a script's joins, and the type size, since a
  script's small x-height needs scaling up (1.16em) to sit level with the sans
  beside it. Keep this to the one phrase — spreading it dilutes the accent.
- **The hero photo** is `public/hero-van.webp`, rendered as a real `<img>`
  rather than a CSS background — it is the page's largest paint, and a
  background image gets discovered too late to load fast. It is preloaded in
  `index.html`. Two scrims sit over it: a diagonal on desktop that buries the
  upper left where the headline is, and a plain vertical one below 760px,
  because on a tall narrow screen the diagonal leaves the subhead on the bright
  side of the van.

  The scrims are deliberately as light as they can be. Worst-case text contrast
  was measured against the composited backdrop over the real glyph line boxes,
  not eyeballed: desktop 5.0:1 headline and 5.0:1 subhead, phone 8.3:1 and
  5.5:1. The binding constraint is the **subhead**, which at 19px is normal
  text and so needs 4.5:1; the headline is large text and only needs 3:1.
  There is not much room left — if you lighten these further, re-measure, and
  if you swap the photo for a brighter one they will need to go back up.
- **The quote card sits on the black hero**, not below it, so it's on screen
  before anyone scrolls. Two tokens in `styles.css` control it: `--peek` (how
  much of the card the hero carries behind it) and `--hero-foot` (the hero's
  bottom padding). `--hero-foot` must stay the larger of the two — the
  difference between them is the gap under the headline, and if it went
  negative the card would climb over the copy.
  `.quote-wrap` needs `display: flow-root` for any of this to work. Without a
  block formatting context the card's negative top margin collapses through and
  drags the paper background up with it, so the card lands exactly on the colour
  boundary and no black ever shows behind it.
  How much of the card lands on black varies with how tall the card is at that
  breakpoint — about 80% on a desktop, 45% at tablet width where the fields
  stack into two columns. Both read correctly; it just isn't a fixed ratio.
- **The logo** is in `src/components/Logo.jsx`, with `public/favicon.svg` as a
  standalone copy. It is a *trace* of the supplied artwork — the outline was
  extracted from the source PNG with sub-pixel marching squares, simplified,
  and fitted with Catmull-Rom cubics, giving 98.7% pixel agreement with the
  original. Don't hand-edit the path; if the artwork changes, re-trace it.
  It fills with `currentColor` and is 1.81:1, so size it by height.
- The fleet illustrations are SVG line art in `src/components/VehicleArt.jsx`,
  there so the page ships without stock photography. Swap in real photos when
  you have them.
- Reduced motion is respected, focus rings are visible on every control, and the
  layout holds down to 320px.

## Structure

```
src/
  data/site.js          all copy and data
  lib/whatsapp.js       message composer and wa.me links
  components/           one file per section
  styles.css            design tokens + all styling
```
