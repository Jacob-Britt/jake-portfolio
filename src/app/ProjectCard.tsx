import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  skills: string;
  learnings: string;
  githubLink?: string;

}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, videoSrc, imageSrc, skills, learnings }) => {
  return (
    <div className="project-card-content">
      <div className="project-card-background"></div>
      <div className="project-card-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
        {videoSrc ? (
          <video src={videoSrc} controls preload="none" poster="path/to/placeholder.jpg" aria-label={`Video of ${title}`}></video>
        ) : (
          <img src={imageSrc} alt={title} loading="lazy" />
        )}
        <p>Skills used: {skills}</p>
        <h3>What I learned</h3>
        <p>{learnings}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
