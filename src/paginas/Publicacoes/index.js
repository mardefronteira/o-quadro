import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import dataBase from '../../db';
// importar componentes
import {
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
  DivFlexLivros,
} from './estilo';
// importar componentes

import { MaisInfo } from '../../componentes/SecaoInformacoes/estilo';
import Base from '../../componentes/Base';

function Publicacoes() {
  const info = dataBase.editora;
  // eslint-disable-next-line prefer-destructuring
  const publicacoes = dataBase.publicacoes;
  // const patrocinio = dataBase.patrocinadores;
  useEffect(() => {
    document.getElementById('lista-livros').classList.add('fadeOut', 'alturaZero');
  }, []);

  return (
    <Base
      menuSocialVermelho
      estadoMenu={2}
    >
      {/* <Titulo>A QUADRO</Titulo> */}
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

        <ListaLivro id="lista-livros">
          {publicacoes.map((publicacao) => (
            <Livro as={Link} to={`publicacao/${publicacao.url}`}>
              <CapaLivro src={publicacao.imgPoster.src} alt={publicacao.imgPoster.desc} />
              <InfoLivro>
                <TituloLivro>{publicacao.titulo.toUpperCase()}</TituloLivro>
                <AutorLivro>{publicacao.autor.toUpperCase()}</AutorLivro>
              </InfoLivro>
            </Livro>
          ))}
          {/* <ImgPatrocinadores src={patrocinio.src} alt={patrocinio.desc} /> */}
        </ListaLivro>
        <DivFlexLivros>
          <MaisInfo
            style={{}}
            onClick={() => {
              const livros = document.getElementById('lista-livros');
              const verMais = document.getElementById('verMais');

              livros.classList.toggle('fadeIn');
              livros.classList.toggle('fadeOut');
              livros.classList.toggle('alturaZero');

              verMais.classList.toggle('rotate');
            }}
          >

            <svg id="verMais" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="none">
              <path d="M17.293 29.707C16.9023 29.3164 16.9023 28.6836 17.293 28.293C17.6836 27.9023 18.3164 27.9023 18.707 28.293L32 41.5858L45.293 28.293C45.6836 27.9023 46.3164 27.9023 46.707 28.293C46.9023 28.4883 47 28.7442 47 29C47 29.2559 46.9023 29.5117 46.707 29.707L32.707 43.707C32.3164 44.0976 31.6836 44.0976 31.293 43.707L17.293 29.707Z" fill="#CF0018" />
              <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3268 0 0 14.3269 0 32C0 49.6731 14.3268 64 32 64ZM32 62C15.4579 62 2 48.5421 2 32C2 15.458 15.4579 2 32 2C48.5421 2 62 15.458 62 32C62 48.5421 48.5421 62 32 62Z" fill="#CF0018" />
            </svg>
          </MaisInfo>
        </DivFlexLivros>
      </Conteiner>
    </Base>
  );
}

export default Publicacoes;
