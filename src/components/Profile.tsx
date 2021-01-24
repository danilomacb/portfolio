import React from "react";

import "../styles/profile.scss";
import "../styles/badges.scss";

function Profile() {
  return (
    <div id="profile">
      <img src={`${process.env.PUBLIC_URL}/images/perfil.png`} alt="Perfil" id="profilePicture" />
      <h1>Danilo Macedo Bakun</h1>

      <ul>
        <li>
          Desenvolvedor FullStack
          <span className="badge JavaScript">JavaScript</span>
        </li>
        <li>
          Stack
          <span className="badge React">React</span> + <span className="badge Node">Node</span>
        </li>
        <li>
          Usuário de distros
          <span className="badge Linux">Linux</span>
          baseadas em
          <span className="badge Ubuntu">Ubuntu</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
