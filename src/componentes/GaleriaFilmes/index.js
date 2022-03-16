import React, { useState, useEffect } from 'react';
import Galeria from './estilo';
import Card from './Card/index';
import { useGlobal } from '../../AcessoGlobal';

function GaleriaFilmes({ categoria }) {
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();
  console.log(categoria);
  const { filmes } = global.db;
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoria);
  const [filmesCategoria, setFilmesCategoria] = useState(filmes);
  useEffect(() => {
    setFilmesCategoria(global.db.filmes);
  }, [global]);
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
      { filmesCategoria.map((filme) => <Card filme={filme} key={filme.url} ptBr={global.ptBr} />)}

    </Galeria>
  );
}

export default GaleriaFilmes;
