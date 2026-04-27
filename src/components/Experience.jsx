import useInView from '../hooks/useInView'
import { experience } from '../data/portfolioData'
import './Experience.css'

function TimelineItem({ item, delay }) {
  const { ref, isVisible } = useInView()
  return (
    <div ref={ref} className={`tl-item fade-in delay-${delay} ${isVisible ? 'visible' : ''}`}>
      <div className="tl-dot" />
      <div className="tl-card">
        <div className="tl-header">
          <h3>{item.role}</h3>
          <span className="tl-date">{item.period}</span>
        </div>
        <p className="tl-company">{item.company}</p>
        <ul>
          {item.points.map(p => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section className="section section-dark" id="experience">
      <div className="container">
        <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={item.role} item={item} delay={i+1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
