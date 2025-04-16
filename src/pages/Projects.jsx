import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/projects.json";
import { useLanguage } from "../context/LanguageContext";
import languageData from "../data/language.json";
import "../styles/Projects.css"; // Import CSS

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
  "C#": { bg: "#239120", text: "#FFFFFF" },
  Unity: { bg: "#000000", text: "#FFFFFF" },
  Blender: { bg: "#F5792A", text: "#FFFFFF" },
  Figma: { bg: "#F24E1E", text: "#FFFFFF" },
  "Adobe XD": { bg: "#FF61F6", text: "#FFFFFF" }

};

const Projects = () => {
  const { language } = useLanguage();
  const texts = languageData[language];
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedTech, setSelectedTech] = useState("");

  const projects = data.projects;

  const sortedProjects = [...projects].sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  const filteredProjects = selectedTech
    ? sortedProjects.filter((project) => project.technologies.includes(selectedTech))
    : sortedProjects;

  return (
    <div className="projects-container">
      <h2 className="projects-title">{texts.projects.title}</h2>

      <div className="projects-controls">
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">{texts.projects.sortNewest}</option>
          <option value="oldest">{texts.projects.sortOldest}</option>
        </select>
        <select onChange={(e) => setSelectedTech(e.target.value)}>
          <option value="" disabled selected>{texts.projects.selectTechnology}</option>
          <option value="">{texts.projects.allTechnologies}</option>
          {[...new Set(projects.flatMap((p) => p.technologies))].map((tech) => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.images[0]} alt={project.title[language]} className="project-image" />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title[language]}</h3>
              <p className="project-description">{project.description[language]}</p>
              {/* <p className="project-meta">{texts.projects.technologies}:</p> */}
              {/* <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge"
                    style={{
                      backgroundColor: techColors[tech]?.bg || "#ccc",
                      color: techColors[tech]?.text || "#000"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
              {/* <p className="project-meta">{project.context[language]}</p> */}
              {/* <p className="project-meta">Date: {project.date}</p> */}
              <Link to={`/projects/${project.slug}`} rel="noopener noreferrer" className="project-link">
                {texts.readMore}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
