import React from 'react';
import { useParams } from 'react-router-dom';
// importar estilos
// import {} from "./estilo.js";
import Titulo from './estilo';
// importar componentes
import Base from '../../componentes/Base';
import GaleriaFilmes from '../../componentes/GaleriaFilmes';
import BarraPesquisa from '../../componentes/BarraPesquisa';

function Filmes() {
  // eslint-disable-next-line prefer-const
  let { categoria } = useParams();

  return (
    <Base
      menuSocialVermelho={false}
      estadoMenu={1}
    >
      <Titulo>A</Titulo>
      <BarraPesquisa />

      <GaleriaFilmes categoria={categoria || null} />

    </Base>
  );
}

export default Filmes;
