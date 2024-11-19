import React from 'react';
import Header from './Navigation';
import Footer from './Footer';
import ProjectsSection from './ProjectsSection';
import ProfileBanner from './ProfileBanner';
import AboutMe from './AboutMe';

const Home: React.FC = () => {
  return (
    <>
      <section className="profile-layout">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
        />
        <ProfileBanner />
        <AboutMe />
        
      </section>
      <ProjectsSection />
    </>
  );
};

export default Home;


