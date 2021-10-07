import React, { useState } from 'react';
import Galeria from './estilo';
import Card from './Card/index';
import dataBase from '../../db';

function GaleriaFilmes({ categoria }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoria);
  const [filmesCategoria, setFilmesCategoria] = useState([]);
  switch (categoria) {
    case 'curtas':
      setCategoriaSelecionada('Curta Metragem');
      break;
    case 'medias':
      setCategoriaSelecionada('Média Metragem');
      break;
    case 'longas':
      setCategoriaSelecionada('Longa Metragem');
      break;
    case '':
      setCategoriaSelecionada('todos');
      break;
    default:
  }
  setFilmesGaleria(filmes.filter((filme) => filme.titulo.startsWith(busca)));

  const filmesNaCategoria = categoriaSelecionada !== 'todos'
    ? dataBase.filmes.filter(
      (filme) => filme.categoria === categoriaSelecionada,
    ) : dataBase.filmes;
    setFilmesCategoria(
      () => {return(
      if( categoriaSelecionada === 'todos'){
        return dataBase.filmes
      }
      else if(['Curta Metragem', 'Média Metragem', 'Longa Metragem'].includes(categoriaSelecionada)){
        return dataBase.filmes.filter(
          (filme) => filme.categoria === categoriaSelecionada,
        ) 
      }
      )
      }
      )
  return (
    <Galeria>
      {filmesNaCategoria.map((filme) => <Card filme={filme} key={filme.url} />)}
      ;

    </Galeria>
  );
}

export default GaleriaFilmes;
