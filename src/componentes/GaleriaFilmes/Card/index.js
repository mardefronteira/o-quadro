import React from 'react';
import { Link } from 'react-router-dom';
import {
  FundoCard, Legenda, Info, ItemInfo,
} from './estilo';

function Card({ filme }) {
  return (
    <FundoCard as={Link} to={`/filme/${filme.url}`}>
      <img src={filme.imgIcone.src} alt={filme.imgIcone.desc} />
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
