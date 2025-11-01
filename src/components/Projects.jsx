import React from 'react'
import ProjectCard from './ProjectCard1'
import ProjectCard2 from './ProjectCard2'
import ProjectCard3 from './ProjectCard3'

const Projects = () => {
  return (
    <div id='projects' className='mt-15 w-[80vw] m-auto pt-20'>
      <div className=' text-center'>
      <h2 className='text-3xl font-bold text-white sm:text-4xl'>PROJECTS</h2>
      <p className='text-white font-light mt-3'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
        </div>
         <div className='mt-7.5 w-[80%] m-auto flex-col items-center justify-center'>
        <ProjectCard/>
        <ProjectCard3/>
        <ProjectCard2/>
        
    </div>
    </div>
  )
}

export default Projects
