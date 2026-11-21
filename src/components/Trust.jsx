import { FOUNDER, DRIVERS, LEGAL } from '../data/site.js'
import { useT } from '../i18n/index.jsx'

export default function Trust() {
  const t = useT()

  return (
    <section className="section trust" id="drivers">
      <div className="shell">
        <div className="sec-head">
          <h2 className="sec-h2">{t.trust.title}</h2>
          <p className="sec-sub">{t.trust.sub}</p>
        </div>

        <div className="trust-grid">
          <article className="founder">
            {FOUNDER.photo ? (
              <img className="founder-photo" src={FOUNDER.photo} alt={FOUNDER.name ?? ''} />
            ) : (
              <div className="ph ph-portrait">
                <span className="ph-tag">{t.trust.portraitPending}</span>
              </div>
            )}

            <div className="founder-body">
              <h3 className="founder-h3">{t.trust.founderTitle}</h3>
              {t.trust.founderParas.map((p) => (
                <p className="founder-p" key={p.slice(0, 24)}>
                  {p}
                </p>
              ))}
              <p className="founder-sign" data-pending={FOUNDER.name ? undefined : ''}>
                {FOUNDER.name ?? t.trust.namePending}
              </p>
            </div>
          </article>

          <div className="trust-side">
            <div className="drivers">
              <h3 className="side-h3">{t.trust.driversTitle}</h3>

              <ul className="driver-list">
                {DRIVERS.map((d) => (
                  <li className="driver" key={d.id}>
                    {d.photo ? (
                      <img className="driver-photo" src={d.photo} alt={d.name ?? ''} />
                    ) : (
                      <span className="ph ph-face">
                        <span className="ph-tag">{t.trust.photo}</span>
                      </span>
                    )}
                    <span className="driver-name" data-pending={d.name ? undefined : ''}>
                      {d.name ?? t.trust.name}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="drivers-note">{t.trust.driversNote}</p>
            </div>

            <div className="creds">
              <div className="cred">
                <h4 className="cred-h4">{t.trust.entityLabel}</h4>
                <p className="cred-v" data-pending={LEGAL.entity.pending ? '' : undefined}>
                  {LEGAL.entity.value}
                </p>
                <p className="cred-p">{t.trust.entityNote}</p>
              </div>

              <div className="cred">
                <h4 className="cred-h4">{t.trust.permitLabel}</h4>
                <p className="cred-v" data-pending={LEGAL.permit.pending ? '' : undefined}>
                  {LEGAL.permit.value ?? t.trust.permitValue}
                </p>
                <p className="cred-p">{t.trust.permitNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
