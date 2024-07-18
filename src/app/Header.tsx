"use client";

import React from 'react';
import './CSS/header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="header-section relative text-white" id="about">
      <nav className="absolute left-8 top-8">
        <ul className="space-y-2 text-left">
          <li
            className="text-lg font-semibold cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection('projects')}
          >
            Work
          </li>
          <li
            className="text-lg font-semibold cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection('about')}
          >
            About
          </li>
        </ul>
      </nav>
      <div className="text-center mb-8">
        <h1 className="text-6xl font-semibold mb-4 animate-glitch">Jacob's Portfolio</h1>
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg mx-auto mb-8">
          <img src="/jake.jpg" alt="Jacob" className="object-cover w-full h-full animate-glitch" />
        </div>
        <a
          href="/JacobBrittonResume.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg inline-block transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          download
        >
          Download Resume
        </a>
      </div>
      <div className="absolute bottom-8 left-8 text-lg font-semibold animate-pulse">
        Scroll Down
      </div>
      <div className="about-section text-center p-8 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg mx-8 mb-8">
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-lg mb-4">I’m a second-year graduate at the Center Of Geographical Sciences (COGS) in Lawrencetown, Nova Scotia. I’m a passionate Programmer looking for a career in the industry. I have worked with many different programming languages. I’m currently working on a project using the Unreal 5 game engine and C#.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg inline-block">GitHub</a>
          <a href="https://www.linkedin.com/in/jacob-britton-885965254/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg inline-block">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
