import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

import "../styles/project.scss";

const badges: IBadge = require("../badges.json");

interface IBadge {
  [key: string]: { link: string; alt: string };
}

interface IProject {
  name: string;
  img: string;
  categories: string;
  technologies: Array<string>;
  date: string;
  description: string;
  link?: string;
  repository?: string;
  credits?: string;
}

function Project({ project }: { project: IProject }) {
  const [expandImage, setExpandImage] = useState(false);

  return (
    <>
      {expandImage ? (
        <Lightbox
          mainSrc={`${process.env.PUBLIC_URL}${project.img}`}
          onCloseRequest={() => setExpandImage(false)}
        />
      ) : null}

      <div className="project">
        <h1>{project.name}</h1>
        <img
          className="projectImg"
          src={`${process.env.PUBLIC_URL}${project.img}`}
          alt={project.name}
          onClick={() => setExpandImage(true)}
        />
        <p>
          <strong>Categorias: </strong>
          {project.categories}
        </p>
        <p>
          <strong>Tecnologias: </strong>
          {project.technologies.map((technology) => (
            <img
              className="badge"
              key={badges[technology].alt}
              src={badges[technology].link}
              alt={badges[technology].alt}
            />
          ))}
        </p>
        <p>
          <strong>Data: </strong>
          {project.date}
        </p>
        <p>
          <strong>Descrição</strong>: {project.description}
        </p>
        {project.link ? (
          <p>
            <strong>Link: </strong>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </p>
        ) : null}
        {project.repository ? (
          <p>
            <strong>Repositório: </strong>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              {project.repository}
            </a>
          </p>
        ) : null}
        {project.credits ? (
          <p>
            <strong>Créditos: </strong>
            {project.credits}
          </p>
        ) : null}
      </div>
    </>
  );
}

export default Project;
