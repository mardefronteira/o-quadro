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

import { useGlobal } from '../../AcessoGlobal';

function PublicacaoSelecionada() {
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();

  const { id } = useParams();
  const publicacao = global.db.publicacoes.filter((publicacaoDb) => publicacaoDb.url === id)[0];
  const patrocinio = global.db.patrocinadores;
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
              <TituloVermelho eVermelho>FICHA TÉCNICA</TituloVermelho>
              <p>
                ISBN:
                {publicacao.fichaTecnica.isbn}
              </p>
              <p>
                Páginas:
                {publicacao.fichaTecnica.paginas}
              </p>
              <p>
                Idioma:
                {publicacao.fichaTecnica.idioma}
              </p>
              <p>
                Dimensões:
                {publicacao.fichaTecnica.dimensoes}

              </p>
              <p>
                Formato:
                {publicacao.fichaTecnica.formato}
              </p>
              <p>
                Edição:
                {publicacao.fichaTecnica.edicao}

              </p>
              <p>
                Editora:
                {publicacao.fichaTecnica.editora}

              </p>
              <p>
                Coleção:
                {publicacao.fichaTecnica.colecao}
              </p>
            </DivFlex>
          </DivFlex>
          <ImgDestaqueDireita src={publicacao.imgPoster.src} alt={publicacao.imgPoster.desc} />
        </DivFlex>
        <ImgPatrocinio src={patrocinio.src} alt={patrocinio.desc} />

      </DivFlexPublicacao>
      <Linha />
      <Carrossel categoria={global.db.publicacoes} taVermelho />
    </Base>
  );
}

export default PublicacaoSelecionada;
