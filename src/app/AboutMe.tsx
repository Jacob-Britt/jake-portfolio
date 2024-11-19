import React from 'react';
import './CSS/about.css';

const AboutMe = () => {
  return (
    <section className="about-content">
      <h1>Hello, I'm <span>Jake</span></h1>
      <p>
        I recently completed my IT Programming Diploma at NSCC COGS, where I developed a
        passion for creating high-quality user interfaces and innovative applications. I thrive in
        collaborative environments and am committed to continuous learning and staying ahead of the latest
        trends in software development.
      </p>
      <div className="action-buttons">
        <a href="/JacobBrittonResume.pdf" className="button primary" download>
          Resume
        </a>
        <a href="#projects" className="button secondary">
          Projects
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
