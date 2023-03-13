import React from 'react'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import HangingEmail from './components/HangingEmail'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='relative bg-gradient-to-r from-[rgba(245,245,245,.8)] to-[rgba(245,245,245,.8)]'>
      <HangingEmail />
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App