import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/socials.scss";

function Socials() {
  return (
    <div id="socials">
      <a href="https://github.com/danilomacb" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/danilomacb" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://www.facebook.com/danilomacb" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
      <a href="https://twitter.com/danilomacb" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href="mailto:danilo.macb@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
  );
}

export default Socials;
