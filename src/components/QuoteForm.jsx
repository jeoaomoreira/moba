import QuoteCard from './QuoteCard.jsx'

/** Hero placement: the card lifted up onto the black hero. */
export default function QuoteForm() {
  return (
    <section className="quote-wrap">
      <div className="shell">
        <QuoteCard id="quote" />
      </div>
    </section>
  )
}
