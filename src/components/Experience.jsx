import React from 'react'
import ExperienceCard from './ExpereinceCard'

const Experience = () => {
  return (
    <div id='experience' className='w-[90vw] mt-15 m-auto pt-20 '>
       <div className=' text-center'>
      <h2 className='text-3xl font-bold text-white sm:text-4xl'>EXPERIENCE</h2>
      <p className='text-white font-light mt-3'>A collection of my work experience and the roles I have taken in various organizations</p>
        </div>
        <div className='mt-8 '>
     <ExperienceCard/>
        </div>
       
    </div>
  )
}

export default Experience
