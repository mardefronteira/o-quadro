import React from 'react';
import { FundoCard, Legenda, Info } from './estilo';

function Card() {
  return (
    <FundoCard href="">
      <img src="./imagens/teste/previaCard.png" alt="" />
      <Legenda>
        <Info>
          Terror Noturno
          <br />
          de Evandro Scorsin
          <br />
          2019
        </Info>
      </Legenda>
    </FundoCard>
  );
}

export default Card;
