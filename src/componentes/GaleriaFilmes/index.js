import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Galeria from './estilo';
import Card from './Card/index';
import { useGlobal } from '../../AcessoGlobal';

function GaleriaFilmes({ categoria }) {
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();

  const { filmes } = global.db;
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoria);
  const [filmesCategoria, setFilmesCategoria] = useState(filmes);
  const eMovel = useMediaQuery({ query: '(max-width: 799px)' });

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
      {!eMovel && filmesCategoria.map((filme) => <Card filme={filme} key={filme.url} />)}
      {eMovel && filmesCategoria.map((filme) => (
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
