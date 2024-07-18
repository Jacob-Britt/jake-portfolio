import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './CSS/projects.css';

const projects = [
  {
    title: 'Droid-Sync',
    description: 'This is a project in the works that takes an audio file from your phone and plays it inside the app.',
    videoSrc: '/Droid-Sync.mp4',
    skills: 'Java, Android Studio, XML, Kotlin',
    learnings: 'I learned how to use Android Studio and how to use Kotlin, making use of internal file access and the default media player in Android.'
  },
  {
    title: 'Unreal 5 Project',
    description: 'This project was a tutorial I followed on UNFGames.com, where I delved into the fundamentals of terrain editing in Unreal 5 and learned how to manipulate models within the engine.',
    imageSrc: '/SnowyTerrain.png',
    skills: 'Unreal 5, C++, C#',
    learnings: 'Throughout this experience, I gained a profound understanding of Unreal Engine 5, mastering the art of crafting terrains and seamlessly integrating and manipulating models. It was an enriching journey that expanded my skills and vision within the realm of game development.'
  },
  {
    title: 'Java Calculator App',
    description: 'In this project, I made a calculator in Java having the basic functionality of a calculator.',
    imageSrc: '/Calc.png',
    skills: 'Java',
    learnings: 'I learned how to use Java GUI elements and gained a better understanding of Java classes and methods.'
  }
];

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectContainerRef.current) {
      const projectWidth = projectContainerRef.current.offsetWidth;
      projectContainerRef.current.scrollTo({
        left: projectWidth * currentIndex,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div id="projects" className="projects-container relative h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div ref={projectContainerRef} className="projects-content flex h-full">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${currentIndex === index ? 'highlighted' : 'dimmed'}`}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
