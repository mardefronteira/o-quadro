/* importar react */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/* importar estilos */
import {
  FundoCard, Subtitulo, Desc, ImagemCard,
} from './estilo';

const Card = ({ img, titulo, desc }) => (
  <FundoCard as={Link} to="/filme/1">
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
