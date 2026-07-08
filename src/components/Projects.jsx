import { projects } from '../i18n'

function ProjectCard({ project, t, lang }) {
  return (
    <article className="project-card">
      <div className="project-head">
        <h3 className="project-name mono">{project.name}</h3>
        {project.badge ? (
          <span className="project-badge">{project.badge[lang]}</span>
        ) : project.local ? (
          <span className="project-badge">{t.projects.localNote}</span>
        ) : null}
      </div>
      {project.role ? <div className="project-role mono">{project.role[lang]}</div> : null}
      <p className="project-summary">{project.summary[lang]}</p>
      <p className="project-desc">{project.description[lang]}</p>
      {project.roadmap ? (
        <p className="project-roadmap">
          <span className="roadmap-label">{t.projects.roadmap}</span>
          {project.roadmap[lang]}
        </p>
      ) : null}
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag} className="tag mono">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-actions">
        {project.site ? (
          <a href={project.site} target="_blank" rel="noreferrer" className="btn btn-small">
            {t.projects.visitSite} ↗
          </a>
        ) : (
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-small">
            {t.projects.viewGithub} ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects({ t, lang }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t.projects.title}</h2>
      <p className="section-subtitle">{t.projects.subtitle}</p>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} t={t} lang={lang} />
        ))}
      </div>
    </section>
  )
}
