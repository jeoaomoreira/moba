import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './en.js'
import es from './es.js'

export const LOCALES = { en, es }
export const LOCALE_CODES = ['en', 'es']

const STORAGE_KEY = 'moba:lang'

/**
 * What language to open in.
 * A previous explicit choice always wins; otherwise take the device's
 * preference. Anything that is not Spanish falls back to English, since that
 * is the language most arriving travellers share.
 */
function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LOCALE_CODES.includes(saved)) return saved
  } catch {
    // private mode or blocked storage — fall through to the device
  }
  const prefs = typeof navigator === 'undefined' ? [] : navigator.languages || [navigator.language]
  for (const tag of prefs) {
    if (!tag) continue
    const base = String(tag).toLowerCase().split('-')[0]
    if (LOCALE_CODES.includes(base)) return base
  }
  return 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLocale)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // not being able to remember the choice is not worth failing over
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: LOCALES[lang] }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}

/** The active string catalogue. */
export function useT() {
  return useLanguage().t
}

/** fill('One fewer {noun}', { noun: 'adult' }) */
export function fill(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`))
}
