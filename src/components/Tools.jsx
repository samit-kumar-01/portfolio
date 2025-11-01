import React from 'react';

const Tools = () => {
  const tools = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
  ];

  return (
    <div className="w-[90vw] max-w-md mx-auto bg-[#111827] p-6 rounded-2xl border border-purple-800 shadow-[0_0_20px_#9333ea55]">
      <h2 className="text-center text-gray-300 text-2xl font-semibold mb-6">Tools</h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 border border-gray-600 rounded-xl hover:bg-gray-800 transition shadow-[0_0_10px_#9333ea33]"
          >
            <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
            <span className="text-white text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;

