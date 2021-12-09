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
          <img src="http://placekitten.com/200/300" alt="imagem" />
          <p>
            A Quadro é O Quadro, mas um pouco diferente. Sonho antigo da
            produtora, em 2021 conseguimos viabilizar um selo voltado para o
            lançamento de publicações sobre cinema. Para separar o joio da joia,
            demos um nome alternativo para a atividade, com a intenção de marcar
            a diferença, sem desmontar a unidade: fazemos cinema, seja
            produzindo filmes, um festival, ou editando e lançando livros.
          </p>
        </Content>
      </Container>
      <Carrossel categoria={dataBase.publicacoes} taVermelho />
    </Base>
  );
}

export default Sobre;
