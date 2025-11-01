import React from 'react';

const ProjectCard2 = () => {
  const techStack = [
    "Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "React Router",
  ];

  return (
    <div className="w-[40vw] max-w-md mx-auto max-md:w-[70vw] bg-[#111827] p-5 sm:p-6 rounded-2xl border border-purple-800 shadow-[0_0_25px_#9333ea55] hover:scale-[1.02] transition-all duration-300 ease-in-out text-white mb-8">
      <div className="mb-4 sm:mb-6">
        <img
          src="EmployeeSystem.png"
          alt="Employee Management System"
          className="rounded-xl w-full h-auto object-cover max-h-[300px] sm:max-h-[400px]"
        />
      </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Employee Management System</h2>
      <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
        A web app where admins can assign tasks to employees, and employees can mark tasks as Completed or Failed. Includes separate login, admin, and employee dashboards. Admins can monitor all employee task statuses in real-time.
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
      <div className='mt-3 font-medium px-5 py-2 rounded-full w-[50%] text-center m-auto bg-gray-800'>
        In Progress...
      </div>
    </div>
  );
};

export default ProjectCard2;
