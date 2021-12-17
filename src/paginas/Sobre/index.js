import React from 'react';

import { Container, Content } from './estilo';
import Base from '../../componentes/Base';
import Carrossel from '../../componentes/Carrossel';
import { useGlobal } from '../../AcessoGlobal';

function Sobre() {
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();

  return (
    <Base menuSocialVermelho estadoMenu={2}>
      <Container>
        <Content>
          <img
            src={global.db.logos.aquadro.vermelhoVertical.src}
            alt={global.db.logos.aquadro.vermelhoVertical.desc}
          />
          <p>
            {global.db.editora.texto}
          </p>
        </Content>
      </Container>
      <Carrossel categoria={global.db.publicacoes} taVermelho />
    </Base>
  );
}

export default Sobre;
