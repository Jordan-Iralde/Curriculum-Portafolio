import { useState } from 'react'
import Header from './app/shared/header/header'
import Footer from './app/shared/footer/footer'
import Home from './app/pages/home/home'
import Projects from './app/pages/projects/projects'
import About from './app/pages/about/about'
import Services from './app/pages/services/services'


import './App.css'

function App() {
  const [section, setSection] = useState<"home" | "projects"| "about"| "services">("home");

  return (
    <>
      <Header setSection={setSection} />
      {section === "home" && <Home />}
      {section === "projects" && <Projects />}
      {section === "about" && <About />}
      {section === "services" && <Services />}
      
      <Footer />
    </>
  )
}

export default App
