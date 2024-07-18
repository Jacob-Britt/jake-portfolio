import React from 'react';
import './CSS/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2 className="footer-title">Jacob Britton</h2>
          <p className="footer-subtitle">Software Developer</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Contact Me</h2>
          <p>You can reach me at <a href="mailto:jacobabritton@gmail.com" className="footer-link">jacobabritton@gmail.com</a></p>
        </div>
        <div className="footer-icons">
          <a href="https://github.com/jacobabritton" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/jacobabritton" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
