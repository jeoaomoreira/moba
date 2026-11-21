/* ============================================================
   Structural data and settings.
   All user-facing wording lives in src/i18n/en.js and es.js.
   ============================================================ */

// TODO: replace with MOBA's real WhatsApp number.
// Country code first, digits only, no + and no spaces. Costa Rica is 506.
export const WHATSAPP_NUMBER = '50600000000'

export const CONTACT = {
  email: 'hola@moba.cr',
  base: 'Tamarindo, Guanacaste',
}

// TODO: replace with the real registration numbers once issued.
// `pending: true` makes the page show them as visibly missing rather than
// inventing a number under a guarantee that points straight at them.
export const LEGAL = {
  entity: { value: '3‑101‑000000', pending: true },
  permit: { pending: true },
}

// `key` indexes into t.nav; href is the in-page anchor.
export const NAV_LINKS = [
  { href: '#fleet', key: 'fleet' },
  { href: '#guarantees', key: 'guarantees' },
  { href: '#drivers', key: 'drivers' },
  { href: '#faq', key: 'faq' },
  // { href: '#tours', key: 'tours' },  <- add when the tours section ships
]

/* Drop-off suggestions. Most are proper nouns and read the same in both
   languages; only the ones that genuinely differ carry an `es`. The Spanish
   form matters because the message sent to WhatsApp is always Spanish, so a
   picked place has to arrive in Spanish too. */
export const PLACES = [
  { en: 'Liberia Airport (LIR)', es: 'Aeropuerto de Liberia (LIR)' },
  { en: 'Tamarindo' },
  { en: 'Playa Langosta' },
  { en: 'Playa Grande' },
  { en: 'Playa Avellanas' },
  { en: 'Playa Conchal' },
  { en: 'Playa Flamingo' },
  { en: 'Playa Potrero' },
  { en: 'Playas del Coco' },
  { en: 'Papagayo Peninsula', es: 'Península Papagayo' },
  { en: 'Playa Hermosa' },
  { en: 'Nosara' },
  { en: 'Sámara' },
  { en: 'Santa Teresa' },
  { en: 'Montezuma' },
  { en: 'Rincón de la Vieja' },
  { en: 'Monteverde' },
  { en: 'La Fortuna / Arenal' },
  { en: 'Peñas Blancas (Nicaragua border)', es: 'Peñas Blancas (frontera con Nicaragua)' },
  { en: 'San José Airport (SJO)', es: 'Aeropuerto de San José (SJO)' },
  { en: 'Jacó' },
  { en: 'Manuel Antonio' },
]

export const DEFAULT_ORIGIN_KEY = 'Liberia Airport (LIR)'

/** The list as shown in a given language. */
export function placesFor(lang) {
  return PLACES.map((p) => (lang === 'es' && p.es ? p.es : p.en))
}

/** Whatever the traveller picked, rendered in Spanish for the owner's copy. */
export function toSpanishPlace(value) {
  const hit = PLACES.find((p) => p.en === value || p.es === value)
  return hit ? hit.es || hit.en : value
}

/**
 * Re-label a known place into the given language. Free text — a hotel name
 * the traveller typed — is returned untouched, because guessing at it would
 * be worse than leaving it as they wrote it.
 */
export function localizePlace(value, lang) {
  const hit = PLACES.find((p) => p.en === value || p.es === value)
  if (!hit) return value
  return lang === 'es' ? hit.es || hit.en : hit.en
}

/** Vehicle order and ids; names and copy come from the locale files. */
export const FLEET = ['van', 'suv', 'sprinter', 'minibus']

/** Guarantee order and ids; copy comes from the locale files. */
export const GUARANTEES = ['flight', 'sign', 'insured', 'price']

// TODO: add the founder's name and portrait.
export const FOUNDER = { name: null, photo: null }

// TODO: add each driver's name and photo. `name: null` renders a placeholder.
export const DRIVERS = [
  { id: 'd1', name: null, photo: null },
  { id: 'd2', name: null, photo: null },
  { id: 'd3', name: null, photo: null },
  { id: 'd4', name: null, photo: null },
]
