import React, { useState } from 'react'
import 'rbx/index.css'
import 'bulmaswatch/cyborg/bulmaswatch.min.css'
import './App.css'
import { Container } from 'rbx'
import Splash from './components/Splash.js'
import About from './components/About.js'
import Projects from './components/Projects'
import BuiltWith from './components/BuiltWith'
import Navigation from './components/Navigation.js'

const App = () => {
  const [currentView, setCurrentView] = useState('home')

  return (
    <>
      {currentView === 'home' && <Splash />}
      {currentView !== 'home' && (
        <Container id='App'>
          {currentView === 'about' && <About />}
          {currentView === 'projects' && <Projects />}
          {currentView === 'built with' && <BuiltWith />}
        </Container>
      )}
      <Navigation setCurrentView={setCurrentView} />
    </>
  )
}

export default App
