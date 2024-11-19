import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileBanner: React.FC = () => {
  return (
    <section className="profile-banner">
      <div className="profile-card">
        <img src="/Jake.jpg" alt="Jake" className="profile-image" />
        <h2 className="profile-name">Jake Britton</h2>
        <h3 className="profile-title">Software Developer</h3>
        <div className="social-icons">
        <a href="https://github.com/Fourthguyin" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/jacob-britton" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileBanner;
