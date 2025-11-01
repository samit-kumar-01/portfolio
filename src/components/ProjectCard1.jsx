import React from 'react';

const ProjectCard = () => {
  const techStack = [
    "Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "React Router",
  ];

  return (
    <div className="w-[40vw] max-w-md mx-auto max-md:w-[70vw] bg-[#111827] p-5 sm:p-6 rounded-2xl border border-purple-800 shadow-[0_0_25px_#9333ea55] hover:scale-[1.02] transition-all duration-300 ease-in-out text-white mb-8">
      <div className="mb-4 sm:mb-6">
        <img
          src="notesSaver.png"
          alt="Notes Saver Project"
          className="rounded-xl w-full h-auto object-cover max-h-[300px] sm:max-h-[400px]"
        />
      </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Notes Saver Web Application</h2>
      <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
        Notes Saver is a simple and efficient web application that allows users to manage their personal notes with ease. Users can add, view, edit, copy, and save notes securely within the app. It provides a clean, responsive, and user-friendly interface for managing daily tasks, ideas, or important information.
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-700 hover:bg-purple-800 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='mt-2 flex justify-center'><a href="https://notessaversamit.netlify.app/"><button  className="cursor-pointer hover:bg-gray-600 px-5 py-2 text-xs font-medium rounded-full bg-gray-800 w-[200px]">View</button></a></div>
    </div>
  );
};

export default ProjectCard;
