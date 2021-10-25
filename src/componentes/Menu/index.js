import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import {
  ConteinerItensMenu,
  ConteinerMenu,
  ConteinerLinguagem,
  ItemMenu,
  ItemLang,
  Logo,
  ConteinerMenuMobile,
  Cabecalho,
  BotaoMenu,
  LogoMobile,
  ConteinerItens,
  OpcoesMenu,
  ItemMenuMobile,
} from './estilo';

function Menu({ estado = 1 }) {
  return (
    <>
      <MediaQuery maxWidth={799}>
        <ConteinerMenuMobile>
          <Cabecalho>
            <LogoMobile src="/imagens/oquadro_verde_horizontal1.svg" alt="Logo o quadro" />
            <BotaoMenu>
              <img src="./imagens/menu_mobile.svg" alt="Botão Menu" />
            </BotaoMenu>
          </Cabecalho>
          <ConteinerItens>
            <OpcoesMenu>
              <ItemMenuMobile />
            </OpcoesMenu>
          </ConteinerItens>
        </ConteinerMenuMobile>
      </MediaQuery>
      <MediaQuery minWidth={800}>
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
      </MediaQuery>

    </>
  );
}

Menu.propTypes = {
  estado: PropTypes.number.isRequired,
};

export default Menu;
