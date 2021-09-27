import React from 'react';
import { Link } from 'react-router-dom';
import { FundoCard, Legenda, Info } from './estilo';

function Card({ filme }) {
  return (
    <FundoCard as={Link} to={`filme/${filme.url}`}>
      <img src={filme.img.src} alt={filme.img.desc} />
      <Legenda>
        <Info>
          {filme.titulo}
          <br />
          de
          {' '}
          {filme.autor}
          <br />
          {filme.ano}
        </Info>
      </Legenda>
    </FundoCard>
  );
}

export default Card;
