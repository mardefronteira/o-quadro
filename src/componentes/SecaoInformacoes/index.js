import React, { useEffect } from 'react';
import {
  DivFlex,
  ContainerFilmes,
  InfoFilme,
  TituloDestaque,
  SubTituloDestaque,
  H3Destaque,
  ImgDestaque,
  ImgDestaqueDireita,
  MaisInfo,
} from './estilo';
import VisualizadorImagens from '../VisualizadorImagens';
import Carrossel from '../Carrossel';
import dataBase from '../../db';
import { ImgPatrocinio, Linha } from '../../paginas/PublicacaoSelecionada/estilo';

function SecaoInformacoes({ taVermelho = false, id }) {
  // const [taAtivo, setTaAtivo] = useState(false);
  const filme = dataBase.filmes.filter((filmeDb) => filmeDb.url === id)[0];
  const galeria = filme.galeria.map((imagem) => ({
    src: imagem.src,
    alt: imagem.desc,
    key: imagem.titulo.replace(' ', '-'),
  }));
  const patrocinio = dataBase.patrocinadores;

  const filmesRelacionados = dataBase.filmes.filter(
    (filmeDb) => filmeDb.tags.some(
      (tag) => filme.tags.includes(tag) && filme !== filmeDb,
    ),
  );

  useEffect(() => {
    if (document.getElementById('mais-equipe')) document.getElementById('mais-equipe').classList.add('fadeOut', 'alturaZero');
  }, []);
  return (
    <ContainerFilmes>
      <DivFlex className="titulo-secao" eColuna>
        <TituloDestaque>{filme.titulo.toUpperCase()}</TituloDestaque>
        <H3Destaque>
          DE
          {' '}
          {filme.autor.toUpperCase()}
        </H3Destaque>
      </DivFlex>
      <ImgDestaque src={filme.imgDestaque.src} alt={filme.imgDestaque.desc} />
      <DivFlex className="secaoPrincipal">
        <InfoFilme>
          <iframe title="vimeo-player" src={filme.linkVideo} width="640" height="360" frameBorder="0" allowFullScreen />
          <SubTituloDestaque>
            {filme.titulo.toUpperCase()}
            {', '}
            {filme.ano}
          </SubTituloDestaque>
          <H3Destaque>
            {'DE '}
            {filme.autor.toUpperCase()}
          </H3Destaque>
          <DivFlex className="info-filme">
            <DivFlex className="caixa-texto" eColuna>
              <H3Destaque>COM</H3Destaque>
              <p>{filme.participacao}</p>
            </DivFlex>
            <DivFlex className="caixa-texto" id="sinopse" eColuna>
              <H3Destaque>SINOPSE</H3Destaque>
              <p>{filme.sinopse}</p>
            </DivFlex>
          </DivFlex>
        </InfoFilme>
        <ImgDestaqueDireita src={filme.imgPoster.src} alt={filme.imgPoster.desc} />
      </DivFlex>
      <DivFlex className="galeria-fotos">
        <VisualizadorImagens galeria={galeria} className="galeria-fotos" />

      </DivFlex>
      <DivFlex eColuna>
        <DivFlex className="equipe" eColuna>
          <SubTituloDestaque>EQUIPE</SubTituloDestaque>
          <p dangerouslySetInnerHTML={filme.equipe.principal} />
        </DivFlex>
        {filme.equipe.adicional
          && (
            <>
              <DivFlex id="mais-equipe" eColuna={false} dangerouslySetInnerHTML={filme.equipe.adicional} />
              <MaisInfo
                onClick={() => {
                  const maisEquipe = document.getElementById('mais-equipe');
                  const verMais = document.getElementById('verMais');

                  maisEquipe.classList.toggle('fadeIn');
                  maisEquipe.classList.toggle('fadeOut');
                  maisEquipe.classList.toggle('alturaZero');

                  verMais.classList.toggle('rotate');
                }}
              >
                <svg id="verMais" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="none">
                  <path d="M17.293 29.707C16.9023 29.3164 16.9023 28.6836 17.293 28.293C17.6836 27.9023 18.3164 27.9023 18.707 28.293L32 41.5858L45.293 28.293C45.6836 27.9023 46.3164 27.9023 46.707 28.293C46.9023 28.4883 47 28.7442 47 29C47 29.2559 46.9023 29.5117 46.707 29.707L32.707 43.707C32.3164 44.0976 31.6836 44.0976 31.293 43.707L17.293 29.707Z" fill="#007F50" />
                  <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3268 0 0 14.3269 0 32C0 49.6731 14.3268 64 32 64ZM32 62C15.4579 62 2 48.5421 2 32C2 15.458 15.4579 2 32 2C48.5421 2 62 15.458 62 32C62 48.5421 48.5421 62 32 62Z" fill="#007F50" />
                </svg>
                {/* <img
                  id="verMais"
                  src="../imagens/seta_para_baixo.svg"
                  alt="Mais informações"
                /> */}
              </MaisInfo>
            </>
          )}
      </DivFlex>
      <ImgPatrocinio src={patrocinio.src} alt={patrocinio.desc} />
      <Linha />
      <Carrossel categoria={filmesRelacionados} taVermelho={taVermelho} />
    </ContainerFilmes>
  );
}

export default SecaoInformacoes;
