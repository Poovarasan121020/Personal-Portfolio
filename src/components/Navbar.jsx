import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'contact']

function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo"><span className="dot">.</span></div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <li key={link}>
            <button className="nav-btn" onClick={() => scrollTo(link)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

export default Navbar
