import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuSocial from "./componentes/MenuSocial"

ReactDOM.render(
  <React.StrictMode>
    <MenuSocial vermelho = {true} />
  </React.StrictMode>,
  document.getElementById("root")
);
