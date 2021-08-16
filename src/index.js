import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import FestivalMetro from "./paginas/FestivalMetro";
import Filmes from "./paginas/Filmes";
import FilmeSelecionado from "./paginas/FilmeSelecionado";
import Inicial from "./paginas/Inicial";
import LivroSelecionado from "./paginas/LivroSelecionado";
import Livros from "./paginas/Livros";
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
      <Route path="/livros" component={Livros}></Route>
      <Route path="/livro/:id" component={LivroSelecionado}></Route>
      <Route path="/metro-festival" component={FestivalMetro}></Route>
      <Route path="/quem-somos" component={QuemSomos}></Route>
      <Route path="/" component={Inicial} exact />
      <Route component={QuatroZeroQuatro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
