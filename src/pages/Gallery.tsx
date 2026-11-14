import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { projects } from '../data/content'

function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <PageHeader title="Gallery" />
      <section className="section">
        <div className="gallery">
          {projects.map((p) => (
            <img key={p.image} src={p.image} alt={p.title} onClick={() => setActive(p.image)} />
          ))}
        </div>
      </section>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <img src={active} alt="" />
        </div>
      )}
    </>
  )
}
export default Gallery