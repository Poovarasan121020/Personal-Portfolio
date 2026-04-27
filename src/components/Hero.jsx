import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import './Hero.css'

function handleDownload() {
  const link = document.createElement('a')
  link.href = '/Poovarasan_Resume.pdf'
  link.download = 'Poovarasan_P_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullRole = 'Python Full Stack Developer'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullRole.length) {
        setTypedText(fullRole.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">

      {/* Big faded "DEV" text in the background — just decoration */}
      <div className="hero-bg-text" aria-hidden="true">DEV</div>

      {/* LEFT SIDE — your name, role, buttons, social links */}
      <div className="hero-content">
        <p className="hero-tag anim-1">Hello, I am</p>
        <h1 className="hero-name anim-2">{personalInfo.name}</h1>

        {/* Shows the typing animation and blinking cursor */}
        <h2 className="hero-role anim-3">
          <span>{typedText}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-desc anim-4">{personalInfo.tagline}</p>

        {/* Three action buttons */}
        <div className="hero-btns anim-5">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>

          {/* Clicking this downloads Poovarasan_Resume.pdf from /public folder */}
          <button className="btn btn-download" onClick={handleDownload}>
            Download Resume
          </button>

          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>

        {/* Social profile links */}
        <div className="hero-socials anim-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-pill">
            <GithubIcon /> GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-pill">
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={personalInfo.naukri} target="_blank" rel="noreferrer" className="social-pill">
            Naukri
          </a>
        </div>
      </div>

      {/* RIGHT SIDE — animated avatar circle with spinning rings */}
      <div className="hero-avatar anim-right">
        <div className="avatar-wrap">
          <div className="avatar-circle">👨‍💻</div>
          <div className="ring ring-1"><div className="ring-dot" /></div>
          <div className="ring ring-2"><div className="ring-dot" /></div>
        </div>
      </div>

      <div className="scroll-hint">scroll down</div>

    </section>
  )
}

export default Hero
