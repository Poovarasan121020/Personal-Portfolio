import { useState } from 'react'
import useInView from '../hooks/useInView'
import { projects } from '../data/portfolioData'
import './Projects.css'

function ProjectCard({ project, delay }) {
  const { ref, isVisible } = useInView()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: -((e.clientY - r.top  - r.height / 2) / 20),
      y:   (e.clientX - r.left - r.width  / 2) / 20,
    })
  }

  return (
    <div
      ref={ref}
      className={`project-card fade-in delay-${delay} ${isVisible ? 'visible' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      <div className="proj-header">
        <span className="proj-emoji">{project.emoji}</span>
        <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">GitHub ↗</a>
      </div>
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.desc}</p>
      <ul className="proj-points">
        {project.points.map(p => <li key={p}>✅ {p}</li>)}
      </ul>
      <div className="proj-tech">
        {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i+1} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
