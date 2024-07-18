"use client";

import React from 'react';
import './CSS/header.css';
import './CSS/about.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="header-section relative text-white" id="about">
      <nav>
        <ul>
          <li onClick={() => scrollToSection('projects')}>
            Work
          </li>
          <li onClick={() => scrollToSection('about')}>
            About
          </li>
        </ul>
      </nav>
      <div className="text-center mb-8">
        <h1 className="title-glitch-effect">Jacob Britton</h1>
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
      <div className="about-section text-center p-8 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg mx-8 mb-8">
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          I’m a second-year graduate at the Center Of Geographical Sciences (COGS) in Lawrencetown, Nova Scotia. As a passionate programmer, I am eager to start my career in the industry. I have extensive experience working with various programming languages and am currently working on a project using the Unreal 5 game engine and C#.
        </p>
        <p className="text-lg mb-4">
          My expertise includes web development, software engineering, and game development. I have a strong foundation in JavaScript, React, Node.js, and have also worked with technologies like Python, Java, and Kotlin. My projects range from web applications to interactive games, showcasing my versatility and dedication to learning and growing in the field.
        </p>
        <p className="text-lg mb-4">
          I am actively seeking opportunities where I can apply my skills and contribute to innovative projects. I am particularly interested in roles that involve problem-solving, creativity, and continuous learning.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Jacob-Britt" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg inline-block">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jacob-britton-885965254/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg inline-block">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
