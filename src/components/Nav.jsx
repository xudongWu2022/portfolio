import { profile } from '../i18n'

export default function Nav({ t, lang, toggleLang }) {
  return (
    <header className="nav">
      <a href="#top" className="nav-brand">
        <span className="nav-brand-dot" />
        {profile.name}
      </a>
      <nav className="nav-links">
        <a href="#about">{t.nav.about}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#skills">{t.nav.skills}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>
      <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
        {t.langLabel}
      </button>
    </header>
  )
}
