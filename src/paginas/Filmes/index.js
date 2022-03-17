import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobal } from '../../AcessoGlobal';

import {
  Titulo, Barra, Pesquisa,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';
import GaleriaFilmes from '../../componentes/GaleriaFilmes';

function Filmes() {
  const { categoria } = useParams();
  const [global] = useGlobal();
  const [busca, setBusca] = useState('');

  return (
    <Base
      menuSocialVermelho={false}
      estadoMenu={1}
    >
      <Barra>
        <Pesquisa
          type="text"
          id="busca"
          value={busca}
          placeholder="Buscar nome do Filme"
          onChange={(evento) => setBusca(evento.target.value)}
        />
      </Barra>
      <Titulo>{global.ptBr ? 'Filmes' : 'Films'}</Titulo>
      <GaleriaFilmes categoria={busca !== '' ? busca : categoria} />

    </Base>
  );
}

export default Filmes;
