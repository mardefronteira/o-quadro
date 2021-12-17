import React from 'react';

import { Container, Content } from '../Sobre/estilo';

import Base from '../../componentes/Base';
import Carrossel from '../../componentes/Carrossel';
import dataBase from '../../db';
import ImagemPatrocinio from './estilo';

function ColecaoEscreverCinema() {
  return (
    <>
      <Base menuSocialVermelho estadoMenu={2}>
        <Container>
          <Content>
            <img src={dataBase.colecoes.logo.src} alt={dataBase.colecoes.logo.desc} />
            <p>
              {dataBase.colecoes.texto}
            </p>
          </Content>
          {dataBase.colecoes.patrocinadores.src !== '' && <ImagemPatrocinio src={dataBase.colecoes.patrocinadores.src} alt={dataBase.colecoes.patrocinadores.desc} />}
          <Carrossel categoria={dataBase.publicacoes} taVermelho />
        </Container>
      </Base>
    </>
  );
}

export default ColecaoEscreverCinema;
