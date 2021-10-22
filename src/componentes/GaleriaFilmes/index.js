import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Galeria from './estilo';
import Card from './Card/index';
import dataBase from '../../db';

function GaleriaFilmes({ categoria }) {
  const { filmes } = dataBase;
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoria);
  const [filmesCategoria, setFilmesCategoria] = useState(filmes);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    setCategoriaSelecionada(categoria);
  }, [categoria]);

  useEffect(() => {
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
      case undefined:
        setCategoriaSelecionada('todos');
        setFilmesCategoria(filmes);
        break;
      default:
        // eslint-disable-next-line max-len
        setFilmesCategoria(filmes.filter((filme) => filme.titulo.toLowerCase().includes(categoria.toLowerCase())));
    }

    if (['Curta Metragem', 'Média Metragem', 'Longa Metragem'].includes(categoriaSelecionada)) {
      setFilmesCategoria(filmes.filter(
        (filme) => filme.categoria === categoriaSelecionada,
      ));
    }
  }, [categoriaSelecionada]);

  return (
    <Galeria>
      {isBigScreen && filmesCategoria.map((filme) => <Card filme={filme} key={filme.url} />)}
      {isTabletOrMobile && filmesCategoria.map((filme) => (
        <>
          <Card filme={filme} key={filme.url}>
            {' '}
            <p>{filme.titulo}</p>
            <p>{filme.autor}</p>
            <p>{filme.ano}</p>
            {' '}
          </Card>

        </>
      ))}
    </Galeria>
  );
}

export default GaleriaFilmes;
