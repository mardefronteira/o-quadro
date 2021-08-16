import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./componentes/Menu"
import MenuSocial from "./componentes/MenuSocial"
import Carrossel from "./componentes/Carrossel"
const dB = [
  {titulo:"FILME 1", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 2", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 3", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 4", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 5", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"}
]


ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <MenuSocial  /> 
    <Carrossel categoria = {dB} />
  </React.StrictMode>,
  document.getElementById("root")
);
