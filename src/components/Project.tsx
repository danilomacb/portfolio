import React from "react";

import "../styles/project.scss";

interface IProject {
  name: string;
  img: string;
  categories: string;
  technologies: string;
  description: string;
  link?: string;
  repository?: string;
}

function Project({ project }: { project: IProject }) {
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={`${process.env.PUBLIC_URL}${project.img}`} alt={project.name} />
      <p>
        <strong>Categorias: </strong>
        {project.categories}
      </p>
      <p>
        <strong>Tecnologias: </strong>
        {project.technologies}
      </p>
      <p>
        <strong>Descrição</strong>: {project.description}
      </p>
      {project.link ? (
        <p>
          <strong>Link: </strong>
          <a href={project.link}>{project.link}</a>
        </p>
      ) : null}
      {project.repository ? (
        <p>
          <strong>Repositório: </strong>
          <a href={project.repository}>{project.repository}</a>
        </p>
      ) : null}
    </div>
  );
}

export default Project;
