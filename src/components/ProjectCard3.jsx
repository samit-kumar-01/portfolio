import React from "react";

const ProjectCard3 = () => {
  const techStack = [
    "MongoDB",
    "Express.js",
    "Node.js",
    "Bootstrap",
  ];

  return (
    <div className="w-[40vw] max-w-md mx-auto max-md:w-[70vw] bg-[#111827] p-5 sm:p-6 rounded-2xl border border-purple-800 shadow-[0_0_25px_#9333ea55] hover:scale-[1.02] transition-all duration-300 ease-in-out text-white mb-8">
      
      {/* Project Image */}
      <div className="mb-4 sm:mb-6">
        <img
          src="Wanderlust.png"
          alt="WanderLust Project Preview"
          className="rounded-xl w-full h-auto object-cover max-h-[300px] sm:max-h-[400px]"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-2">WanderLust</h2>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
        A travel listing platform where users can explore, create, and manage
        unique stay listings across the world. Built using Node.js, Express,
        MongoDB, and Bootstrap with dynamic authentication and image uploads.
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-700 hover:bg-purple-800 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Button */}
      <div className="mt-3 font-medium px-5 py-2 rounded-full w-[50%] text-center m-auto bg-gray-800 hover:bg-gray-700 transition-all duration-300">
        <a href="https://project-vbic.onrender.com/listings" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard3;

