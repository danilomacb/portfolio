import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/sidebar.scss";
import projects from "../projects.json";
import Socials from "./Socials";

function SideBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const nav: HTMLElement = document.getElementsByTagName("nav")[0]!;
  const menuButton: HTMLElement = document.getElementById("menu-button")!;

  function showMenu() {
    nav.style.display === "block" ? (nav.style.display = "none") : (nav.style.display = "block");
    menuOpened ? setMenuOpened(false) : setMenuOpened(true);
  }

  function scrollPage(i: number) {
    const projectElements = document.getElementsByClassName("project");

    if (getComputedStyle(menuButton, null).display === "block") {
      nav.style.display = "none";
      setMenuOpened(false);
    }

    projectElements[i].scrollIntoView();
  }

  return (
    <>
      <button id="menu-button" onClick={showMenu}>
        {menuOpened ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

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

        <Socials />

        <ul id="projects">
          {projects.map((project, i) => (
            <li key={project.name} onClick={() => scrollPage(i)}>
              {project.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
