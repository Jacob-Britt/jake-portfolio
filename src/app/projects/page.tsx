import React from 'react';
import ProjectsSection from '../ProjectsSection'; // From your ProjectsSection.tsx
import Footer from '../Footer';
import Header from '../Navigation';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;