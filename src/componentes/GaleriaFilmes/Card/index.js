import React from 'react';
import { Link } from 'react-router-dom';
import {
  FundoCard, Legenda, Info, ItemInfo,
} from './estilo';

function Card({ filme }) {
  return (
    <FundoCard as={Link} to={`/filme/${filme.url}`}>
      <img src={filme.imgDestaque.src} alt={filme.imgDestaque.desc} />
      <Legenda>
        <Info>
          <ItemInfo>{filme.titulo}</ItemInfo>
          <ItemInfo>
            de
            {' '}
            {filme.autor}
          </ItemInfo>
          <ItemInfo>
            {filme.ano}
          </ItemInfo>
        </Info>
      </Legenda>
    </FundoCard>
  );
}

export default Card;
