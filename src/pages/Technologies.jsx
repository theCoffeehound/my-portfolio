
import React from 'react';

const Technologies = () => {
  const techStack = ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML'];

  return (
    <div className="technologies">
      <h1>Technologies I Use</h1>
      <ul>
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;
