/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import dataBase from '../../db';

// importar estilos
// import {} from "./estilo.js";
import {
  Titulo, Barra, Pesquisa, BotaoPesquisa, Formulario,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';
import GaleriaFilmes from '../../componentes/GaleriaFilmes';
// import BarraPesquisa from '../../componentes/BarraPesquisa';

function Filmes() {
  // eslint-disable-next-line prefer-const
  let { categoria } = useParams();
  const { filmes } = dataBase;
  const [busca, setBusca] = useState('');

  return (
  // <Base
  //   menuSocialVermelho={false}
  //   estadoMenu={1}
  // >
  //   <Titulo>Filmes</Titulo>
  //   <BarraPesquisa />

  //   <GaleriaFilmes categoria={categoria || null} />

    // </Base>
    <Base
      menuSocialVermelho={false}
      estadoMenu={1}
    >
      <Barra>
        <Formulario>
          <Pesquisa
            type="text"
            id="busca"
            value={busca}
            placeholder="Buscar nome do Filme"
            onChange={(ev) => {
              setBusca(ev.target.value);
              console.log('busca: ', busca);
            }}
          />
          <BotaoPesquisa type="submit" alt="Pesquisar">
            <img className="lupa" src="./imagens/barraPesquisa/lupaIcone.svg" alt="" />
            <img className="lupaHover" src="./imagens/barraPesquisa/lupaIconeHover.svg" alt="" />
          </BotaoPesquisa>
        </Formulario>
      </Barra>
      <Titulo>Filmes</Titulo>
      <GaleriaFilmes categoria={busca !== '' ? busca : categoria} />

    </Base>
  );
}

export default Filmes;
