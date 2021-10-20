import React from 'react';
import { Link } from 'react-router-dom';
import dataBase from '../../db';
// importar componentes
import {
  Titulo,
  Conteiner,
  ArtigoPrincipal,
  ConteinerLinha,
  ImagemLateral,
  ArtigoLateral,
  ListaLivro,
  Livro,
  CapaLivro,
  InfoLivro,
  TituloLivro,
  AutorLivro,
  ImgPatrocinadores,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';

function Publicacoes() {
  const info = dataBase.editora;
  // eslint-disable-next-line prefer-destructuring
  const publicacoes = dataBase.publicacoes;
  const patrocinio = dataBase.patrocinadores;

  return (
    <Base
      menuSocialVermelho
      estadoMenu={2}
    >
      <Titulo>A QUADRO</Titulo>
      <Conteiner>
        <ArtigoPrincipal>
          <p>
            {info.textos.primeiroParagrafo}
          </p>
          <p>
            {info.textos.segundoParagrafo}
          </p>

        </ArtigoPrincipal>
        <ConteinerLinha>
          <ImagemLateral src={info.img.src} alt={info.img.desc} />
          <ArtigoLateral>
            <p>
              {info.textos.terceiroParagrafo}
            </p>

            <p>
              {info.textos.quartoParagrafo}
            </p>
          </ArtigoLateral>
        </ConteinerLinha>

        <ListaLivro>
          {publicacoes.map((publicacao) => (
            <Livro as={Link} to={`publicacao/${publicacao.url}`}>
              <CapaLivro src={publicacao.img.src} alt={publicacao.img.desc} />
              <InfoLivro>
                <TituloLivro>{publicacao.titulo.toUpperCase()}</TituloLivro>
                <AutorLivro>{publicacao.autor.toUpperCase()}</AutorLivro>
              </InfoLivro>
            </Livro>
          ))}
          <ImgPatrocinadores src={patrocinio.src} alt={patrocinio.desc} />
        </ListaLivro>
      </Conteiner>
    </Base>
  );
}

export default Publicacoes;
