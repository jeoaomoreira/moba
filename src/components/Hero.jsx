import { useT } from '../i18n/index.jsx'

// The photo lives in public/ and is preloaded by index.html, so it is
// referenced by its literal path — the two must stay in step.
const HERO_IMAGE = '/hero-van.webp'

export default function Hero() {
  const t = useT()

  return (
    <section className="hero">
      {/* A real <img> rather than a CSS background: this is the page's largest
          paint, and a background image would be discovered late and load slow.
          alt is empty on purpose — it is a backdrop, the headline carries the
          message, and the fleet section names the vehicles properly. */}
      <img
        className="hero-img"
        src={HERO_IMAGE}
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="shell hero-in">
        <h1 className="hero-h1">
          {t.hero.lead} <span className="hero-script">{t.hero.place}</span>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
      </div>
    </section>
  )
}
