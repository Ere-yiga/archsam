import PageHeader from '../components/PageHeader'
import { services } from '../data/content'

function Quote() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>

    const text =
      `New quote request\n` +
      `Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\n` +
      `Service: ${d.service}\nLocation: ${d.location}\nBudget: ${d.budget}\n` +
      `Details: ${d.details}`

    window.open(`https://wa.me/2349046593583?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      <PageHeader title="Get a Quote" subtitle="Tell us about your project and we will get back to you" />
      <section className="section">
        <form className="form" onSubmit={handleSubmit}>
          <label>Full name<input name="name" required /></label>
          <label>Phone<input name="phone" type="tel" required /></label>
          <label className="full">Email<input name="email" type="email" /></label>
          <label>Service
            <select name="service" required>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </label>
          <label>Project location<input name="location" required /></label>
          <label className="full">Budget (optional)<input name="budget" /></label>
          <label className="full">Project details
            <textarea name="details" rows={5} required />
          </label>
          <button className="btn full" type="submit">Send Request</button>
        </form>
      </section>
    </>
  )
}
export default Quote