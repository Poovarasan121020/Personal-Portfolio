import useInView from '../hooks/useInView'
import { education } from '../data/portfolioData'
import './About.css'

const CARDS = [
  { icon:'🎯', title:'Who I Am',    text:'A B.Sc Anaesthesia graduate (2024) who discovered a passion for coding and made a bold leap into Full Stack Development. Completed Python Full Stack training at Code Pilot Academy.' },
  { icon:'🧠', title:'My Mindset',  text:'Quick learner, team player, and problem-solver. My clinical background gave me precision, attention to detail, and the ability to perform well under pressure — skills I bring to every line of code.' },
  { icon:'🚀', title:'My Goal',     text:'To grow as an entry-level developer, contribute meaningfully to real projects, and keep leveling up my technical skills in Python, Django, React and beyond.' },
]

function AboutCard({ icon, title, text, delay }) {
  const { ref, isVisible } = useInView()
  return (
    <div ref={ref} className={`about-card fade-in delay-${delay} ${isVisible ? 'visible' : ''}`}>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function About() {
  const { ref, isVisible } = useInView()
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About <span className="highlight">Me</span></h2>

        <div className="about-grid">
          {CARDS.map((card, i) => <AboutCard key={card.title} {...card} delay={i+1} />)}
        </div>

        <div ref={ref} className={`edu-box fade-in ${isVisible ? 'visible' : ''}`}>
          <h3>🎓 Education</h3>
          <div className="edu-list">
            {education.map(item => (
              <div key={item.year} className="edu-item">
                <span className="edu-year">{item.year}</span>
                <div>
                  <strong>{item.degree}</strong>
                  {item.institution && <p>{item.institution}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
