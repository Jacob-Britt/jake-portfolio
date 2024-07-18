import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import ParticlesBackground from './ParticlesBackground';
import './CSS/projects.css';
import './CSS/background-effects.css';
import Index from './Index';
import Footer from './Footer';
import SwiperCore from 'swiper';

const projects = [
  {
    title: 'Oil Well Maintenance AI',
    imageSrc: '/WellSenseAIPoster.png',
    description: `Our capstone project leverages AI to transform the oil and gas sector by enabling proactive maintenance and reducing operational costs. We collect and analyze sensor data to predict potential issues, optimizing performance using public datasets and developing an intuitive user interface for real-time monitoring.`,
    skills: 'Python, AWS, React, Next.js, Machine Learning',
    learnings: 'I honed my skills in data science, machine learning, cloud computing, and front-end development, working with a modern technology stack to create a scalable and user-friendly platform for oil well maintenance.'
  },
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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleIndexClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="projects" className="projects-container full-height">
      <ParticlesBackground />
      <header className="header">
        <div className="logo">Jake</div>
        <nav className="menu">
          <ul>
            <li onClick={() => scrollToSection('projects')}>
              Work
            </li>
            <li onClick={() => scrollToSection('about')}>
              About
            </li>
          </ul>
        </nav>
      </header>
      <Index activeIndex={activeIndex} onIndexClick={handleIndexClick} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        
        onSlideChange={handleSlideChange}
        style={{ width: '100%', height: '100%' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer />
    </div>
  );
};

export default ProjectsSection;
