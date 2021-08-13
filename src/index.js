import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./componentes/Menu"
import MenuSocial from "./componentes/MenuSocial"


ReactDOM.render(
  <React.StrictMode>
    <MenuSocial />
    <Menu />
  </React.StrictMode>,
  document.getElementById("root")
);
