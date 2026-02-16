import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-text">mbyze</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="navbar__link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__mobile-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="navbar__mobile-link" onClick={handleNavClick}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
