import React from 'react';

const LanguagesSkills = () => {
  const languages = [
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ];

  return (
    <div className="w-[40vw] max-w-md mx-auto bg-[#111827] p-6 rounded-2xl border border-purple-800 shadow-[0_0_20px_#9333ea55] hover:scale-[1.1] transition delay-150 duration-300 ease-in-out max-md:w-[70vw] ">
      <h2 className="text-center text-gray-300 text-2xl font-semibold mb-6">Languages</h2>
      <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            <img src={lang.icon} alt={lang.name} className="w-6 h-6" />
            <span className="text-white text-sm">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSkills;
