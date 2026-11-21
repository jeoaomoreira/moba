import { WHATSAPP_NUMBER, toSpanishPlace } from '../data/site.js'
import { LOCALES } from '../i18n/index.jsx'

/** A wa.me link, optionally carrying a prefilled message. */
export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** "2026-01-14" -> "Wed 14 Jan 2026" / "mié, 14 ene 2026". */
function prettyDate(value, locale) {
  if (!value) return ''
  const d = new Date(`${value}T00:00:00`)
  if (Number.isNaN(d.getTime())) return value
  return d.toLocaleDateString(locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/** "21:40" -> "9:40 PM" / "9:40 p.m." */
function prettyTime(value, m) {
  if (!value) return ''
  const [h, min] = value.split(':').map(Number)
  if (Number.isNaN(h) || Number.isNaN(min)) return value
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(min).padStart(2, '0')} ${h < 12 ? m.am : m.pm}`
}

/**
 * Compose the WhatsApp message in one specific language.
 *
 * `lang` is the language of the MESSAGE, which is not always the language of
 * the page. The English build exists only to show the traveller what they are
 * about to send; sendMessage() below is what actually goes out.
 */
export function buildMessage(form, lang) {
  const m = LOCALES[lang].message
  const spanish = lang === 'es'

  // A place picked from the list has to reach the owner in Spanish. Anything
  // typed freehand is passed through untouched — guessing at a hotel name
  // would do more harm than leaving it as the traveller wrote it.
  const place = (v) => (spanish ? toSpanishPlace(v.trim()) : v.trim())

  const people = [
    `${form.adults} ${form.adults === 1 ? m.adult : m.adults}`,
    form.kids > 0 ? `${form.kids} ${form.kids === 1 ? m.child : m.children}` : null,
  ]
    .filter(Boolean)
    .join(', ')

  const lines = [
    m.greeting,
    '',
    `${m.pickup}: ${place(form.origin)}`,
    `${m.dropoff}: ${place(form.dest)}`,
    `${m.date}: ${prettyDate(form.date, m.dateLocale)}`,
    `${m.time}: ${prettyTime(form.time, m)}`,
    `${m.passengers}: ${people}`,
  ]

  if (form.flight.trim()) lines.push(`${m.flight}: ${form.flight.trim()}`)
  if (form.seat) lines.push(m.seat)
  if (form.roundtrip) lines.push(m.roundtrip)
  if (form.notes.trim()) lines.push(`${m.notes}: ${form.notes.trim()}`)

  lines.push('', m.thanks)
  return lines.join('\n')
}

/**
 * The message that is actually sent — always Spanish, whatever the page is
 * set to, because the person reading it on the other end does not read
 * English. Do not make this follow the UI language.
 */
export function sendMessage(form) {
  return buildMessage(form, 'es')
}
