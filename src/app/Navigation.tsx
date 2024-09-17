"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import './CSS/navigation.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-header">
          <button className="nav-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <ul className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <li className="nav-item">
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              About  
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;