import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FestivalMetro from './paginas/FestivalMetro';
import Filmes from './paginas/Filmes';
import FilmeSelecionado from './paginas/FilmeSelecionado';
import Inicial from './paginas/Inicial';
import PublicacaoSelecionada from './paginas/PublicacaoSelecionada';
import QuemSomos from './paginas/QuemSomos';
import Sobre from './paginas/Sobre';
import ColecaoEscreverCinema from './paginas/ColecaoEscreverCinema';
import QuatroZeroQuatro from './paginas/QuatroZeroQuatro';

import EstiloGlobal from './estilo';
import { AcessoGlobal } from './AcessoGlobal';
// import ReactGA from 'react-ga';

// ReactGA.initialize('');
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(

  <BrowserRouter>
    <EstiloGlobal />
    <AcessoGlobal>
      <Switch>
        <Route exact path="/filmes" component={Filmes} />
        <Route path="/filme/:id" component={FilmeSelecionado} />
        <Route path="/filmes/:categoria" component={Filmes} />
        <Route path="/publicacao/:id" component={PublicacaoSelecionada} />
        <Route path="/publicacoes" component={Sobre} />
        <Route path="/colecao" component={ColecaoEscreverCinema} />
        <Route path="/metro" component={FestivalMetro} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/" component={Inicial} exact />
        <Route component={QuatroZeroQuatro} />
      </Switch>
    </AcessoGlobal>
  </BrowserRouter>,
  document.getElementById('root'),
);
