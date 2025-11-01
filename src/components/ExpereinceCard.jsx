import React from 'react';

const ExperienceCard = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React JS", "Redux",
    "Tailwind CSS"
  ];

  return (
    <div className="w-[40vw]  max-w-md mx-auto max-md:w-[70vw] bg-[#111827] p-6 rounded-2xl border border-purple-800 shadow-[0_0_20px_#9333ea55]  hover:scale-[1.1] transition delay-150 duration-300 ease-in-out text-white">
      {/* Top section with logo and title */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNSXOHBU72r2TcguBLEKQlgT_pMo27iMxzDfwwi=s1360-w1360-h1020-rw"
          alt="Relish"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">Frontend Developer Intern</h3>
          <p className="text-sm text-gray-300">Relish Engineering</p>
          <p className="text-xs text-gray-400 mt-1">June 2025 - july 2025</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4">
       
      </p>

      {/* Skills */}
      <p className="text-sm font-semibold text-gray-200 mb-2">Skills:</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
