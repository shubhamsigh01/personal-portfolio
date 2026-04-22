import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <p className="text-2xl font-bold text-gradient">SK.</p>
          <p className="text-sm text-gray-500 mt-2">© 2024 Shubham Kumar. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-3">
            <p className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</p>
            <a href="#about" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">Projects</a>
          </div>
          
          <div className="flex flex-col space-y-3">
            <p className="text-sm font-semibold text-white uppercase tracking-wider">Social</p>
            <a href="https://github.com/shubhamsigh01" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/shubham-kumar-89674a295" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
        <p className="text-xs text-gray-600">Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;
