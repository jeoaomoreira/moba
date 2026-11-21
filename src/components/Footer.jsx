import { CONTACT, LEGAL } from '../data/site.js'
import { waLink } from '../lib/whatsapp.js'
import { useT } from '../i18n/index.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const t = useT()

  return (
    <footer className="foot">
      <div className="shell foot-in">
        <div className="foot-brand">
          <Logo className="foot-mark" title="MOBA" />
          <p className="foot-tag">{t.footer.tag}</p>
        </div>

        <div className="foot-col">
          <h3>{t.footer.whereTitle}</h3>
          <p>{t.footer.whereBody}</p>
        </div>

        <div className="foot-col">
          <h3>{t.footer.reachTitle}</h3>
          <p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              {t.footer.whatsapp}
            </a>
            <br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <br />
            {t.footer.hours}
          </p>
        </div>

        <div className="foot-col">
          <h3>{t.footer.legalTitle}</h3>
          <p>
            <span data-pending={LEGAL.entity.pending ? '' : undefined}>
              {LEGAL.entity.pending ? t.footer.entityPending : LEGAL.entity.value}
            </span>
            <br />
            <span data-pending={LEGAL.permit.pending ? '' : undefined}>
              {LEGAL.permit.pending ? t.footer.permitPending : LEGAL.permit.value}
            </span>
            <br />
            {t.footer.insurance}
          </p>
        </div>
      </div>

      <div className="shell foot-base">
        <p>
          © {new Date().getFullYear()} MOBA. {CONTACT.base}.
        </p>
      </div>
    </footer>
  )
}
