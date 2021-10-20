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
          <Logo src={festival.logo.src} alt={festival.logo.desc} />
          <Artigo>
            {festival.texto}
          </Artigo>
          <a href={festival.link} target="_blank" rel="noreferrer"><Embarque type="button">{festival.button}</Embarque></a>
        </Conteiner>
        <Poster src={festival.img.src} alt={festival.img.desc} />
      </ConteinerPrincipal>
    </Base>
  );
}

export default FestivalMetro;
