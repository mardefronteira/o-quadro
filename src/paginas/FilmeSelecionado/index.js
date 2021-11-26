import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// importar componentes
import Base from '../../componentes/Base';
import SecaoInformacoes from '../../componentes/SecaoInformacoes';
import dataBase from '../../db';
import { ImgPatrocinio } from '../PublicacaoSelecionada/estilo';

function FilmeSelecionado() {
  const patrocinio = dataBase.patrocinadores;
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <Base>
      <SecaoInformacoes id={id} />
      <ImgPatrocinio src={patrocinio.src} alt={patrocinio.desc} />
    </Base>
  );
}
export default FilmeSelecionado;
