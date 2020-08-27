import React from "react";

import "../styles/main.scss";
import projects from "../projects.json";
import Project from "./Project";

function Main() {
  return (
    <main>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </main>
  );
}

export default Main;
