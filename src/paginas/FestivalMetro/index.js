import React from 'react';
import dataBase from '../../db';
// importar estilos
import {
  ConteinerPrincipal, Poster, Conteiner, Logo, Artigo, Embarque,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';

function FestivalMetro() {
  const festival = dataBase.metro;
  return (
    <Base
      menuSocialVermelho={false}
    >
      <ConteinerPrincipal>
        <Conteiner>
          <Logo>
            {festival.titulo.toUpperCase()}
          </Logo>
          <Artigo>
            {festival.texto}
          </Artigo>
          <Embarque type="button">{festival.button}</Embarque>
        </Conteiner>
        <Poster src={festival.img.src} alt={festival.img.desc} />
      </ConteinerPrincipal>
    </Base>
  );
}

export default FestivalMetro;
