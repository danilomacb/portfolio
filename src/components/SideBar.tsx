import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/sidebar.scss";
import projects from "../projects.json";
import Profile from "./Profile";
import Socials from "./Socials";

function SideBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  let nav: HTMLElement;

  function showMenu() {
    nav.style.display === "block" ? (nav.style.display = "none") : (nav.style.display = "block");
    menuOpened ? setMenuOpened(false) : setMenuOpened(true);
  }

  function scrollPage(i: number) {
    const projectElements = document.getElementsByClassName("project");

    if (getComputedStyle(document.getElementById("menu-button")!, null).display === "block") {
      nav.style.display = "none";
      setMenuOpened(false);
    }

    projectElements[i].scrollIntoView();
  }

  return (
    <>
      <button id="menu-button" aria-label="menu button" onClick={showMenu}>
        {menuOpened ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <nav ref={(el) => (nav = el!)}>
        <Profile />

        <Socials />

        <h2>Meus Projetos</h2>
        <ul id="projects">
          {projects.map((project, i) => (
            <button key={project.name} aria-label={project.name} onClick={() => scrollPage(i)}>
              {project.name}
            </button>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
