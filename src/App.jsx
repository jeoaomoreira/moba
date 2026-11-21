import { LanguageProvider, useT } from './i18n/index.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import QuoteForm from './components/QuoteForm.jsx'
import Fleet from './components/Fleet.jsx'
import Guarantees from './components/Guarantees.jsx'
import Trust from './components/Trust.jsx'
import Faq from './components/Faq.jsx'
import Closer from './components/Closer.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

function Site() {
  const t = useT()

  return (
    <>
      <a className="skip" href="#quote">
        {t.skip}
      </a>

      <Nav />

      <main id="top">
        <Hero />
        <QuoteForm />
        <Fleet />
        <Guarantees />
        <Trust />
        <Faq />
        {/* Tours: left out until the offering is defined. Add <Tours /> here
            and a "Tours" entry to NAV_LINKS in src/data/site.js, with its
            label added to both locale files. */}
        <Closer />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
