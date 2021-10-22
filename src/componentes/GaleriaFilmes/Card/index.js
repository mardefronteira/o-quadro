import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import {
  FundoCard, Legenda, Info, ItemInfo, InfoMovel,
} from './estilo';

function Card({ filme }) {
  return (
    <FundoCard as={Link} to={`/filme/${filme.url}`}>
      <img src={filme.imgIcone.src} alt={filme.imgIcone.desc} />
      <MediaQuery minWidth={1224}>
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
      </MediaQuery>
      <MediaQuery maxWidth={800}>
        <InfoMovel>
          <p>{filme.titulo}</p>
          <p>
            de
            {' '}
            {filme.autor}
          </p>
          <p>
            {filme.ano}
          </p>
        </InfoMovel>

      </MediaQuery>
    </FundoCard>
  );
}

export default Card;
