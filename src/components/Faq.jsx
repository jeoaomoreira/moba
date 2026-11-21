import { useT } from '../i18n/index.jsx'

export default function Faq() {
  const t = useT()

  return (
    <section className="section faq" id="faq">
      <div className="shell">
        <div className="sec-head">
          <h2 className="sec-h2">{t.faq.title}</h2>
          <p className="sec-sub">{t.faq.sub}</p>
        </div>

        <div className="faq-grid">
          {t.faq.items.map((item, i) => (
            <details className="qa" key={item.q} open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="qa-body">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
