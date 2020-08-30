import React from "react";

import "./styles/index.scss";
import "react-image-lightbox/style.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <Main />
    </>
  );
}

export default App;
