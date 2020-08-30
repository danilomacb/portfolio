import React from "react";

function Profile() {
  return (
    <div id="profile">
      <img src={`${process.env.PUBLIC_URL}/images/perfil.png`} alt="Perfil" />
      <h1>Danilo Macedo Bakun</h1>
      <ul id="profileDescription">
        <li>Desenvolvedor FullStack JavaScript</li>
        <li>Stack React + Node</li>
        <li>Usuário de distros Linux baseadas em Ubuntu</li>
      </ul>
    </div>
  );
}

export default Profile;
