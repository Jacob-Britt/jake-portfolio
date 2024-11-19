import React from 'react';

interface ModdingProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  links: {
    github?: string;
    website?: string;
    download?: string;
  };
}

const ModdingProject: React.FC<ModdingProjectProps> = ({
  title,
  description,
  imageUrl,
  links,
}) => {
  return (
    <div className="modding-project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {links.website && (
          <a href={links.website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
        {links.download && (
          <a href={links.download} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        )}
      </div>
    </div>
  );
};

export default ModdingProject;
