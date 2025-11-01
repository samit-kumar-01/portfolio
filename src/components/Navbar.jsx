import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" bg-white/10 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/10"
>
      <div className="flex justify-between items-center px-5 py-4">
        <div className="text-xl font-semibold">Samit Kumar</div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="font-light hover:text-purple-400 transition">About</a></li>
          <li><a href="#skills" className="font-light hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#projects" className="font-light hover:text-purple-400 transition">Projects</a></li>
           <li><a href="#experience" className="font-light hover:text-purple-400 transition">Experience</a></li>
          <li><a href="#education" className="font-light hover:text-purple-400 transition">Education</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block font-light hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </div>


      {menuOpen && (
        <div className="md:hidden px-5 pb-4">
          <ul className="flex flex-col gap-3">
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="block font-light hover:text-purple-400 transition">About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} className="block font-light hover:text-purple-400 transition">Skills</a></li>
             <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block font-light hover:text-purple-400 transition">Projects</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)} className="block font-light hover:text-purple-400 transition">Experience</a></li>
           
            <li><a href="#education" onClick={() => setMenuOpen(false)} className="block font-light hover:text-purple-400 transition">Education</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block font-light hover:text-purple-400 transition">Contact</a></li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

