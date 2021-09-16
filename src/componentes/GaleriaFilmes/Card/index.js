import React from 'react';
import { Link } from 'react-router-dom';
import { FundoCard, Legenda, Info } from './estilo';

function Card() {
  function abrirVisualizador() {
  }
  return (
    <FundoCard as={Link} to="/filme/1" onClick={abrirVisualizador()}>
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
