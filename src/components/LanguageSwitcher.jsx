import { useLanguage, LOCALES, LOCALE_CODES } from '../i18n/index.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang">
      <svg className="lang-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
      </svg>
      <select
        className="lang-select"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        aria-label={t.nav.language}
      >
        {LOCALE_CODES.map((code) => (
          <option key={code} value={code}>
            {LOCALES[code].name}
          </option>
        ))}
      </select>
    </div>
  )
}
