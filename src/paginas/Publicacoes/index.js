import React, { useEffect } from 'react';
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
  DivFlexLivros,
} from './estilo';
// importar componentes

import { MaisInfo } from '../../componentes/SecaoInformacoes/estilo';
import Base from '../../componentes/Base';

function Publicacoes() {
  const info = dataBase.editora;
  // eslint-disable-next-line prefer-destructuring
  const publicacoes = dataBase.publicacoes;
  const patrocinio = dataBase.patrocinadores;
  useEffect(() => {
    document.getElementById('lista-livros').classList.add('fadeOut', 'alturaZero');
  }, []);

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

        <ListaLivro id="lista-livros">
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

            <img
              id="verMais"
              src="../imagens/seta_para_baixo.svg"
              alt="Mais informações"
            />
          </MaisInfo>
        </DivFlexLivros>
      </Conteiner>
    </Base>
  );
}

export default Publicacoes;
