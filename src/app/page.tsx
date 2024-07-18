"use client";

import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import SoftSkillsSection from './SoftSkillsSection';
import Footer from './Footer';
import './CSS/page.css';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('projects');

  useEffect(() => {
    const adjustSectionHeights = () => {
      const sections = document.querySelectorAll('.full-height');
      sections.forEach((section) => {
        const element = section as HTMLElement;
        element.style.height = `${window.innerHeight}px`;
      });
    };

    const handleFullscreenChange = () => {
      adjustSectionHeights();
    };

    window.addEventListener('resize', adjustSectionHeights);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // Initial adjustment
    adjustSectionHeights();

    return () => {
      window.removeEventListener('resize', adjustSectionHeights);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId); // Set the active section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Header />
      {activeSection === 'projects' && (
        <section id="projects" className="full-height">
          <ProjectsSection />
        </section>
      )}
      {activeSection === 'skills' && (
        <section id="skills" className="full-height">
          <SkillsSection />
        </section>
      )}
      {activeSection === 'soft-skills' && (
        <section id="soft-skills" className="full-height">
          <SoftSkillsSection />
        </section>
      )}
      {activeSection === 'contact' && (
        <section id="contact" className="full-height">
          <Footer />
        </section>
      )}
    </div>
  );
};

export default Home;
