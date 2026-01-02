import React from "react"

import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Header from './components/Header'
import Contact from './components/Contact'

import './App.css'

function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <Profile />
        <Skills />



        <Projects />
      </div>
      <Contact />
    </div>
  )
}
export default App;
