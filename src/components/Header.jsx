import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <Link to="/" onClick={closeMenu} aria-label="Polardrive Tech AS – Home">
            <div className="logo-container">
              <span className="logo-text">Polardrive</span>
              <span className="logo-subtext">TECH AS</span>
            </div>
          </Link>
        </div>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Primary" className={open ? 'open' : ''}>
          <ul className="menu" onClick={closeMenu}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/bikes">Motorcycles</NavLink></li>
            <li><NavLink to="/cars">Luxury Cars</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
