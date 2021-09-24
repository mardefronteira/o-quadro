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
          <NomeAutor eVermelho={false}>DE ALEXANDRE GARCIA</NomeAutor>
        </DivFlex>
        <DivFlex id="conteiner-info" eColuna={false}>
          <DivFlex id="secao-info" eColuna>
            <DivFlex id="secao-titulo" eColuna>
              <TituloVermelho eVermelho>SINOPSE</TituloVermelho>
              {/* eslint-disable-next-line max-len */}
              <p>Alexandre Garcia segue o estilo de Rohmer na precisão seca do corte. Testemunha a matéria-prima do cineasta dos afetos e das sensações, dos gestos no mundo, em seu modo prosaico de fazer cena e reivindicar moral. Para Rohmer, vale mais o suspiro que a ilação, o inefável que o postulado – e assim atravessa a forma dura do mundo. As grandes emoções não se deixam levar, nem as grandes frases empoladas – os momentos cruciais não têm circunstância. O traço do moralismo como lição de afetos transpira com fôlego de juventude nos Contos morais, em toda intensidade e delicadeza. Garcia sabe captar este movimento e acerta na mosca do olhar rohmeriano. Pois Rohmer é o poeta do prosaico e das pequenas emoções que se expressam em micro movimentos, das superfícies do mundo, dos traços sutis na expressão, das paisagens e cenografias delicadamente construídas. - Fernão Pessoa Ramos</p>
            </DivFlex>
            <DivFlex id="artigo" eColuna>
              <TituloVermelho eVermelho>SOBRE O AUTOR</TituloVermelho>
              <p>
                {/* eslint-disable-next-line max-len */}
                Nascido em 1985, em Curitiba, é pesquisador, realizador e professor de cinema. Trabalha na Universidade Estadual do Paraná (Unespar) e no Colégio Medianeira. É doutorando em História na UFPR, mestre em Multimeios no Instituto de Artes da Unicamp e graduado em Cinema pela Faculdade de Artes do Paraná (Unespar). Fundou e foi sócio da produtora O Quadro de 2010 a 2015.
              </p>
            </DivFlex>
            <DivFlex id="ficha-tecnica" eColuna>
              <TituloVermelho eVermelho>FICHA TÉCNICA</TituloVermelho>
              <span>Editora ‏ : ‎ Arte & Letra </span>
              <span>1ª edição (21 março 2019)</span>
              <span>Idioma ‏ : ‎ Português</span>
              <span>Capa comum ‏ : ‎ 171 páginas</span>
              <span>ISBN-10 ‏ : ‎ 8560499997</span>
              <span>ISBN-13 ‏ : ‎ 978-8560499991</span>
              <span>Dimensões ‏ : ‎ 16 x 1 x 23 cm</span>
            </DivFlex>
          </DivFlex>
          <ImgDestaqueDireita src="https://placekitten.com//500/700" />
        </DivFlex>

      </DivFlexPublicacao>

      <Carrossel categoria={dataBase.publicacoes} taVermelho eFilmes={false} />
    </Base>
  );
}

export default PublicacaoSelecionada;
