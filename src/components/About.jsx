import { education } from '../i18n'

export default function About({ t, lang }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-grid">
        <div className="about-body">
          {t.about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="about-edu">
          <h3 className="about-edu-title">{t.about.educationTitle}</h3>
          {education.map((e, i) => (
            <div key={i} className="edu-item">
              <div className="edu-school">{e.school[lang]}</div>
              <div className="edu-degree">{e.degree[lang]}</div>
              <div className="edu-meta">
                <span>{e.period}</span>
                <span className="mono">{e.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
