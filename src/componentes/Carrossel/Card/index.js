/* importar react */
import React from 'react';
/* importar estilos */
import {
  FundoCard, Subtitulo, Desc, ImagemCard,
} from './estilo';

const Card = ({ img, titulo, desc }) => (
  <FundoCard>
    <ImagemCard src={`/imagens/teste/${img}.png`} />
    <Subtitulo>{titulo}</Subtitulo>
    <Desc>{desc}</Desc>
  </FundoCard>
);

export default Card;
