import React from 'react';
import MediaQuery from 'react-responsive';
import Filmes from '../Filmes';

// importar componentes
import Base from '../../componentes/Base';

function Inicial() {
  return (
    <>
      <MediaQuery maxWidth={799}>
        <Filmes />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <Base
          menuSocialVermelho={false}
          estadoMenu={0}
        />
      </MediaQuery>
    </>
  );
}

export default Inicial;
