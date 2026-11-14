import PageHeader from '../components/PageHeader'
import { projects } from '../data/content'

function Projects() {
  return (
    <>
      <PageHeader title="Our Projects" subtitle="A look at our recent work" />
      <section className="section">
        <div className="grid grid--projects">
          {projects.map((p) => (
            <div key={p.title} className="card card--image card--tall"
                 style={{ backgroundImage: `url(${p.image})` }}>
              <span className="card__label">{p.title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Projects