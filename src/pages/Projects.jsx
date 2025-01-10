import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/projects.json'; // Correct import

const Projects = () => {
  const projects = data.projects; // Correctly access the 'projects' array

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.thumbnail} alt={project.name} />
            <h2>{project.name}</h2>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
