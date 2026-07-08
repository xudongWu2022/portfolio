import { useState } from 'react'
import { strings } from './i18n'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = strings[lang]
  const toggleLang = () => setLang((l) => (l === 'en' ? 'zh' : 'en'))

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <Nav t={t} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <About t={t} lang={lang} />
        <Projects t={t} lang={lang} />
        <Experience t={t} lang={lang} />
        <Skills t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </>
  )
}
