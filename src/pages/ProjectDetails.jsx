import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import '../styles/ProjectDetails.css';
import ProjectImages from '../components/ProjectImage';

const techColors = {
  React: { bg: "#61DAFB", text: "#000000" },
  JavaScript: { bg: "#F7DF1E", text: "#000000" },
  TypeScript: { bg: "#3178C6", text: "#FFFFFF" },
  "Node.js": { bg: "#8CC84B", text: "#000000" },
  "Express.js": { bg: "#000000", text: "#FFFFFF" },
  "MERN Stack": { bg: "#61DAFB", text: "#000000" },
  RTC: { bg: "#333333", text: "#FFFFFF" },
  Python: { bg: "#3776AB", text: "#FFFFFF" },
  NodeJS: { bg: "#8CC84B", text: "#000000" },
  CSS: { bg: "#264DE4", text: "#FFFFFF" },
  HTML: { bg: "#E34F26", text: "#FFFFFF" },
  MongoDB: { bg: "#4DB33D", text: "#FFFFFF" },
  PostgreSQL: { bg: "#336791", text: "#FFFFFF" },
  Express: { bg: "#000000", text: "#FFFFFF" },
  Flask: { bg: "#000000", text: "#FFFFFF" },
  GraphQL: { bg: "#E10098", text: "#FFFFFF" },
  MaterialUI: { bg: "#0081CB", text: "#FFFFFF" },
  Bootstrap: { bg: "#7952B3", text: "#FFFFFF" },
  TailwindCSS: { bg: "#38B2AC", text: "#FFFFFF" },
  Docker: { bg: "#2496ED", text: "#FFFFFF" },
  Azure: { bg: "#0089D6", text: "#FFFFFF" },
  Vercel: { bg: "#000000", text: "#FFFFFF" },
  GitHub: { bg: "#181717", text: "#FFFFFF" },
  Auth0: { bg: "#EB5424", text: "#FFFFFF" },
  "Next.js": { bg: "#000000", text: "#FFFFFF" },
  Electron: { bg: "#47848F", text: "#FFFFFF" },
  Java: { bg: "#007396", text: "#FFFFFF" },
  "C#": { bg: "#68217A", text: "#FFFFFF" },
  Unity: { bg: "#000000", text: "#FFFFFF" },
  Blender: { bg: "#F5792A", text: "#FFFFFF" },
  Figma: { bg: "#F24E1E", text: "#FFFFFF" },
  "Adobe XD": { bg: "#FF61F6", text: "#FFFFFF" }

};

const ProjectDetails = () => {
  const { slug } = useParams();
  const { language } = useLanguage();

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  // Set the first image or use a placeholder if no images
  const projectImage = project.images && project.images.length > 0
    ? project.images[0]
    : "https://picsum.photos/400/300";

  const title = project.title[language] || project.title.en;
  const description = project.description[language] || project.description.en;
  const context = project.context[language] || project.context.en;

  return (
    <div className="a-project-details">
      {/* <div className="back-button">
        <Link to="/projects" className="back-link">{language === "en" ? "< Back" : " < Takaisin"}</Link>
      </div> */}
      <h1>{title}</h1>

      <div className="project-images-container">
        <ProjectImages project={project} />
      </div>

      <div className="project-description">
        <h3>{language === 'en' ? 'Description: ' : 'Kuvaus: '}</h3>
        <p>{description || 'No description available for this project.'}</p>
      </div>

      {/* Context */}
      <div className="project-context">
        <h3>
          <strong>
            {language === 'en' ? 'When / Where done: ' : 'Milloin / Missä tehty: '}
          </strong>
        </h3>
        <p>{context || 'No context available for this project.'}</p>
      </div>

      <div className="project-technologies">
        <h3>{language === 'en' ? 'Technologies Used: ' : 'Käytetyt teknologiat: '}</h3>
        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
              style={{
                backgroundColor: techColors[tech]?.bg || "#ccc",
                color: techColors[tech]?.text || "#000",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <div className="project-chapters">
        {project.chapters.map((chapter, index) => (
          <div key={index} className="chapter">
            <h3>{chapter.title[language] || chapter.title.en}</h3>
            <p>{chapter.content[language] || chapter.content.en}</p>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="project-links">
        {project.linkToApp &&
          !project.linkToApp.includes("example.com") && (
            <a
              href={project.linkToApp}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link app-link"
            >
              {language === 'en' ? 'Try the app ' : 'Kokeile sovellusta'}
              <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="1rem" fill="#f2f4f6">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a>
          )}
        {project.linkToGithub &&
          !project.linkToGithub.includes("username") && (
            <a
              href={project.linkToGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              {language === 'en' ? 'View on GitHub' : 'Katso GitHubissa'}
              <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="1rem" fill="#f2f4f6">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
              </svg>
            </a>
          )}
      </div>

    </div>
  );
};

export default ProjectDetails;
