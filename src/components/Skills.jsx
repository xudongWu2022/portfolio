import { skills } from '../i18n'

export default function Skills({ t, lang }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-group">
            <h3 className="skill-group-title">{s.group[lang]}</h3>
            <div className="tag-row">
              {s.items.map((item) => (
                <span key={item} className="tag mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
