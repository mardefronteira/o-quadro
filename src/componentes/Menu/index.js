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
  ConteinerTaAberto,
  OpcoesMenu,
  ItemMenuMobile,
  ConteinerLinguagemMobile,
  ItemLangMobile,
  SubItemMenuMobile,
} from './estilo';
import dataBase from '../../db';

function Menu({ estado = 1 }) {
  const [taAberto, setTaAberto] = useState(false);
  const { logos } = dataBase;
  return (
    <>
      <MediaQuery maxWidth={799}>
        <ConteinerMenuMobile>
          <Cabecalho>
            <BotaoMenu onClick={() => { setTaAberto(!taAberto); }}>
              <img src="/imagens/menu-mobile.svg" alt="Botão Menu" />
            </BotaoMenu>
            <ItemMenu as={Link} to="/" className="logo">
              <LogoMobile
                src={`${estado === 1 ? logos.oquadro.verdeVertical.src : logos.aquadro.vermelhoVertical.src}`}
                alt={logos.oquadro.verdeVertical.desc}
              />
            </ItemMenu>
            <ConteinerLinguagemMobile>
              <ItemLangMobile>PT </ItemLangMobile>
              /
              <ItemLangMobile>EN</ItemLangMobile>
            </ConteinerLinguagemMobile>
          </Cabecalho>
          <ConteinerTaAberto onClick={() => { setTaAberto(!taAberto); }}>
            <ConteinerItens taAberto={taAberto}>
              <OpcoesMenu>
                <li><ItemMenuMobile as={Link} to="/filmes/">Filmes</ItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/filmes/curtas">Curta Metragem</SubItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/filmes/medias">Média Metragem</SubItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/filmes/longas">Longa Metragem</SubItemMenuMobile></li>
                <li><ItemMenuMobile as={Link} to="/metro/">Festival Metrô</ItemMenuMobile></li>
                <li><ItemMenuMobile as={Link} to="/publicacoes">Publicações</ItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/sobre" estado={estado}>O que é? </SubItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/colecao" estado={estado}>Coleção Escrever o Cinema </SubItemMenuMobile></li>
                <li><ItemMenuMobile as={Link} to="/quem-somos">Quem Somos</ItemMenuMobile></li>
              </OpcoesMenu>
            </ConteinerItens>
          </ConteinerTaAberto>
        </ConteinerMenuMobile>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <ConteinerMenu estado={estado}>
          {estado === 0 ? (
            <Logo src={logos.oquadro.verdeVertical.src} estado={estado} />
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
                  src={`${estado === 1 ? logos.oquadro.verdeVertical.src : logos.aquadro.vermelhoVertical.src}`}
                  estado={estado}
                />
              </ItemMenu>
            ) : ''}
            <ul className="dropdown">
              <li><ItemMenu as={Link} to="/publicacoes" estado={estado}>PUBLICAÇÕES </ItemMenu></li>
              <li><ItemMenu as={Link} to="/publicacoes" estado={estado}>O QUE É? </ItemMenu></li>
              <li><ItemMenu as={Link} to="/colecao" estado={estado}>COLEÇÃO ESCREVER O CINEMA </ItemMenu></li>
            </ul>
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
