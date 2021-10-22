import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  FundoCard, Legenda, Info, ItemInfo,
} from './estilo';

function Card({ filme }) {
  const eMovel = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <FundoCard as={Link} to={`/filme/${filme.url}`}>
      <img
        src={eMovel ? filme.imgPoster.src : filme.imgPoster.src}
        alt={eMovel ? filme.imgIcone.desc : filme.imgIcone.desc}
      />
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
