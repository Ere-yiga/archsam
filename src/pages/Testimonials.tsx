import PageHeader from '../components/PageHeader'
import { testimonials } from '../data/content'

function Testimonials() {
  return (
    <>
      <PageHeader title="Testimonials" subtitle="What our clients say" />
      <section className="section">
        <div className="t-grid">
          {testimonials.map((t) => (
            <div className="t-card" key={t.name}>
              <p>“{t.text}”</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Testimonials