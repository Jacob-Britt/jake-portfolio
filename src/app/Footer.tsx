import React from 'react';
import './CSS/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Jacob Britton</h2>
        <p>Software Developer</p>
      </div>
      <div className="footer-section">
        <h2>Contact Me</h2>
        <p>
          You can reach me at{" "}
          <a href="mailto:jacobabritton@gmail.com">jacobabritton@gmail.com</a>
        </p>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/Jacob-Britt" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jacob-britton-885965254/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
