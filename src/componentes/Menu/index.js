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
import { useGlobal } from '../../AcessoGlobal';

function Menu({ estado = 1 }) {
  const [global, mudarGlobal] = useGlobal();
  const [taAberto, setTaAberto] = useState(false);
  const { logos } = global.db;
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
              <ItemLangMobile estado={estado}
              lingua={global.ptBr}
              onClick={() => {
                mudarGlobal({ ptBr: true });
              }}
            >
              {'PT '} </ItemLangMobile>
              /
              <ItemLangMobile estado={estado}
              lingua={!global.ptBr}
              onClick={() => {
                mudarGlobal({ ptBr: false });
              console.log(global)
              }}
            >
              {' EN'}</ItemLangMobile>
            </ConteinerLinguagemMobile>
          </Cabecalho>
          <ConteinerTaAberto onClick={() => { setTaAberto(!taAberto); }}>
            <ConteinerItens taAberto={taAberto}>
              <OpcoesMenu>
                <li><ItemMenuMobile as={Link} to="/filmes/">
                  {global.ptBr ? 'Filmes ' : 'FILMS '}
                </ItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/filmes/longas">
                  {global.ptBr ? 'Longa Metragem' : 'Feature-length films'}
                </SubItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/filmes/medias">
                  {global.ptBr ? 'Média Metragem' : 'Medium-length films'}
                </SubItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/filmes/curtas">
                  {global.ptBr ? 'Curta Metragem' : 'Short-length films'}
                </SubItemMenuMobile></li>
                <li><ItemMenuMobile as={Link} to="/metro/">
                  {global.ptBr ? 'Festival Metrô' : 'METRO FESTIVAL'}
                </ItemMenuMobile></li>
                <li><ItemMenuMobile as={Link} to="/publicacoes">
                  {global.ptBr ? 'Publicações' : 'BOOKS '}
                </ItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/sobre" estado={estado}>
                  {global.ptBr ? 'O que é?' : 'About'}
                </SubItemMenuMobile></li>
                <li><SubItemMenuMobile as={Link} to="/colecao" estado={estado}>
                  {global.ptBr ? 'Coleção Escrever o Cinema' : 'Cinema In Writing Collection'}
                </SubItemMenuMobile></li>
                <li><ItemMenuMobile as={Link} to="/quem-somos">
                  {global.ptBr ? 'Quem Somos' : 'ABOUT US'}
                </ItemMenuMobile></li>
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
              <li><ItemMenu as={Link} to="/filmes/" estado={estado}>
                {global.ptBr ? 'Filmes ' : 'FILMS '}
              </ItemMenu></li>
              <li><ItemMenu as={Link} to="/filmes/longas" estado={estado}>
                {global.ptBr ? 'Longa Metragem' : 'Feature-length films'}
              </ItemMenu></li>
              <li><ItemMenu as={Link} to="/filmes/medias" estado={estado}>
                {global.ptBr ? 'Média Metragem' : 'Medium-length films'}
              </ItemMenu></li>
              <li><ItemMenu as={Link} to="/filmes/curtas" estado={estado}>
                {global.ptBr ? 'Curta Metragem' : 'Short-length films'}
              </ItemMenu></li>
            </ul>
            <ItemMenu as={Link} to="/metro/" estado={estado}>
              {global.ptBr ? 'Festival Metrô' : 'METRO FESTIVAL'}
            </ItemMenu>

            {estado !== 0 ? (
              <ItemMenu as={Link} to="/" className="logo">
                <Logo
                  src={`${estado === 1 ? logos.oquadro.verdeVertical.src : logos.aquadro.vermelhoVertical.src}`}
                  estado={estado}
                />
              </ItemMenu>
            ) : ''}
            <ul className="dropdown">
              <li><ItemMenu as={Link} to="/publicacoes" estado={estado}>
                {global.ptBr ? 'Publicações' : 'BOOKS '}
              </ItemMenu></li>
              <li><ItemMenu as={Link} to="/publicacoes" estado={estado}>
                {global.ptBr ? 'O que é?' : 'About'}
              </ItemMenu></li>
              <li><ItemMenu as={Link} to="/colecao" estado={estado}>
                {global.ptBr ? 'Coleção Escrever o Cinema' : 'Cinema In Writing Collection'} </ItemMenu></li>
            </ul>
            <ItemMenu as={Link} to="/quem-somos" estado={estado}>
              {global.ptBr ? 'Quem Somos' : 'ABOUT US'}
            </ItemMenu>
          </ConteinerItensMenu>
          <ConteinerLinguagem estado={estado}>
            <ItemLang
              estado={estado}
              lingua={global.ptBr}
              onClick={() => {
                mudarGlobal({ ptBr: true });
              }}
            >
              {'PT '}
            </ItemLang>
            /
            <ItemLang
              estado={estado}
              lingua={!global.ptBr}
              onClick={() => {
                mudarGlobal({ ptBr: false });
              console.log(global)
              }}
            >
              {' EN'}
            </ItemLang>
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
