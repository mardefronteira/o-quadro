import React from 'react';
// importar estilos
// import {} from "./estilo.js";
import { Titulo } from './estilo';
// importar componentes
import Base from '../../componentes/Base';
import GaleriaFilmes from '../../componentes/GaleriaFilmes';
import BarraPesquisa from '../../componentes/BarraPesquisa';

function Filmes() {
  return (
    <Base
      menuSocialVermelho={false}
      estadoMenu={1}
    >
      <Titulo>Filmes</Titulo>
      <BarraPesquisa />

      <GaleriaFilmes />
 
    </Base>
  );
}

export default Filmes;
