import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import './Navbar.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo">SAMARCH</Link>

      <button className="navbar__toggle" onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>

      <nav className={`navbar__links ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)} 
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/quote" className="navbar__cta" onClick={() => setOpen(false)}>
          Get a Quote
        </Link>
      </nav>
    </header>
  )
}

export default Navbar