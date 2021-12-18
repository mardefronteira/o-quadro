import React, { useEffect, useState } from 'react';
import { useGlobal } from '../../AcessoGlobal';
// importar estilos
import {
  ConteinerPrincipal, Poster, Conteiner, Logo, Artigo, Embarque,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';

function FestivalMetro() {
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();

  const festival = global.db.metro;
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line max-len
    setTimeout(() => { setIndice(indice >= (festival.slideshow.length - 1) ? 0 : (indice + 1)); }, 4000);
  }, [indice]);

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
        <Poster src={festival.slideshow[indice].src} />
      </ConteinerPrincipal>
    </Base>
  );
}

export default FestivalMetro;
