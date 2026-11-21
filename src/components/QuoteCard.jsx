import { useEffect, useId, useRef, useState } from 'react'
import { placesFor, localizePlace, DEFAULT_ORIGIN_KEY, PLACES } from '../data/site.js'
import { buildMessage, sendMessage, waLink } from '../lib/whatsapp.js'
import { useLanguage, fill } from '../i18n/index.jsx'

function Stepper({ idBase, label, noun, value, min, max, onChange, t }) {
  const labelId = `${idBase}-label`
  return (
    <div className="field">
      <span className="label" id={labelId}>
        {label}
      </span>
      <div className="stepper" role="group" aria-labelledby={labelId}>
        <button
          type="button"
          className="step"
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          aria-label={fill(t.quote.fewerLabel, { noun })}
        >
          &minus;
        </button>
        <output className="step-val" aria-live="polite">
          {value}
        </output>
        <button
          type="button"
          className="step"
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
          aria-label={fill(t.quote.moreLabel, { noun })}
        >
          +
        </button>
      </div>
    </div>
  )
}

/**
 * The quote card. Rendered twice on the page (hero and closing section), so
 * every field id is namespaced with useId — duplicate ids would break the
 * label/input pairing for both copies.
 */
export default function QuoteCard({ id }) {
  const { lang, t } = useLanguage()
  const uid = useId()
  const f = (name) => `${uid}-${name}`

  const defaultOrigin =
    PLACES.find((p) => p.en === DEFAULT_ORIGIN_KEY)?.[lang === 'es' ? 'es' : 'en'] ??
    DEFAULT_ORIGIN_KEY

  const [form, setForm] = useState({
    origin: defaultOrigin,
    dest: '',
    date: '',
    time: '',
    flight: '',
    adults: 2,
    kids: 0,
    seat: false,
    roundtrip: false,
    notes: '',
  })
  const [built, setBuilt] = useState(null)
  const [showSpanish, setShowSpanish] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const previewRef = useRef(null)

  const set = (key) => (e) => {
    const el = e.target
    setForm((s) => ({ ...s, [key]: el.type === 'checkbox' ? el.checked : el.value }))
  }

  // Switching language mid-form: a place chosen from the list has to follow,
  // or an English visitor is left looking at "Aeropuerto de Liberia". Any
  // draft already on screen is rebuilt so it matches what is now displayed.
  const prevLang = useRef(lang)
  useEffect(() => {
    if (prevLang.current === lang) return
    prevLang.current = lang
    const next = {
      ...form,
      origin: localizePlace(form.origin, lang),
      dest: localizePlace(form.dest, lang),
    }
    setForm(next)
    setBuilt((b) => (b ? { mine: buildMessage(next, lang), sent: sendMessage(next) } : null))
    setShowSpanish(false)
    setError('')
    // `form` is deliberately not a dependency: this runs on language change only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  function handleSubmit(e) {
    e.preventDefault()
    const missing = []
    if (!form.origin.trim()) missing.push(t.errors.pickup)
    if (!form.dest.trim()) missing.push(t.errors.dropoff)
    if (!form.date) missing.push(t.errors.date)
    if (!form.time) missing.push(t.errors.time)

    if (missing.length) {
      setBuilt(null)
      const list =
        missing.length === 1
          ? missing[0]
          : `${missing.slice(0, -1).join(', ')} ${t.errors.and} ${missing.at(-1)}`
      setError(fill(t.errors.template, { items: list }))
      return
    }

    setError('')
    setCopied(false)
    setShowSpanish(false)
    setBuilt({ mine: buildMessage(form, lang), sent: sendMessage(form) })
    requestAnimationFrame(() =>
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
    )
  }

  // What is shown. In Spanish these are the same string, so there is nothing
  // to toggle and no note to explain.
  const bilingual = lang !== 'es'
  const shown = built && (bilingual && showSpanish ? built.sent : built.mine)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setError(t.errors.copyFailed)
    }
  }

  const places = placesFor(lang)
  const listId = `${uid}-places`

  return (
    <div className="quote" id={id}>
      <div className="quote-head">
        <h2 className="quote-h2">{t.quote.title}</h2>
        <p className="quote-note">{t.quote.note}</p>
      </div>

      <form className="qform" onSubmit={handleSubmit} noValidate>
        <div className="qgrid">
          <div className="field field-wide">
            <label htmlFor={f('origin')}>{t.quote.pickup}</label>
            <input
              id={f('origin')}
              list={listId}
              value={form.origin}
              onChange={set('origin')}
              autoComplete="off"
            />
          </div>

          <div className="field field-wide">
            <label htmlFor={f('dest')}>{t.quote.dropoff}</label>
            <input
              id={f('dest')}
              list={listId}
              value={form.dest}
              onChange={set('dest')}
              placeholder={t.quote.dropoffPlaceholder}
              autoComplete="off"
            />
          </div>

          <div className="field">
            <label htmlFor={f('date')}>{t.quote.date}</label>
            <input id={f('date')} type="date" value={form.date} onChange={set('date')} />
          </div>

          <div className="field">
            <label htmlFor={f('time')}>{t.quote.time}</label>
            <input id={f('time')} type="time" value={form.time} onChange={set('time')} />
          </div>

          <div className="field">
            <label htmlFor={f('flight')}>{t.quote.flight}</label>
            <input
              id={f('flight')}
              value={form.flight}
              onChange={set('flight')}
              placeholder={t.quote.flightPlaceholder}
              autoComplete="off"
            />
          </div>

          <Stepper
            idBase={f('adults')}
            label={t.quote.adults}
            noun={t.quote.adult}
            value={form.adults}
            min={1}
            max={30}
            onChange={(v) => setForm((s) => ({ ...s, adults: v }))}
            t={t}
          />

          <Stepper
            idBase={f('kids')}
            label={t.quote.children}
            noun={t.quote.child}
            value={form.kids}
            min={0}
            max={20}
            onChange={(v) => setForm((s) => ({ ...s, kids: v }))}
            t={t}
          />

          <div className="field field-wide">
            <label htmlFor={f('notes')}>{t.quote.notes}</label>
            <input
              id={f('notes')}
              value={form.notes}
              onChange={set('notes')}
              placeholder={t.quote.notesPlaceholder}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="qextras">
          <label className="check" htmlFor={f('seat')}>
            <input id={f('seat')} type="checkbox" checked={form.seat} onChange={set('seat')} />
            <span>{t.quote.seat}</span>
          </label>
          <label className="check" htmlFor={f('return')}>
            <input
              id={f('return')}
              type="checkbox"
              checked={form.roundtrip}
              onChange={set('roundtrip')}
            />
            <span>{t.quote.roundtrip}</span>
          </label>
        </div>

        <div className="qbar">
          <p className="qbar-text">{t.quote.barText}</p>
          <button className="btn btn-violet btn-lg" type="submit">
            {t.quote.submit}
          </button>
        </div>

        {error && (
          <p className="qerror" role="alert">
            {error}
          </p>
        )}
      </form>

      {built && (
        <div className="preview" ref={previewRef}>
          <h3 className="preview-h3">
            {bilingual && showSpanish ? t.preview.spanishLabel : t.preview.title}
          </h3>
          <pre className="preview-body" lang={bilingual && showSpanish ? 'es' : lang}>
            {shown}
          </pre>

          {bilingual && (
            <p className="preview-note">
              {t.preview.spanishNote}{' '}
              <button
                type="button"
                className="linkish"
                onClick={() => setShowSpanish((v) => !v)}
              >
                {showSpanish ? t.preview.showMine : t.preview.showSpanish}
              </button>
            </p>
          )}

          <div className="preview-actions">
            <a
              className="btn btn-violet btn-lg"
              href={waLink(built.sent)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.preview.send}
            </a>
            <button className="btn btn-ghost" type="button" onClick={handleCopy}>
              {copied ? t.preview.copied : t.preview.copy}
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => setBuilt(null)}>
              {t.preview.edit}
            </button>
          </div>
        </div>
      )}

      <datalist id={listId}>
        {places.map((p) => (
          <option key={p} value={p} />
        ))}
      </datalist>
    </div>
  )
}
