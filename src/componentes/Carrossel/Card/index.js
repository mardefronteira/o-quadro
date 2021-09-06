/* importar react */
import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  img: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

Card.defaultProps = {
  desc: '',
};

export default Card;
