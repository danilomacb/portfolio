import React, { useEffect } from "react";
import ReactGA from "react-ga";

import "./styles/index.scss";
import "react-image-lightbox/style.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-179778647-1");
    ReactGA.pageview("/");
  }, []);

  return (
    <>
      <SideBar />
      <Main />
    </>
  );
}

export default App;
