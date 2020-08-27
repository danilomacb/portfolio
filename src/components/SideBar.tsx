import React from "react";

import "../styles/sidebar.scss";
import projects from "../projects.json";

function SideBar() {
  return (
    <nav>
      <img src={`${process.env.PUBLIC_URL}/images/perfil.png`} alt="Perfil"/>
      <h1>Danilo Macedo Bakun</h1>
      <ul id="profileDescription">
        <li>Desenvolvedor FullStack JavaScript</li>
        <li>Stack React + Node</li>
        <li>Usuário de distros Linux baseadas em Ubuntu</li>
      </ul>
      <ul>
        {projects.map(project => (
          <li key={project.name}>{project.name}</li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
