//importar react
import React, { useState } from "react";
// importar componentes
import Card from "./Card/index";
// importar estilos
import {
  FundoCarrossel,
  ConteinerCards,
  TituloAnimado,
  SetaCarrossel,
} from "./estilo";

const Carrossel = ({ categoria, corFundo }) => {
  // pegar trabalhos da categoria como objeto

  // variável pra conter a posição do Carrossel
  const [pos, moverCarrossel] = DefinirPos(0);

  return (
    <FundoCarrossel corFundo={corFundo}>
      <TituloAnimado>
        
      </TituloAnimado>
      <ConteinerCards>
        <SetaCarrossel
          className={pos > 0 ? "" : "invisivel"}
          onClick={() => {
            moverCarrossel(-1, categoria.length);
          }}
        >
          {/* {"<"} */}
          <img src="./imagens/seta/esquerda.svg" alt="seta para a esquerda"></img>
          
        </SetaCarrossel>
        <Card
          img={categoria[pos].img}
          titulo={categoria[pos].titulo}
          desc={categoria[pos].desc}
        ></Card>
        <Card
          img={categoria[pos + 1].img}
          titulo={categoria[pos + 1].titulo}
          desc={categoria[pos + 1].desc}
        ></Card>
        <Card
          img={categoria[pos + 2].img}
          titulo={categoria[pos + 2].titulo}
          desc={categoria[pos + 2].desc}
        ></Card>
        <SetaCarrossel
          className={pos < categoria.length - 3 ? "" : "invisivel"}
          onClick={() => {
            moverCarrossel(1, categoria.length);
          }}
        >
          {/* {">"} */}
          <img src="./imagens/seta/direita.svg" alt="seta para a direita"></img>
        </SetaCarrossel>
      </ConteinerCards>
    </FundoCarrossel>
  );
};

const DefinirPos = () => {
  const [pos, defPos] = useState(0);

  const moverCarrossel = (direcao, numItens) => {
    let moverPara = pos + 3 * direcao;
    defPos(restringir(moverPara, 0, numItens - 3));
  };

  return [pos, moverCarrossel];
};

const restringir = (val, min, max) => {
  if (val < min) {
    val = min;
  } else if (val > max) {
    val = max;
  }
  return val;
};

export default Carrossel;