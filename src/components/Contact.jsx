import useInView from '../hooks/useInView'
import { personalInfo } from '../data/portfolioData'
import './Contact.css'

const CONTACT_ITEMS = [
  { icon: '📧', label: personalInfo.email,             href: 'mailto:' + personalInfo.email },
  { icon: '📞', label: personalInfo.phone,             href: 'tel:' + personalInfo.phone },
  { icon: '🐙', label: 'github.com/Poovarasan121020', href: personalInfo.github },
  { icon: '💼', label: 'LinkedIn Profile',             href: personalInfo.linkedin },
  { icon: '🔍', label: 'Naukri Profile',               href: personalInfo.naukri },
  { icon: '📍', label: personalInfo.location,          href: null },
]

function handleDownload() {
  const link = document.createElement('a')
  link.href = '/Poovarasan_Resume.pdf'
  link.download = 'Poovarasan_P_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function Contact() {

  const { ref, isVisible } = useInView()

  return (
    <section className="section" id="contact">
      <div className="container">

        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>

        <p className="contact-intro">
          I am actively looking for entry-level developer opportunities. Let us connect!
        </p>

        {/* Contact cards grid — fades in when scrolled into view */}
        <div
          ref={ref}
          className={'contact-grid fade-in ' + (isVisible ? 'visible' : '')}
        >
          {CONTACT_ITEMS.map((item) => {
            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="c-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              )
            }

            return (
              <div key={item.label} className="contact-card no-link">
                <span className="c-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>

        {/* Big resume download button at the bottom of the contact section */}
        <div className="resume-cta">
          <button className="btn-resume-big" onClick={handleDownload}>
            Download My Resume (PDF)
          </button>
        </div>

      </div>
    </section>
  )
}

export default Contact
