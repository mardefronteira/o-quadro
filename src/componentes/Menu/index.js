import React, { useState } from 'react';
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
  ConteinerLinguagemMobile,
  ItemLangMobile,
  SubItemMenuMobile,
} from './estilo';

function Menu({ estado = 1 }) {
  const [taAberto, setTaAberto] = useState(false);
  return (
    <>
      <MediaQuery maxWidth={799}>
        <ConteinerMenuMobile>
          <Cabecalho>
            <BotaoMenu onClick={() => { setTaAberto(!taAberto); }}>
              <img src="/imagens/menu_mobile.svg" alt="Botão Menu" />
            </BotaoMenu>
            <LogoMobile
              src={`/imagens/${estado === 1 ? 'oquadro_verde_horizontal1' : 'aquadro_vermelho_horizontal'}.svg`}
              estado={estado}
            />
            <ConteinerLinguagemMobile>
              <ItemLangMobile>PT </ItemLangMobile>
              /
              <ItemLangMobile>EN</ItemLangMobile>
            </ConteinerLinguagemMobile>
          </Cabecalho>
          <ConteinerItens taAberto={taAberto}>
            <OpcoesMenu>
              <li><ItemMenuMobile as={Link} to="/filmes/">Filmes</ItemMenuMobile></li>
              <li><SubItemMenuMobile as={Link} to="/filmes/longas">Curta Metragem</SubItemMenuMobile></li>
              <li><SubItemMenuMobile as={Link} to="/filmes/medias">Média Metragem</SubItemMenuMobile></li>
              <li><SubItemMenuMobile as={Link} to="/filmes/curtas">Longa Metragem</SubItemMenuMobile></li>
              <li><ItemMenuMobile as={Link} to="/metro/">Festival Metrô</ItemMenuMobile></li>
              <li><ItemMenuMobile as={Link} to="/publicacoes">Publicações</ItemMenuMobile></li>
              <li><ItemMenuMobile as={Link} to="/quem-somos">Quem Somos</ItemMenuMobile></li>
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
