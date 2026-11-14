import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import { services } from '../data/content'

function Services() {
  return (
    <>
      <PageHeader title="Our Services" subtitle="Design it. Build it. Enjoy it." />
      <section className="section">
        {services.map((s) => (
          <div className="service-row" key={s.title}>
            <div className="service-row__img" style={{ backgroundImage: `url(${s.image})` }} />
            <div>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <Link to="/quote" className="btn">Request a Quote</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
export default Services