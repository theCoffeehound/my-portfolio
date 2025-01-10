import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <img src={project.thumbnail} alt={project.name} />
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
    </div>
  );
};

export default ProjectDetails;
