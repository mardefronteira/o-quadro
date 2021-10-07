import React, { useState, useEffect } from 'react';
import Galeria from './estilo';
import Card from './Card/index';
import dataBase from '../../db';

function GaleriaFilmes({ categoria }) {
  const { filmes } = dataBase;
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoria);
  const [filmesCategoria, setFilmesCategoria] = useState(filmes);

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
      {filmesCategoria.map((filme) => <Card filme={filme} key={filme.url} />)}
    </Galeria>
  );
}

export default GaleriaFilmes;
