import { NAV_LINKS } from '../data/site.js'
import { useT } from '../i18n/index.jsx'
import Logo from './Logo.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function Nav() {
  const t = useT()

  return (
    <header className="nav">
      <div className="shell nav-in">
        <a className="lockup" href="#top" aria-label={t.nav.home}>
          <Logo className="lockup-mark" />
          <span className="wordmark">MOBA</span>
        </a>

        <nav className="nav-links" aria-label={t.nav.label}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <LanguageSwitcher />

        <a className="btn btn-lime nav-cta" href="#quote">
          {t.nav.cta}
        </a>
      </div>
    </header>
  )
}
