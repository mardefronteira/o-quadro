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
  const filme = dataBase.filmes.filter((filmeDb) => filmeDb.id === id)[0];

  const galeria = filme.galeria.map((imagem) => ({
    src: imagem.src,
    alt: imagem.desc,
    key: imagem.titulo.replace(' ', '-'),
  }));
  useEffect(() => { document.getElementById('mais-equipe').classList.add('alturaZero'); }, []);
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
      <ImgDestaque src={filme.img.src} alt={filme.desc} />
      <DivFlex className="secaoPrincipal">
        <InfoFilme>
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/hv6xxNDV8PA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
              <H3Destaque> COM</H3Destaque>
              <p>{filme.participacao}</p>
            </DivFlex>
            <DivFlex className="caixa-texto" id="sinopse" eColuna>
              <H3Destaque> SINOPSE</H3Destaque>
              {/* eslint-disable-next-line max-len */}
              <p>{filme.sinopse}</p>
            </DivFlex>
          </DivFlex>
        </InfoFilme>
        <ImgDestaqueDireita src={filme.imgDestaque.src} alt={filme.imgDestaque.desc} />
      </DivFlex>
      <DivFlex className="galeria-fotos">
        <VisualizadorImagens galeria={galeria} className="galeria-fotos" />

      </DivFlex>
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

          maisEquipe.classList.toggle('alturaZero');
          verMais.classList.toggle('rotate');

          /*
          const taVisivel = !maisEquipe.classList.contains('invisivel');
          console.log(maisEquipe);
          console.log(taVisivel);
          if (taVisivel) {
            maisEquipe.classList.add('invisivel');
          } else {
            maisEquipe.classList.remove('invisivel');
          }
          setTaAtivo(true);
          if (taAtivo === true) {
            console.log('funcionando');
          } */
        }}
      >
        <img
          id="verMais"
          src="../imagens/seta_para_baixo.svg"
          alt="Mais informações"
        />
      </MaisInfo>
      <Carrossel categoria={dataBase.filmes} eFilmes taVermelho={taVermelho} />
    </ContainerFilmes>
  );
}

export default SecaoInformacoes;
