import React from 'react';

const softSkills = [
  { name: 'Communication', description: 'I love being able to communicate in a friendly manner with colleagues and build good relationships' },
  { name: 'Problem Solving', description: 'I have the ability to learn things on the fly and apply them quickly' },
  { name: 'Teamwork', description: 'Along with my communication skills, I fit into teams quite well and enjoy working together.' },
];

const SoftSkillsSection: React.FC = () => {
  return (
    <section className="mb-8 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">Soft Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {softSkills.map((skill, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
            <p className="text-gray-300 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkillsSection;