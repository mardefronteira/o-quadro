import React from 'react';
// importar estilos
import {
  DivFlex, TituloDestaque, H3Destaque, ImgDestaqueDireita,
} from '../../componentes/SecaoInformacoes/estilo';
// importar componentes
import Base from '../../componentes/Base';
import Carrossel from '../../componentes/Carrossel';
import dataBase from '../../db';

function PublicacaoSelecionada() {
  return (
    <Base
      menuSocialVermelho
      estadoMenu={2}
    >
      <DivFlex id="conteiner-principal" eColuna style={{ alignItems: 'center', gap: '2rem' }}>
        <DivFlex id="secao-cabecalho" eColuna style={{ alignItems: 'center' }}>
          <TituloDestaque eVermelho>CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER </TituloDestaque>
          <H3Destaque eVermelho={false}>DE ALEXANDRE GARCIA</H3Destaque>
        </DivFlex>
        <DivFlex id="conteiner-info" eColuna={false} style={{ gap: '2rem' }}>
          <DivFlex id="secao-info" eColuna>
            <DivFlex id="secao-titulo" eColuna>
              <H3Destaque eVermelho>SINOPSE</H3Destaque>
              {/* eslint-disable-next-line max-len */}
              <p>Alexandre Garcia segue o estilo de Rohmer na precisão seca do corte. Testemunha a matéria-prima do cineasta dos afetos e das sensações, dos gestos no mundo, em seu modo prosaico de fazer cena e reivindicar moral. Para Rohmer, vale mais o suspiro que a ilação, o inefável que o postulado – e assim atravessa a forma dura do mundo. As grandes emoções não se deixam levar, nem as grandes frases empoladas – os momentos cruciais não têm circunstância. O traço do moralismo como lição de afetos transpira com fôlego de juventude nos Contos morais, em toda intensidade e delicadeza. Garcia sabe captar este movimento e acerta na mosca do olhar rohmeriano. Pois Rohmer é o poeta do prosaico e das pequenas emoções que se expressam em micro movimentos, das superfícies do mundo, dos traços sutis na expressão, das paisagens e cenografias delicadamente construídas. - Fernão Pessoa Ramos</p>
            </DivFlex>
            <DivFlex eColuna>
              <H3Destaque eVermelho>SOBRE O AUTOR</H3Destaque>
              <p>
                {/* eslint-disable-next-line max-len */}
                Nascido em 1985, em Curitiba, é pesquisador, realizador e professor de cinema. Trabalha na Universidade Estadual do Paraná (Unespar) e no Colégio Medianeira. É doutorando em História na UFPR, mestre em Multimeios no Instituto de Artes da Unicamp e graduado em Cinema pela Faculdade de Artes do Paraná (Unespar). Fundou e foi sócio da produtora O Quadro de 2010 a 2015.
              </p>
            </DivFlex>
            <DivFlex eColuna>
              <H3Destaque eVermelho>FICHA TÉCNICA</H3Destaque>
              <span>Editora ‏ : ‎ Arte & Letra </span>
              <span>1ª edição (21 março 2019)</span>
              <span>Idioma ‏ : ‎ Português</span>
              <span>Capa comum ‏ : ‎ 171 páginas</span>
              <span>ISBN-10 ‏ : ‎ 8560499997</span>
              <span>ISBN-13 ‏ : ‎ 978-8560499991</span>
              <span>Dimensões ‏ : ‎ 16 x 1 x 23 cm</span>
            </DivFlex>
          </DivFlex>
          <ImgDestaqueDireita src="https://placekitten.com//900/500" />
        </DivFlex>

      </DivFlex>

      <Carrossel categoria={dataBase.publicacoes} taVermelho eFilmes={false} />
    </Base>
  );
}

export default PublicacaoSelecionada;
