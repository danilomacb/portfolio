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
          Desenvolvedor FullStack{" "}
          <img
            src={badges[2]}
            alt="JavaScript"
            className="badge"
          />
        </li>
        <li>
          Stack{" "}
          <img src={badges[3]} alt="React" className="badge" /> +{" "}
          <img src={badges[4]} alt="Node" className="badge" />
        </li>
        <li>
          Usuário de distros{" "}
          <img src={badges[5]} alt="Linux" className="badge" />{" "}
          baseadas em{" "}
          <img src={badges[6]} alt="Ubuntu" className="badge" />
        </li>
      </ul>
    </div>
  );
}

export default Profile;
