import { useState } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import toast,{Toaster} from 'react-hot-toast'


function App() {
  return (
    <>
       <Navbar/>
       <About/>
       <Skills/>
       <Projects/>
       <Experience/>
       <Education/>
       <Contact/>
       <Toaster/>
    </>
  )
}

export default App
