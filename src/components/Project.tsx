import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

import "../styles/project.scss";
import "../styles/badges.scss";

interface IProject {
  name: string;
  img?: string;
  video?: string;
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
        {project.img ? (
          <img
            className="projectImg"
            src={`${process.env.PUBLIC_URL}${project.img}`}
            alt={project.name}
            onClick={() => setExpandImage(true)}
          />
        ) : null}
        {project.video ? (
          <video controls>
            <source src={`${process.env.PUBLIC_URL}${project.video}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
        <div className="info">
          <strong>Categoria: </strong>
          {project.categories}
        </div>
        <div className="info">
          <strong>Tecnologias: </strong>
          {project.technologies.map((technology) => (
            <div className="badges" key={technology}>
              <span className={`badge ${technology}`}>{technology}</span>
            </div>
          ))}
        </div>
        <div className="info">
          <strong>Data: </strong>
          {project.date}
        </div>
        <div className="info">
          <strong>Descrição</strong>: {project.description}
        </div>
        {project.link ? (
          <div className="info">
            <strong>Link: </strong>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>
        ) : null}
        {project.repository ? (
          <div className="info">
            <strong>Repositório: </strong>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              {project.repository}
            </a>
          </div>
        ) : null}
        {project.credits ? (
          <div className="info">
            <strong>Créditos: </strong>
            {project.credits}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Project;
