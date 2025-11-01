import React from 'react'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <div id='education'  className='w-[80vw]  mt-15 m-auto pt-20 '>
         <div className=' text-center'>
      <h2 className='text-3xl font-bold text-white sm:text-4xl'>EDUCATION</h2>
      <p className='text-white font-light mt-3'>My education has been a journey of learning and development. Here are the details of my academic background</p>
        </div>
       <div className='mt-7.5 w-[80%] m-auto flex items-center justify-center'>
            <EducationCard/>
        </div>
      
    </div>
  )
}

export default Education
