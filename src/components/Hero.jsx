import { profile } from '../i18n'

export default function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">{t.hero.role}</p>
      <h1 className="hero-name">
        {profile.name}
        <span className="hero-alt">{profile.altName}</span>
      </h1>
      <p className="hero-tagline">{t.hero.tagline}</p>
      <div className="hero-meta">
        <span>📍 {profile.location}</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          ↗ github.com/{profile.githubHandle}
        </a>
      </div>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          {t.hero.viewProjects}
        </a>
        <a href="#contact" className="btn btn-ghost">
          {t.hero.getInTouch}
        </a>
      </div>
    </section>
  )
}
