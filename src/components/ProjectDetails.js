import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      {project.sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </div>
      ))}
      <a href={project.url} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectDetails;
