import { GUARANTEES } from '../data/site.js'
import { useT } from '../i18n/index.jsx'

/* Marks, not numbers: these four run in parallel, they are not a sequence. */
const MARKS = {
  flight: <path d="M3 17 L29 6 L22 17 L29 28 Z" />,
  sign: (
    <>
      <rect x="3" y="6" width="26" height="16" rx="2" />
      <line x1="16" y1="22" x2="16" y2="29" />
      <line x1="9" y1="12" x2="23" y2="12" />
      <line x1="9" y1="17" x2="19" y2="17" />
    </>
  ),
  insured: (
    <>
      <path d="M16 3 L28 8 V16 C28 23 22 28 16 30 C10 28 4 23 4 16 V8 Z" />
      <path d="M11 16 L15 20 L22 12" />
    </>
  ),
  price: (
    <>
      <circle cx="16" cy="16" r="12" />
      <line x1="16" y1="8" x2="16" y2="24" />
      <path d="M20 12 C20 10 18 9 16 9 C14 9 12 10 12 12 C12 16 20 16 20 20 C20 22 18 23 16 23 C14 23 12 22 12 20" />
    </>
  ),
}

export default function Guarantees() {
  const t = useT()

  return (
    <section className="section guarantees" id="guarantees">
      <div className="shell">
        <div className="sec-head">
          <h2 className="sec-h2">{t.guarantees.title}</h2>
          <p className="sec-sub">{t.guarantees.sub}</p>
        </div>

        <div className="gu-grid">
          {GUARANTEES.map((id) => (
            <article className="gu" key={id}>
              <svg className="gu-mark" viewBox="0 0 32 32" aria-hidden="true">
                {MARKS[id]}
              </svg>
              <h3 className="gu-h3">{t.guarantees.items[id].title}</h3>
              <p className="gu-p">{t.guarantees.items[id].body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
