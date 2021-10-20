import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// importar estilos
import {
  DivFlex,
} from '../../componentes/SecaoInformacoes/estilo';
import {
  DivFlexPublicacao,
  ImgDestaqueDireita,
  TituloLivro,
  TituloVermelho,
  NomeAutor,
  ImgPatrocinio,
  Linha,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';
import Carrossel from '../../componentes/Carrossel';
import dataBase from '../../db';

function PublicacaoSelecionada() {
  const { id } = useParams();
  const publicacao = dataBase.publicacoes.filter((publicacaoDb) => publicacaoDb.url === id)[0];
  const patrocinio = dataBase.patrocinadores;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Base
      menuSocialVermelho
      estadoMenu={2}
    >
      <DivFlexPublicacao id="conteiner-principal" eColuna>
        <DivFlex id="secao-cabecalho" eColuna>
          <TituloLivro eVermelho>{publicacao.titulo}</TituloLivro>
          <NomeAutor eVermelho={false}>{publicacao.autor}</NomeAutor>
        </DivFlex>
        <DivFlex id="conteiner-info" eColuna={false}>
          <DivFlex id="secao-info" eColuna>
            <DivFlex id="secao-titulo" eColuna>
              <TituloVermelho eVermelho>SINOPSE</TituloVermelho>
              <p>{publicacao.sinopse}</p>
            </DivFlex>
            <DivFlex id="artigo" eColuna>
              <TituloVermelho eVermelho>SOBRE O AUTOR</TituloVermelho>
              <p>
                {publicacao.sobreoAutor}
              </p>
            </DivFlex>
            <DivFlex id="ficha-tecnica" eColuna>
              <TituloVermelho eVermelho>FICHA TECNICA</TituloVermelho>
              {publicacao.fichaTecnica}
            </DivFlex>
          </DivFlex>
          <ImgDestaqueDireita src={publicacao.img.src} alt={publicacao.img.desc} />
        </DivFlex>
        <ImgPatrocinio src={patrocinio.src} alt={patrocinio.desc} />

      </DivFlexPublicacao>
      <Linha />
      <Carrossel categoria={dataBase.publicacoes} taVermelho />
    </Base>
  );
}

export default PublicacaoSelecionada;
