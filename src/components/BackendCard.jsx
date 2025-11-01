import React from "react";
import { SiNodedotjs, SiExpress, SiMysql, SiMongodb } from "react-icons/si";

const BackendCard = () => {
  return (
    <div className="bg-[#111827] border border-purple-800 shadow-[0_0_20px_#9333ea55] rounded-2xl p-6 text-center  w-[320px] sm:w-[400px] mx-auto">
      <h2 className="text-gray-300 text-2xl font-semibold mb-6">Backend</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Node JS */}
        <div className="flex items-center justify-center gap-2 bg-[#121826] border border-gray-700 rounded-full py-2 px-4 hover:bg-[#161d2b] transition-all">
          <SiNodedotjs className="text-green-500 text-xl" />
          <span className="text-gray-300 text-sm font-medium">Node JS</span>
        </div>

        {/* Express JS */}
        <div className="flex items-center justify-center gap-2 bg-[#121826] border border-gray-700 rounded-full py-2 px-4 hover:bg-[#161d2b] transition-all">
          <SiExpress className="text-gray-200 text-xl" />
          <span className="text-gray-300 text-sm font-medium">Express JS</span>
        </div>

        {/* MySQL */}
        <div className="flex items-center justify-center gap-2 bg-[#121826] border border-gray-700 rounded-full py-2 px-4 hover:bg-[#161d2b] transition-all">
          <SiMysql className="text-sky-400 text-xl" />
          <span className="text-gray-300 text-sm font-medium">MySQL</span>
        </div>

        {/* MongoDB */}
        <div className="flex items-center justify-center gap-2 bg-[#121826] border border-gray-700 rounded-full py-2 px-4 hover:bg-[#161d2b] transition-all">
          <SiMongodb className="text-green-400 text-xl" />
          <span className="text-gray-300 text-sm font-medium">MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default BackendCard;
