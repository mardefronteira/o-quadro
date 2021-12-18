import React from 'react';

import { Container, Content } from '../Sobre/estilo';

import Base from '../../componentes/Base';
import Carrossel from '../../componentes/Carrossel';
import { useGlobal } from '../../AcessoGlobal';
import ImagemPatrocinio from './estilo';

function ColecaoEscreverCinema() {
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();

  return (
    <>
      <Base menuSocialVermelho estadoMenu={2}>
        <Container>
          <Content>
            <img src={global.db.colecoes.logo.src} alt={global.db.colecoes.logo.desc} />
            <p>
              {global.db.colecoes.texto}
            </p>
          </Content>
          {global.db.colecoes.patrocinadores.src !== '' && <ImagemPatrocinio src={global.db.colecoes.patrocinadores.src} alt={global.db.colecoes.patrocinadores.desc} />}

          <Carrossel categoria={global.db.publicacoes} taVermelho />
        </Container>
      </Base>
    </>
  );
}

export default ColecaoEscreverCinema;
