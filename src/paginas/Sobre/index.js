import React from 'react';
import { Container, Content } from './estilo';
import Base from '../../componentes/Base';
import Carrossel from '../../componentes/Carrossel';
import dataBase from '../../db';

function Sobre() {
  return (
    <Base menuSocialVermelho estadoMenu={2}>
      <Container>
        <Content>
          <img
            src={dataBase.logos.aquadro.vermelhoVertical.src}
            alt={dataBase.logos.aquadro.vermelhoVertical.desc}
          />
          <p>
            {dataBase.editora.texto}
          </p>
        </Content>
      </Container>
      <Carrossel categoria={dataBase.publicacoes} taVermelho />
    </Base>
  );
}

export default Sobre;
