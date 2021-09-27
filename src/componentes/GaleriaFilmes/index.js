import React from 'react';
import Galeria from './estilo';
import Card from './Card/index';
import dataBase from '../../db';

function GaleriaFilmes({ categoria }) {
  let categoriaSelecionada;
  switch (categoria) {
    case 'curtas':
      categoriaSelecionada = 'Curta Metragem';
      break;
    case 'medias':
      categoriaSelecionada = 'Média Metragem';
      break;
    case 'longas':
      categoriaSelecionada = 'Longa Metragem';
      break;
    default:
      categoriaSelecionada = 'todos';
  }
  console.log(`categoria: ${categoriaSelecionada}`);

  const filmesNaCategoria = categoriaSelecionada !== 'todos'
    ? dataBase.filmes.filter(
      (filme) => filme.categoria === categoriaSelecionada,
    ) : dataBase.filmes;
  console.log(filmesNaCategoria);
  return (
    <Galeria>
      {filmesNaCategoria.map((filme) => {
        console.log(filme);
        return <Card filme={filme} key={filme.url} />;
      })}
      ;

    </Galeria>
  );
}

export default GaleriaFilmes;
