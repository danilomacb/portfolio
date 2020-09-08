import React from "react";

import "../styles/profile.scss";
import badges from "../badges.json";

function Profile() {
  return (
    <div id="profile">
      <img src={`${process.env.PUBLIC_URL}/images/perfil.png`} alt="Perfil" id="profilePicture" />
      <h1>Danilo Macedo Bakun</h1>
      <ul id="profileDescription">
        <li>
          Desenvolvedor FullStack <img src={badges.js.link} alt={badges.js.alt} className="badge" />
        </li>
        <li>
          Stack <img src={badges.react.link} alt={badges.react.alt} className="badge" /> +{" "}
          <img src={badges.node.link} alt={badges.node.alt} className="badge" />
        </li>
        <li>
          Usuário de distros{" "}
          <img src={badges.linux.link} alt={badges.linux.alt} className="badge" /> baseadas em{" "}
          <img src={badges.ubuntu.link} alt={badges.ubuntu.alt} className="badge" />
        </li>
      </ul>
    </div>
  );
}

export default Profile;
