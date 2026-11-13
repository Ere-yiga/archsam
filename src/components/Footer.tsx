import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <h3 className="footer__brand">SAMARCH</h3>
          <p>Architectural Firm and Construction Services</p>
          <p className="footer__tagline">We design, we build, you enjoy</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>38 Prince Okey Street, Off NTA, Akpara Link Road, Port Harcourt</p>
          <p>09046593583 / 09099992542</p>
          <p>onabsyoung@gmail.com</p>
        </div>
      </div>

      <p className="footer__copy">© 2026 SAMARCH. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer