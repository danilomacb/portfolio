import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/sidebar.scss";
import projects from "../projects.json";

function SideBar() {
  return (
    <nav>
      <div id="profile">
        <img src={`${process.env.PUBLIC_URL}/images/perfil.png`} alt="Perfil" />
        <h1>Danilo Macedo Bakun</h1>
        <ul id="profileDescription">
          <li>Desenvolvedor FullStack JavaScript</li>
          <li>Stack React + Node</li>
          <li>Usuário de distros Linux baseadas em Ubuntu</li>
        </ul>
      </div>

      <div id="socials">
        <a href="https://github.com/danilomacb">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/danilomacb">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.facebook.com/danilomacb">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://twitter.com/danilomacb">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="mailto:danilo.macb@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>

      <ul>
        {projects.map((project) => (
          <li key={project.name}>{project.name}</li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
