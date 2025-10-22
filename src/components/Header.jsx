import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaMotorcycle, FaCar, FaInfoCircle, FaEnvelope } from 'react-icons/fa'

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
        <nav aria-label="Primary" className={open ? 'open' : ''}>
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
          <ul className="menu" onClick={closeMenu}>
            <li className="nav-item-with-tooltip">
              <NavLink to="/" end>
                <FaHome className="nav-icon" />
                <span className="nav-text">Home</span>
                <span className="nav-tooltip">Home</span>
              </NavLink>
            </li>
            <li className="nav-item-with-tooltip">
              <NavLink to="/bikes">
                <FaMotorcycle className="nav-icon" />
                <span className="nav-text">Motorcycles</span>
                <span className="nav-tooltip">Motorcycles</span>
              </NavLink>
            </li>
            <li className="nav-item-with-tooltip">
              <NavLink to="/cars">
                <FaCar className="nav-icon" />
                <span className="nav-text">Luxury Cars</span>
                <span className="nav-tooltip">Luxury Cars</span>
              </NavLink>
            </li>
            <li className="nav-item-with-tooltip">
              <NavLink to="/about">
                <FaInfoCircle className="nav-icon" />
                <span className="nav-text">About Us</span>
                <span className="nav-tooltip">About Us</span>
              </NavLink>
            </li>
            <li className="nav-item-with-tooltip">
              <NavLink to="/contact">
                <FaEnvelope className="nav-icon" />
                <span className="nav-text">Contact</span>
                <span className="nav-tooltip">Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
