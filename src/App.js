import React, { useState } from 'react'
import 'rbx/index.css'
import 'bulmaswatch/cyborg/bulmaswatch.min.css'
import './App.css'
import { Container } from 'rbx'
import About from './components/About.js'
import SiteNav from './components/siteNav.js'
import Projects from './components/Projects'
import HeroBanner from './components/HeroBanner.js'

const App = () => {
  const [currentView, setCurrentView] = useState('home')

  return (
    <>
      {currentView === 'home' && <HeroBanner />}
      {currentView !== 'home' && (
        <Container id='App'>
          {currentView === 'about' && <About />}
          {currentView === 'projects' && <Projects />}
        </Container>
      )}
      <SiteNav setCurrentView={setCurrentView} />
    </>
  )
}

export default App
