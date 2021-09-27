import React from 'react';
import { useParams } from 'react-router-dom';
// importar estilos
import {
  DivFlex,
} from '../../componentes/SecaoInformacoes/estilo';
import {
  DivFlexPublicacao, ImgDestaqueDireita, TituloLivro, TituloVermelho, NomeAutor,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';
import Carrossel from '../../componentes/Carrossel';
import dataBase from '../../db';

function PublicacaoSelecionada() {
  const { id } = useParams();
  const publicacao = dataBase.publicacoes.filter((publicacaoDb) => publicacaoDb.url === id)[0];

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
              <TituloVermelho eVermelho>{publicacao.textoEstatico.sinopse}</TituloVermelho>
              <p>{publicacao.sinopse}</p>
            </DivFlex>
            <DivFlex id="artigo" eColuna>
              <TituloVermelho eVermelho>{publicacao.textoEstatico.sobreoAutor}</TituloVermelho>
              <p>
                {publicacao.sobreoAutor}
              </p>
            </DivFlex>
            <DivFlex id="ficha-tecnica" eColuna>
              <TituloVermelho eVermelho>{publicacao.textoEstatico.fichaTecnica}</TituloVermelho>
              {publicacao.fichaTecnica}
            </DivFlex>
          </DivFlex>
          <ImgDestaqueDireita src={publicacao.img.src} />
        </DivFlex>

      </DivFlexPublicacao>

      <Carrossel categoria={dataBase.publicacoes} taVermelho eFilmes={false} />
    </Base>
  );
}

export default PublicacaoSelecionada;
