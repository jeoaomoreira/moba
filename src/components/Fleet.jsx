import { FLEET } from '../data/site.js'
import { useT, fill } from '../i18n/index.jsx'
import VehicleArt from './VehicleArt.jsx'

export default function Fleet() {
  const t = useT()

  return (
    <section className="section fleet" id="fleet">
      <div className="shell">
        <div className="sec-head">
          <h2 className="sec-h2">{t.fleet.title}</h2>
          <p className="sec-sub">{t.fleet.sub}</p>
        </div>

        <div className="fleet-grid">
          {FLEET.map((id) => {
            const v = t.fleet.items[id]
            return (
              <article className="veh" key={id}>
                <div className="veh-art">
                  <VehicleArt id={id} alt={fill(t.fleet.alt, { name: v.name })} />
                </div>

                <div className="veh-body">
                  <h3 className="veh-h3">{v.name}</h3>
                  <p className="veh-p">{v.blurb}</p>
                  <dl className="veh-specs">
                    <div>
                      <dt>{t.fleet.specPassengers}</dt>
                      <dd>{v.passengers}</dd>
                    </div>
                    <div>
                      <dt>{t.fleet.specLuggage}</dt>
                      <dd>{v.luggage}</dd>
                    </div>
                    <div>
                      <dt>{t.fleet.specBest}</dt>
                      <dd>{v.best}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            )
          })}
        </div>

        <p className="fleet-foot">{t.fleet.foot}</p>
      </div>
    </section>
  )
}
