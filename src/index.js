import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./componentes/Menu";
import MenuSocial from "./componentes/MenuSocial";
import Carrossel from "./componentes/Carrossel";
import GaleriaFilmes from "./componentes/GaleriaFilmes";
const dB = [
  {titulo:"FILME 1", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 2", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 3", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 4", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"},
  {titulo:"FILME 5", desc:"DE 'NOME DO AUTOR'",img:"posterTerror.png"}
]

import { BrowserRouter, Switch, Route } from "react-router-dom";
import FestivalMetro from "./paginas/FestivalMetro";
import Filmes from "./paginas/Filmes";
import FilmeSelecionado from "./paginas/FilmeSelecionado";
import Inicial from "./paginas/Inicial";
import PublicacaoSelecionada from "./paginas/PublicacaoSelecionada";
import Publicacoes from "./paginas/Publicacoes";
import QuemSomos from "./paginas/QuemSomos";
import QuatroZeroQuatro from "./paginas/QuatroZeroQuatro";
//import ReactGA from 'react-ga';

//ReactGA.initialize('');
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/filmes" component={Filmes}></Route>
      <Route path="/filme/:id" component={FilmeSelecionado} />
      <Route path="/publicacoes" component={Publicacoes}></Route>
      <Route path="/publicacao/:id" component={PublicacaoSelecionada}></Route>
      <Route path="/metro-festival" component={FestivalMetro}></Route>
      <Route path="/quem-somos" component={QuemSomos}></Route>
      <Route path="/" component={Inicial} exact />
      <Route component={QuatroZeroQuatro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
