/* importar react */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
/* importar componentes */
import Card from './Card/index';
/* importar estilos */
import {
  FundoCarrossel,
  ConteinerCards,
  SetaCarrossel,
} from './estilo';

const Carrossel = ({ categoria, taVermelho = false }) => {
  /* pegar trabalhos da categoria como objeto */

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

      <SetaCarrossel
        className={pos > 0 ? '' : 'invisivel'}
        onClick={() => {
          moverCarrossel(-1, categoria.length);
        }}
      >
        {/* {"<"} */}
        <img src="../imagens/seta/esquerda.svg" alt="seta para a esquerda" />

      </SetaCarrossel>
      <ConteinerCards taVermelho={taVermelho}>

        <Card
          img={categoria[pos].img}
          titulo={categoria[pos].titulo}
          desc={categoria[pos].desc}
        />
        <Card
          img={categoria[pos + 1].img}
          titulo={categoria[pos + 1].titulo}
          desc={categoria[pos + 1].desc}
        />
        <Card
          img={categoria[pos + 2].img}
          titulo={categoria[pos + 2].titulo}
          desc={categoria[pos + 2].desc}
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
    </FundoCarrossel>
  );
};

Carrossel.propTypes = {
  categoria: PropTypes.objectOf(PropTypes.string).isRequired,
  taVermelho: PropTypes.bool.isRequired,
};

export default Carrossel;
