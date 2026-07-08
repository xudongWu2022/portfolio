import { profile } from '../i18n'

export default function Footer({ t }) {
  return (
    <footer id="contact" className="footer">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="footer-body">{t.contact.body}</p>
      <div className="footer-actions">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          {t.contact.emailBtn}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
          {t.contact.githubBtn} ↗
        </a>
      </div>
      <div className="footer-meta mono">
        <span>{profile.email}</span>
        <span>·</span>
        <span>{profile.location}</span>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} {profile.name} ({profile.altName}). {t.footer.built}
      </div>
    </footer>
  )
}
