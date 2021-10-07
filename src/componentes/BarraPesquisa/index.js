import React from 'react';
import {
  Barra, Pesquisa, BotaoPesquisa, Formulario,
} from './estilo';

function BarraPesquisa() {
  return (
    <Barra>
      <Formulario method="GET" action="/filmes">
        <Pesquisa
          type="text"
          id="busca"
          // value={busca}
          placeholder="Buscar nome do Filme"
          // onChange={(ev) => setBusca(ev.target.value)}
        />
        <BotaoPesquisa type="submit" alt="Pesquisar">
          <img className="lupa" src="./imagens/barraPesquisa/lupaIcone.svg" alt="" />
          <img className="lupaHover" src="./imagens/barraPesquisa/lupaIconeHover.svg" alt="" />
        </BotaoPesquisa>
      </Formulario>
    </Barra>
  );
}

export default BarraPesquisa;
