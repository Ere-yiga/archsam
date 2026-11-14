import PageHeader from '../components/PageHeader'

function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="section">
        <div className="narrow">
          {/* tel: opens the dialer on a phone, mailto: opens the email app */}
          <ul className="contact-list">
            <li>📍 38 Prince Okey Street, Off NTA, Akpara Link Road, Port Harcourt</li>
            <li>📞 <a href="tel:09046593583">09046593583</a> / <a href="tel:09099992542">09099992542</a></li>
            <li>✉️ <a href="mailto:onabsyoung@gmail.com">onabsyoung@gmail.com</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}
export default Contact