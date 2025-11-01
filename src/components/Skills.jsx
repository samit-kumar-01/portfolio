import React from 'react'
import FrontendSkills from './Frontend'
import LanguagesSkills from './Languages'
import Tools from './Tools'
import BackendCard from './BackendCard'

const Skills = () => {
  return (
    <div id='skills' className='w-[90vw]  flex-col items-center mt-30 m-auto pt-20 '>
        <div className=' text-center'>
      <h2 className='text-3xl font-bold text-white sm:text-4xl'>SKILLS</h2>
      <p className='text-white font-light mt-3'>A collection of my technical skills and expertise honed through various projects and experiences</p>
        </div>
    <div className='flex justify-center items-center  w-[80%] m-auto gap-7 mt-8 max-md:flex-col '>
        <FrontendSkills/>
        <LanguagesSkills/>
    </div>
   <div className="mt-7 w-[80%] m-auto flex flex-wrap items-center justify-center gap-6">
  <div className="transform transition-transform duration-300 ease-in-out hover:scale-105">
    <Tools />
  </div>
  <div className="transform transition-transform duration-300 ease-in-out hover:scale-105">
    <BackendCard />
  </div>
</div>

    </div>
  )
}

export default Skills
