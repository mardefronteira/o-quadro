import React, { useEffect } from 'react';
import {
  DivFlex,
  ContainerFilmes,
  InfoFilme,
  TituloDestaque,
  SubTituloDestaque,
  // eslint-disable-next-line no-unused-vars
  TextoVerde,
  H3Destaque,
  ImgDestaque,
  ImgDestaqueDireita,
  MaisInfo,
} from './estilo';
import VisualizadorImagens from '../VisualizadorImagens';
import Carrossel from '../Carrossel';
import dataBase from '../../db';

function SecaoInformacoes({ taVermelho = false, id }) {
  // const [taAtivo, setTaAtivo] = useState(false);
  const filme = dataBase.filmes.filter((filmeDb) => filmeDb.url === id)[0];
  const galeria = filme.galeria.map((imagem) => ({
    src: imagem.src,
    alt: imagem.desc,
    key: imagem.titulo.replace(' ', '-'),
  }));

  const filmesRelacionados = dataBase.filmes.filter(
    (filmeDb) => filmeDb.tags.some(
      (tag) => filme.tags.includes(tag) && filme !== filmeDb,
    ),
  );

  useEffect(() => {
    document.getElementById('mais-equipe').classList.add('fadeOut', 'alturaZero');
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
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/356585839?h=6667095b3e" width="640" height="360" frameBorder="0" allowFullScreen />
          <SubTituloDestaque>
            {filme.titulo.toUpperCase()}
            ,
            {' '}
            {filme.ano}
          </SubTituloDestaque>
          <H3Destaque>
            {' '}
            {filme.autor.toUpperCase()}
            {' '}
          </H3Destaque>
          <DivFlex className="sinopseWithInfos">
            <DivFlex className="caixa-texto" eColuna>
              <H3Destaque>COM</H3Destaque>
              <p>{filme.participacao}</p>
            </DivFlex>
            <DivFlex className="caixa-texto" id="sinopse" eColuna>
              <H3Destaque>SINOPSE</H3Destaque>
              {/* eslint-disable-next-line max-len */}
              <p>{filme.sinopse}</p>
            </DivFlex>
          </DivFlex>
        </InfoFilme>
        <ImgDestaqueDireita src={filme.imgPoster.src} alt={filme.imgPoster.desc} />
      </DivFlex>
      <DivFlex className="galeria-fotos">
        <VisualizadorImagens galeria={galeria} className="galeria-fotos" />

      </DivFlex>
      <DivFlex eColuna style={{ width: '100%', height: 'auto', gap: '1rem' }}>
        <DivFlex className="equipe" eColuna>
          <SubTituloDestaque>EQUIPE</SubTituloDestaque>
          {filme.equipe.principal}
        </DivFlex>
        <DivFlex id="mais-equipe" eColuna={false}>
          {filme.equipe.adicional}
        </DivFlex>

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
          <img
            id="verMais"
            src="../imagens/seta_para_baixo.svg"
            alt="Mais informações"
          />
        </MaisInfo>
      </DivFlex>

      <Carrossel categoria={filmesRelacionados} eFilmes taVermelho={taVermelho} />
    </ContainerFilmes>
  );
}

export default SecaoInformacoes;
