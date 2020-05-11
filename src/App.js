import React, { useState } from 'react'
import './App.css'
import About from './components/about.js'
import Header from './components/header.js'
import Projects from './components/projects'

const App = () => {
  const [currentView, setCurrentView] = useState('about')

  return (
    <div className='App'>
      <Header setCurrentView={setCurrentView} />
      <div id='main'>
        <div id='frost'>
          <h1>Hey there! I'm Sean, and I write code.</h1>
          {currentView === 'about' && <About />}
          {currentView === 'projects' && <Projects />}
        </div>
      </div>
    </div>
  )
}

export default App
