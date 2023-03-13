import React from 'react'
import AboutMe from './components/AboutMe'
import HangingEmail from './components/HangingEmail'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='relative bg-gradient-to-r from-[rgba(245,245,245,.8)] to-[rgba(245,245,245,.8)]'>
      <HangingEmail />
      <NavBar />
      <Hero />
      <AboutMe />
     

    </div>
  )
}

export default App