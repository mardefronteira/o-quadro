/* importar react */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
/* importar componentes */
import Card from './Card/index';
/* importar estilos */
import {
  FundoCarrossel,
  Conteiner,
  ConteinerCards,
  SetaCarrossel,
  TituloCarrossel,
} from './estilo';

const Carrossel = ({ categoria, taVermelho = true }) => {
  const restringir = (val, min, max) => {
    let valor = val;
    if (val < min) {
      valor = min;
    } else if (val > max) {
      valor = max;
    }
    return valor;
  };

  const DefinirPos = () => {
    const [pos, defPos] = useState(0);

    const moverCarrossel = (direcao, numItens) => {
      const moverPara = pos + 3 * direcao;
      defPos(restringir(moverPara, 0, numItens - 3));
    };

    return [pos, moverCarrossel];
  };
  /* variável pra conter a posição do Carrossel */
  const [pos, moverCarrossel] = DefinirPos(0);

  return (
    <FundoCarrossel>
      <TituloCarrossel taVermelho>
        {taVermelho ? 'LIVROS' : 'FILMES'}
      </TituloCarrossel>
      <Conteiner>
        <SetaCarrossel
          className={pos > 0 ? '' : 'invisivel'}
          onClick={() => {
            moverCarrossel(-1, categoria.length);
          }}
        >
          {/* {"<"} */}
          <img src="../imagens/seta/esquerda.svg" alt="seta para a esquerda" />

        </SetaCarrossel>
        <ConteinerCards>

          <Card
            taVermelho={taVermelho}
            img={categoria[pos].imgPoster}
            titulo={categoria[pos].titulo}
            desc={categoria[pos].desc}
            url={categoria[pos].url}
          />
          <Card
            taVermelho={taVermelho}
            img={categoria[pos + 1].imgPoster}
            titulo={categoria[pos + 1].titulo}
            desc={categoria[pos + 1].desc}
            url={categoria[pos + 1].url}
          />
          <Card
            taVermelho={taVermelho}
            img={categoria[pos + 2].imgPoster}
            titulo={categoria[pos + 2].titulo}
            desc={categoria[pos + 2].desc}
            url={categoria[pos + 2].url}
          />

        </ConteinerCards>
        <SetaCarrossel
          className={pos < categoria.length - 3 ? '' : 'invisivel'}
          onClick={() => {
            moverCarrossel(1, categoria.length);
          }}
        >
          {/* {">"} */}
          <img src="../imagens/seta/direita.svg" alt="seta para a direita" />
        </SetaCarrossel>
      </Conteiner>
    </FundoCarrossel>
  );
};

// Carrossel.propTypes = {
//   categoria: PropTypes.objectOf(PropTypes.string).isRequired,
//   taVermelho: PropTypes.bool.isRequired,
// };

export default Carrossel;
