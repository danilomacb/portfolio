import React from "react";

import "../styles/sidebar.scss";

function SideBar() {
  return (
    <nav>
      <img src={`${process.env.PUBLIC_URL}/images/perfil.png`} alt="Perfil"/>
      <h1>Danilo Macedo Bakun</h1>
      <ul id="profileDescription">
        <li>Desenvolvedor FullStack JavaScript</li>
        <li>Stack React + Node</li>
        <li>Usuário de distros Linux baseadas em Ubuntu</li>
      </ul>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </nav>
  );
}

export default SideBar;
