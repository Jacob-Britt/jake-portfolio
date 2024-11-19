"use client"
import { useState } from 'react';
import './CSS/navigation.css';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <span className="nav-logo">Jake Britton</span>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}>
          <li className="nav-item">
            <a href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
