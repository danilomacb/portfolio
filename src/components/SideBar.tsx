import React, { useState, Profiler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/sidebar.scss";
import projects from "../projects.json";
import Profile from "./Profile";
import Socials from "./Socials";

function SideBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const nav = document.getElementsByTagName("nav")[0]!;

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
      <button id="menu-button" onClick={showMenu}>
        {menuOpened ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <nav>
        <Profile />

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
