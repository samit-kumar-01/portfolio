import React from 'react'

const About = () => {
  return (
    
  <div id='about' className="w-[90vw] max-w-6xl mx-auto mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 pt-20 ">
  
  <div className="w-full md:w-[50%] text-center md:text-left">
    <h1 className="text-5xl max-sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-2">Hi, I am</h1>
    <h1 className="text-5xl max-sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4">Samit Kumar</h1>
    <p className="text-white text-3xl mb-2">
      I am a <span className="text-purple-600 font-semibold">Full Stack Developer</span>
    </p>
    <p className="text-white font-light mb-4 text-2xl max-sm:text-sm">
      I’m a passionate MERN Stack Developer skilled in building responsive, full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy learning new technologies and creating efficient, user-friendly digital experiences.
     
    </p>
  
  </div>

 
  <div className="w-full md:w-[40%] flex justify-center">
   <img
  src="photo.jpg"
  alt="Samit Kumar"
  className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg hover:scale-[1.2] transition delay-150 duration-300 ease-in-out"
/>

  </div>
</div>
    
  )
}

export default About
