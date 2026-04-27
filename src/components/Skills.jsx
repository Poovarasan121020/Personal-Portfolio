import useInView from '../hooks/useInView'
import { skills, skillBars } from '../data/portfolioData'
import './Skills.css'

function SkillBar({ name, level, isVisible }) {
  return (
    <div className="skill-bar-item">
      <div className="bar-label"><span>{name}</span><span>{level}%</span></div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: isVisible ? `${level}%` : '0%' }} />
      </div>
    </div>
  )
}

function Skills() {
  const { ref: tagsRef, isVisible: tagsVis } = useInView()
  const { ref: barsRef, isVisible: barsVis } = useInView()

  return (
    <section className="section section-dark" id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>

        {/* Tag chips */}
        <div ref={tagsRef} className={`tags-grid fade-in ${tagsVis ? 'visible' : ''}`}>
          {Object.entries(skills).map(([cat, tags]) => (
            <div key={cat} className="skill-category">
              <h4>{cat}</h4>
              <div className="tag-row">
                {tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bars */}
        <div ref={barsRef} className={`bars-box fade-in ${barsVis ? 'visible' : ''}`}>
          {skillBars.map(bar => (
            <SkillBar key={bar.name} name={bar.name} level={bar.level} isVisible={barsVis} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
