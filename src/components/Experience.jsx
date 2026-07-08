import { experience } from '../i18n'

export default function Experience({ t, lang }) {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">{t.experience.title}</h2>
      <div className="timeline">
        {experience.map((job, i) => {
          const end = job.endKey ? t.experience[job.endKey] : job.end
          return (
            <div key={i} className={`timeline-item${job.current ? ' is-current' : ''}`}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="job-head">
                  <h3 className="job-role">
                    {job.role[lang]}
                    <span className="job-company"> · {job.company}</span>
                  </h3>
                  <span className="job-period mono">
                    {job.start} – {end}
                  </span>
                </div>
                <div className="job-location">{job.location[lang]}</div>
                <ul className="job-bullets">
                  {job.bullets[lang].map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
