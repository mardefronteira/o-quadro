import React from 'react';
import { useParams } from 'react-router-dom';
// importar componentes
import Base from '../../componentes/Base';
import SecaoInformacoes from '../../componentes/SecaoInformacoes';

function FilmeSelecionado() {
  const { id } = useParams();
  return (
    <Base>
      <SecaoInformacoes id={id} />
    </Base>
  );
}
export default FilmeSelecionado;
