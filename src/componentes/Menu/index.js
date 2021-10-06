import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ConteinerItensMenu, ConteinerMenu, ConteinerLinguagem, ItemMenu, ItemLang, Logo,
} from './estilo';

function Menu({ estado = 1 }) {
  return (
    <ConteinerMenu estado={estado}>
      {estado === 0 ? (
        <Logo src="/imagens/oquadro_verde_vertical1.svg" estado={estado} />
      ) : ''}
      <ConteinerItensMenu estado={estado}>
        <ul className="dropdown">
          <li><ItemMenu as={Link} to="/filmes/" estado={estado}>FILMES </ItemMenu></li>
          <li><ItemMenu as={Link} to="/filmes/longas" estado={estado}>LONGAS METRAGEM </ItemMenu></li>
          <li><ItemMenu as={Link} to="/filmes/medias" estado={estado}>MÉDIAS METRAGENS </ItemMenu></li>
          <li><ItemMenu as={Link} to="/filmes/curtas" estado={estado}>CURTAS METRAGENS </ItemMenu></li>
        </ul>
        <ItemMenu as={Link} to="/metro/" estado={estado}>FESTIVAL METRÔ </ItemMenu>

        {estado !== 0 ? (
          <ItemMenu as={Link} to="/" className="logo">
            <Logo
              src={`/imagens/${estado === 1 ? 'oquadro_verde_vertical1' : 'aquadro_vermelho'}.svg`}
              estado={estado}
            />
          </ItemMenu>
        ) : ''}

        <ItemMenu as={Link} to="/publicacoes" estado={estado}>PUBLICAÇÕES </ItemMenu>
        <ItemMenu as={Link} to="/quem-somos" estado={estado}>QUEM SOMOS </ItemMenu>
      </ConteinerItensMenu>
      <ConteinerLinguagem estado={estado}>
        <ItemLang estado={estado}>PT </ItemLang>
        /
        <ItemLang estado={estado}>EN</ItemLang>
      </ConteinerLinguagem>
    </ConteinerMenu>
  );
}

Menu.propTypes = {
  estado: PropTypes.number.isRequired,
};

export default Menu;
