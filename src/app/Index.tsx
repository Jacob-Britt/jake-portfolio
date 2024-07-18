import React from 'react';
import './CSS/index.css';

const projects = [
  'Oil Well Maintenance AI',
  'Droid-Sync',
  'Unreal 5 Project',
  'Java Calculator App',
];

interface IndexProps {
  activeIndex: number;
  onIndexClick: (index: number) => void;
}

const Index: React.FC<IndexProps> = ({ activeIndex, onIndexClick }) => {
  return (
    <div className="index-container">
      <h2>Index</h2>
      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => onIndexClick(index)}
          >
            <span>{project}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
