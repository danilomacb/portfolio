import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/sidebar.scss";
import projects from "../projects.json";

function SideBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  let nav: any;
  let menuButton: any;

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
      <button id="menu-button" onClick={showMenu} ref={(element) => (menuButton = element)}>
        {menuOpened ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <nav ref={(element) => (nav = element)}>
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
