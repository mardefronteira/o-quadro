import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import {
  FundoCard, Legenda, Info, ItemInfo, InfoMovel,
} from './estilo';
import { useGlobal } from '../../../AcessoGlobal';

function Card({ filme }) {
  const eMovel = useMediaQuery({ query: '(max-width: 799px)' });
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();
  return (
    <FundoCard as={Link} to={`/filme/${filme.url}`}>
      <img
        src={eMovel ? filme.imgPoster.src : filme.imgIcone.src}
        alt={eMovel ? filme.imgPoster.desc : filme.imgIcone.desc}
      />
      <MediaQuery minWidth={800}>
        <Legenda>
          <Info>
            <ItemInfo>{filme.titulo}</ItemInfo>
            <ItemInfo>
              {global.ptBr ? 'de' : 'by'}
              {' '}
              {filme.autor}
            </ItemInfo>
            <ItemInfo>
              {filme.ano}
            </ItemInfo>
          </Info>
        </Legenda>
      </MediaQuery>
      <MediaQuery maxWidth={799}>
        <InfoMovel>
          <p>{filme.titulo}</p>
          <p>
            {global.ptBr ? 'de' : 'by'}
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
