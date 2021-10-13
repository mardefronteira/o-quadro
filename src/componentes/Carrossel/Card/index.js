/* importar react */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/* importar estilos */
import {
  FundoCard, Subtitulo, Desc, ImagemCard,
} from './estilo';

const Card = ({
  img, titulo, desc, taVermelho, url,
}) => {
  console.log(img, titulo, desc);
  return (
    <FundoCard as={Link} to={`/${taVermelho ? 'publicacao' : 'filme'}/${url}`}>
      <ImagemCard src={img.src} alt={img.desc} />
      <Subtitulo taVermelho={taVermelho}>{titulo.toUpperCase()}</Subtitulo>
      <Desc>{desc}</Desc>
    </FundoCard>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

Card.defaultProps = {
  desc: '',
};

export default Card;
