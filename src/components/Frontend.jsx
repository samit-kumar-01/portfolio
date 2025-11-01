import React from 'react';

const FrontendSkills = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
   
  ];

  return (
    <div className="w-[40vw] max-w-md mx-auto bg-[#111827] p-6 rounded-2xl border border-purple-800 shadow-[0_0_20px_#9333ea55]  max-md:w-[70vw] hover:scale-[1.1] transition delay-150 duration-300 ease-in-out ">
      <h2 className="text-center text-gray-300 text-2xl font-semibold mb-6">Frontend</h2>
      <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
            <span className="text-white text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendSkills;
