import { waLink } from '../lib/whatsapp.js'
import { useT } from '../i18n/index.jsx'
import QuoteCard from './QuoteCard.jsx'

/**
 * Closing section: the pitch on the left, a second copy of the quote card on
 * the right. It is a separate instance with its own state, so a half-filled
 * form up in the hero is not silently carried down here.
 */
export default function Closer() {
  const t = useT()

  return (
    <section className="closer">
      <div className="shell closer-in">
        <div className="closer-copy">
          <h2 className="closer-h2">{t.closer.title}</h2>
          <p className="closer-p">{t.closer.sub}</p>
          <a
            className="btn btn-outline btn-lg"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.closer.wa}
          </a>
        </div>

        <div className="closer-form">
          <QuoteCard />
        </div>
      </div>
    </section>
  )
}
